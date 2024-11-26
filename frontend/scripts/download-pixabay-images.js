const axios = require('axios');
const fs = require('fs');
const https = require('https');
const path = require('path');

// You'll need to replace this with your Pixabay API key
const API_KEY = '47286951-b1a724a9ab3fd4482f3c5ff51';
const PIXABAY_API = 'https://pixabay.com/api/';

// Ensure the images directory exists
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

const categories = {
    properties: [
        'luxury house',
        'modern apartment',
        'mansion',
        'villa',
        'modern house'
    ],
    locations: [
        'african city',
        'nigeria city',
        'modern city'
    ],
    agents: [
        'business person',
        'african business',
        'real estate agent'
    ]
};

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                   .on('error', reject)
                   .once('close', () => resolve(filepath));
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        });
    });
};

async function searchPixabay(query) {
    try {
        const response = await axios.get(PIXABAY_API, {
            params: {
                key: API_KEY,
                q: query,
                per_page: 5,
                image_type: 'photo',
                orientation: 'horizontal',
                category: 'buildings',
                safesearch: true
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching Pixabay:', error.message);
        return { hits: [] };
    }
}

async function downloadImages() {
    // Clean up existing images
    const files = fs.readdirSync(imagesDir);
    for (const file of files) {
        const filePath = path.join(imagesDir, file);
        if (fs.statSync(filePath).isFile() && file.endsWith('.jpg')) {
            fs.unlinkSync(filePath);
        }
    }

    for (const [category, queries] of Object.entries(categories)) {
        for (const query of queries) {
            try {
                const response = await searchPixabay(query);
                console.log(`Downloading ${response.hits.length} images for ${query}...`);

                for (let i = 0; i <response.hits.length; i++) {
                    const image = response.hits[i];
                    const filename = `${query.replace(/\s+/g, '-')}-${i + 1}.jpg`;
                    const filepath = path.join(imagesDir, filename);
                    
                    await downloadImage(image.largeImageURL, filepath);
                    console.log(`Downloaded: ${filename}`);

                    // Create attribution file
                    const attributionPath = path.join(imagesDir, 'attribution.txt');
                    const attributionText = `${filename}:
- Author: ${image.user}
- Pixabay URL: ${image.pageURL}
- License: Pixabay License
- Downloaded: ${new Date().toISOString()}\n\n`;

                    fs.appendFileSync(attributionPath, attributionText);
                }
            } catch (error) {
                console.error(`Error downloading images for ${query}:`, error);
            }
        }
    }
}

downloadImages().then(() => {
    console.log('All images downloaded successfully!');
}).catch(console.error);
