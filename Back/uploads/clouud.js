const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');


cloudinary.config({
    cloud_name: 'dtrpwtqsm',
    api_key: '689696942975912',
    api_secret: '5O6ifQHwMe7UKwJxjZJs93L7X00'
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

