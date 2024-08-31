const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const uploadMiddleware = upload.fields([
  { name: 'logo', maxCount: 1 },
  { name: 'player1Image', maxCount: 1 },
  { name: 'player2Image', maxCount: 1 },
  { name: 'player3Image', maxCount: 1 },
  { name: 'player4Image', maxCount: 1 },
  { name: 'player5Image', maxCount: 1 },
  { name: 'player6Image', maxCount: 1 },
  { name: 'player7Image', maxCount: 1 },
  { name: 'player8Image', maxCount: 1 },
  { name: 'player9Image', maxCount: 1 },
  { name: 'player10Image', maxCount: 1 },
  { name: 'player11Image', maxCount: 1 },
  { name: 'player12Image', maxCount: 1 },
  { name: 'player13Image', maxCount: 1 },
]);

module.exports = uploadMiddleware;