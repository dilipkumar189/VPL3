const Team = require('../models/addTeam');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

exports.createTeam = async (req, res) => {
  try {
    const { team_name, village, sponser_1, sponser_2, captain, mobile, player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14 } = req.body;

    // Check if all required fields are present
    if (!team_name || !village || !sponser_1 || !sponser_2 || !captain || !mobile || !player1 || !player2 || !player3 || !player4 || !player5 || !player6 || !player7 || !player8 || !player9 || !player10 || !player11 || !player12 || !player13 || !player14) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if files are present
    if (!req.files || !req.files['logo'] || !req.files['player1Image'] || !req.files['player2Image'] || !req.files['player3Image'] || !req.files['player4Image'] || !req.files['player5Image'] || !req.files['player6Image'] || !req.files['player7Image'] || !req.files['player8Image'] || !req.files['player9Image'] || !req.files['player10Image'] || !req.files['player11Image'] || !req.files['player12Image'] || !req.files['player13Image'] || !req.files['player14Image']) {
      return res.status(400).json({ message: 'All image files are required' });
    }

    // Function to upload file to Cloudinary and delete local file
    const uploadToCloudinary = async (file) => {
      try {
        const result = await cloudinary.uploader.upload(file.path);
        fs.unlinkSync(file.path); // Delete the local file after upload
        return result.secure_url;
      } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
      }
    };

    // Upload images to Cloudinary
    const logoUrl = await uploadToCloudinary(req.files['logo'][0]);
    const player1ImageUrl = await uploadToCloudinary(req.files['player1Image'][0]);
    const player2ImageUrl = await uploadToCloudinary(req.files['player2Image'][0]);
    const player3ImageUrl = await uploadToCloudinary(req.files['player3Image'][0]);
    const player4ImageUrl = await uploadToCloudinary(req.files['player4Image'][0]);
    const player5ImageUrl = await uploadToCloudinary(req.files['player5Image'][0]);
    const player6ImageUrl = await uploadToCloudinary(req.files['player6Image'][0]);
    const player7ImageUrl = await uploadToCloudinary(req.files['player7Image'][0]);
    const player8ImageUrl = await uploadToCloudinary(req.files['player8Image'][0]);
    const player9ImageUrl = await uploadToCloudinary(req.files['player9Image'][0]);
    const player10ImageUrl = await uploadToCloudinary(req.files['player10Image'][0]);
    const player11ImageUrl = await uploadToCloudinary(req.files['player11Image'][0]);
    const player12ImageUrl = await uploadToCloudinary(req.files['player12Image'][0]);
    const player13ImageUrl = await uploadToCloudinary(req.files['player13Image'][0]);
    const player14ImageUrl = await uploadToCloudinary(req.files['player14Image'][0]);

    // Parse player data if it's a string, otherwise use as is
    const player1Data = typeof player1 === 'string' ? JSON.parse(player1) : player1;
    const player2Data = typeof player2 === 'string' ? JSON.parse(player2) : player2;
    const player3Data = typeof player3 === 'string' ? JSON.parse(player3) : player3;
    const player4Data = typeof player4 === 'string' ? JSON.parse(player4) : player4;
    const player5Data = typeof player5 === 'string' ? JSON.parse(player5) : player5;
    const player6Data = typeof player6 === 'string' ? JSON.parse(player6) : player6;
    const player7Data = typeof player7 === 'string' ? JSON.parse(player7) : player7;
    const player8Data = typeof player8 === 'string' ? JSON.parse(player8) : player8;
    const player9Data = typeof player9 === 'string' ? JSON.parse(player9) : player9;
    const player10Data = typeof player10 === 'string' ? JSON.parse(player10) : player10;
    const player11Data = typeof player11 === 'string' ? JSON.parse(player11) : player11;
    const player12Data = typeof player12 === 'string' ? JSON.parse(player12) : player12;
    const player13Data = typeof player13 === 'string' ? JSON.parse(player13) : player13;
    const player14Data = typeof player14 === 'string' ? JSON.parse(player14) : player14;

    const newTeam = new Team({
      team_name,
      village,
      sponser_1,
      sponser_2,
      captain,
      mobile,
      logo: logoUrl,
      player1: {
        ...player1Data,
        image: player1ImageUrl
      },
      player2: {
        ...player2Data,
        image: player2ImageUrl
      },
      player3: {
        ...player3Data,
        image: player3ImageUrl
      },
      player4: {
        ...player4Data,
        image: player4ImageUrl
      },
      player5: {
        ...player5Data,
        image: player5ImageUrl
      },
      player6: {
        ...player6Data,
        image: player6ImageUrl
      },
      player7: {
        ...player7Data,
        image: player7ImageUrl
      },
      player8: {
        ...player8Data,
        image: player8ImageUrl
      },
      player9: {
        ...player9Data,
        image: player9ImageUrl
      },
      player10: {
        ...player10Data,
        image: player10ImageUrl
      },
      player11: {
        ...player11Data,
        image: player11ImageUrl
      },
      player12: {
        ...player12Data,
        image: player12ImageUrl
      },
      player13: {
        ...player13Data,
        image: player13ImageUrl
      },
      player14: {
        ...player14Data,
        image: player14ImageUrl
      }
    });

    await newTeam.save();
    res.status(201).json({ message: 'Team created successfully', team: newTeam });
  } catch (error) {
    console.error('Error in createTeam:', error);
    res.status(500).json({ message: 'Error creating team', error: error.toString() });
  }
};