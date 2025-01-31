const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    const imagesDir = path.join(__dirname, '..', '..', 'public', 'images');

    // Read the images directory
    const images = fs.readdirSync(imagesDir).map(file => ({
        url: `/images/${file}`,
    }));

    return {
        statusCode: 200,
        body: JSON.stringify(images),
    };
};