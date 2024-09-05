const Sptype = require('../models/sponserType'); 

const addSptype = async (req, res) => {
  try {
    const { sptype } = req.body;

    const newSptype = new Sptype({ sptype });
    const savedSptype = await newSptype.save();

    res.status(201).json({
      success: true,
      data: savedSptype,
      message: 'Sptype added successfully'
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'This sptype already exists'
      });
    }

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