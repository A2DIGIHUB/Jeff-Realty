const { createClient } = require('pexels');
const fs = require('fs');
const https = require('https');
const path = require('path');

// Initialize the client with your API key
// You'll need to replace this with your actual Pexels API key
const client = createClient('YOUR_PEXELS_API_KEY');

const categories = {
    properties: ['luxury house', 'modern apartment', 'african house', 'nigerian property'],
    locations: ['enugu nigeria', 'calabar nigeria'],
    agents: ['real estate agent', 'african business person'],
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

async function downloadImages() {
    for (const [category, queries] of Object.entries(categories)) {
        const dir = path.join(__dirname, '..', 'public', 'images', category);
        
        // Create directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        for (const query of queries) {
            try {
                const photos = await client.photos.search({ 
                    query, 
                    per_page: 5,
                    size: 'large'
                });

                console.log(`Downloading ${photos.photos.length} images for ${query}...`);

                for (let i = 0; i < photos.photos.length; i++) {
                    const photo = photos.photos[i];
                    const filename = `${query.replace(/\s+/g, '-')}-${i + 1}.jpg`;
                    const filepath = path.join(dir, filename);
                    
                    await downloadImage(photo.src.large, filepath);
                    console.log(`Downloaded: ${filename}`);
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
