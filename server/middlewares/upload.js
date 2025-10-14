const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage({}),
  limits: { fileSize: 2097152 },
});

module.exports = upload;
