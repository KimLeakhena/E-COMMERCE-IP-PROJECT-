const cloudinary = require('cloudinary').v2;
const multer = require('multer');


require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


// Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'chocobebe-products', // ✅ RECOMMENDED: give a clear folder name
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
        transformation: [{ width: 800, height: 800, crop: 'limit' }],
    },
});

const upload = multer({ storage });

module.exports = upload;

