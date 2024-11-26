const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'public', 'images');
const categories = ['properties', 'locations', 'agents', 'testimonials', 'categories'];

// Create directories if they don't exist
categories.forEach(category => {
    const dir = path.join(sourceDir, category);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Clean up any existing subdirectories
categories.forEach(category => {
    const dir = path.join(sourceDir, category);
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            fs.rmSync(filePath, { recursive: true, force: true });
        }
    });
});
