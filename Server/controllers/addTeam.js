const Team = require('../models/addTeam');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

exports.createTeam = async (req, res) => {
  try {
    const { team_name, mobile_no, player1, player2 } = req.body;

    // Check if all required fields are present
    if (!team_name || !mobile_no || !player1 || !player2) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if files are present
    if (!req.files || !req.files['logo'] || !req.files['player1Image'] || !req.files['player2Image']) {
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

    // Parse player data if it's a string, otherwise use as is
    const player1Data = typeof player1 === 'string' ? JSON.parse(player1) : player1;
    const player2Data = typeof player2 === 'string' ? JSON.parse(player2) : player2;

    const newTeam = new Team({
      team_name,
      mobile_no,
      logo: logoUrl,
      player1: {
        ...player1Data,
        image: player1ImageUrl
      },
      player2: {
        ...player2Data,
        image: player2ImageUrl
      }
    });

    await newTeam.save();
    res.status(201).json({ message: 'Team created successfully', team: newTeam });
  } catch (error) {
    console.error('Error in createTeam:', error);
    res.status(500).json({ message: 'Error creating team', error: error.toString() });
  }
};