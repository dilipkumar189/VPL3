const express = require('express');
const upload = require('../middlewares/createTeam');
const { createTeam } = require('../controllers/addTeam');
const router = express.Router();


router.post('/addteam', upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'player1Image', maxCount: 1 },
    { name: 'player2Image', maxCount: 1 }
  ]), createTeam);

router.get("/", (req, res) => {
    res.send("hello");
})
module.exports = router;