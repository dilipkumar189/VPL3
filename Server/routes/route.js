const express = require('express');
const upload = require('../middlewares/createTeam');
const { createTeam } = require('../controllers/addTeam');
const { addSptype } = require('../controllers/sponser');
const router = express.Router();


router.post('/addsponsertype', addSptype);
router.get('/add', (req, res) => {
  res.send("Hello man");
});

router.post('/addteam', upload.fields([
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
    { name: 'player14Image', maxCount: 1 }
  ]), createTeam);

router.get("/", (req, res) => {
    res.send("hello");
})
module.exports = router;