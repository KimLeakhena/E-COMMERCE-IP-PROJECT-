const fs = require("fs");
const path = require("path");
const multer = require("multer");

const uploadDir = path.join(__dirname, "../public/uploads");

// Ensure uploads folder exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Use validated upload path
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + file.originalname;
        cb(null, uniqueSuffix);
    }
});

const upload = multer({ storage });
module.exports = upload;
