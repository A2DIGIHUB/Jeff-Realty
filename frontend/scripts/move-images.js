const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'public', 'images');
const targetDir = sourceDir;

// Function to move files from subdirectories to root
function moveFiles(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            // Recursively process subdirectories
            moveFiles(fullPath);
        } else if (path.dirname(fullPath) !== sourceDir) {
            // Move only files that aren't already in the root
            const targetPath = path.join(targetDir, path.basename(fullPath));
            if (!fs.existsSync(targetPath)) {
                fs.renameSync(fullPath, targetPath);
                console.log(`Moved: ${fullPath} -> ${targetPath}`);
            }
        }
    });
}

// Move all files to root
moveFiles(sourceDir);

// Clean up empty directories
function removeEmptyDirs(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            removeEmptyDirs(fullPath);
            // Remove directory if empty
            if (fs.readdirSync(fullPath).length === 0) {
                fs.rmdirSync(fullPath);
                console.log(`Removed empty directory: ${fullPath}`);
            }
        }
    });
}

// Clean up
removeEmptyDirs(sourceDir);
