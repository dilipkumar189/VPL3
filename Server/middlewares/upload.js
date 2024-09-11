const multer = require('multer');

// Configure multer for file handling
const upload = multer({ 
    storage: multer.diskStorage({}),
    limits: {fileSize: 500000}
}); // Temporary storage for uploaded files

module.exports = upload