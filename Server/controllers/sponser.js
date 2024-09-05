const Sptype = require('../models/sponserType'); // Adjust the path as needed

const addSptype = async (req, res) => {
  try {
    const { sptype } = req.body;

    // Create a new sptype
    const newSptype = new Sptype({ sptype });

    // Save the new sptype to the database
    const savedSptype = await newSptype.save();

    res.status(201).json({
      success: true,
      data: savedSptype,
      message: 'Sptype added successfully'
    });
  } catch (error) {
    // Check if the error is a duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'This sptype already exists'
      });
    }

    // Handle other errors
    res.status(500).json({
      success: false,
      message: 'An error occurred while adding the sptype',
      error: error.message
    });
  }
};

module.exports = {
  addSptype
};