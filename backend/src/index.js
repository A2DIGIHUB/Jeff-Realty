require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const AWS = require('aws-sdk');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Configure PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// Configure multer for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload an image.'), false);
    }
  },
});

// Property upload endpoint
app.post('/api/properties', upload.array('images', 10), async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const { title, description, address, price, propertyType, bedrooms, bathrooms, squareFootage } = req.body;
    
    // Upload images to S3
    const imageUrls = await Promise.all(
      req.files.map(async (file) => {
        const params = {
          Bucket: process.env.AWS_S3_BUCKET,
          Key: `properties/${Date.now()}-${file.originalname}`,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: 'public-read',
        };

        const result = await s3.upload(params).promise();
        return result.Location;
      })
    );

    // Insert property into database
    const propertyQuery = `
      INSERT INTO properties (
        title, description, address, price, property_type, 
        bedrooms, bathrooms, square_footage, image_urls
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id
    `;

    const values = [
      title,
      description,
      address,
      price,
      propertyType,
      bedrooms,
      bathrooms,
      squareFootage,
      JSON.stringify(imageUrls),
    ];

    const result = await client.query(propertyQuery, values);
    await client.query('COMMIT');

    res.status(201).json({
      message: 'Property created successfully',
      propertyId: result.rows[0].id,
      imageUrls,
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Failed to create property' });
  } finally {
    client.release();
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
