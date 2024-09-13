const express = require('express');
const uploadT = require('../middlewares/createTeam');
const upload = require('../middlewares/upload');
const router = express.Router();
// crate team 
const { createTeam } = require('../controllers/addTeam');
// bhavesh 
const { signUser, loginUser, getUser, editUserCaptain } = require('../controllers/userController');
const { addSponsorType, getSponsorType, addFoodSpon, addOtherSpon, getFoodSpon, getOtherSpon } = require('../controllers/sponsorController');
const { addAdvertise, getAdvertiser } = require('../controllers/advertiserCont');

router.post("/sign", signUser);
router.post("/login", loginUser);
router.get("/user", getUser);
router.patch('/editCaptain', editUserCaptain);

router.post("/sponsorType", addSponsorType); 
router.get("/getSponsorType", getSponsorType)

router.post('/addFoodSpon', upload.single('spImage'), addFoodSpon);
router.get('/getFoodSpon', getFoodSpon);
router.post('/addOtherSpon', upload.single('spOtherImage'), addOtherSpon);
router.get('/getOtherSpon', getOtherSpon);

router.post('/addAdvertise', upload.single('shopLogo'), addAdvertise);
router.get('/getAdvertise',  getAdvertiser);



// dilip
// router.post('/addsponsertype', addSptype);
router.get('/add', (req, res) => {
  res.send("Hello man");
});

router.post('/addteam', uploadT.fields([
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