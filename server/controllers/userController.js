const signSchema = require("../models/signUp");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const transporter = require("../utils/nodemailer");
const Team = require("../models/addTeam");
const { uploadFile } = require("../utils/cloudinary");
const JWT_SECRET = process.env.JWT_SECRET;

const signUser = async (req, res) => {
  const user = req.body;
  try {
    const existingUser = await signSchema.findOne({ email: user.email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" }); // Return 409 Conflict
    }

    const hashPassword = await bcrypt.hash(user.password, 10);
    const newUser = new signSchema({
      ...user,
      password: hashPassword,
    });
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    newUser.token = token;
    await newUser.save();

    // Send welcome email using Nodemailer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: newUser.email,
      subject: "Welcome to VPL Tournament!",
      text: "Congratulations, you have successfully signed up for the VPL tournament!",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Internal server error" }); // Return 500 for server errors
  }
};

// Edit user captain status
const editUserCaptain = async (req, res) => {
  const { userId, captainStatus } = req.body;

  try {
    const user = await signSchema.findByIdAndUpdate(
      userId,
      { captain: captainStatus }, // Update the captain field
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user); // Return the updated user
  } catch (error) {
    console.error("Error during database update:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await signSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      {
        expiresIn: "30M",
      }
    );
    user.token = token;
    await user.save();
    // console.log("login successfully");
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    let userData = await signSchema.find();

    if (userData.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addTeam = async (req, res) => {
  try {
    const teamData = req.body;
    const players = [];

    // upload logo to Cloudinary
    let logoUrl = null;
    if (req.files.logo) {
      logoUrl = await uploadFile(req.files.logo[0]);
    }

    // process player data
    for (let i = 1; i <= 14; i++) {
      const playerData = JSON.parse(teamData[`player${i}`]);
      let playerImageUrl = null;

      if (req.files[`player${i}Image`]) {
        playerImageUrl = await uploadFile(req.files[`player${i}Image`][0]);
      }

      players.push({
        ...playerData,
        image: playerImageUrl,
      });
    }

    // create new team
    const newTeam = new Team({
      ...teamData,
      logo: logoUrl,
      players: players,
    });

    await newTeam.save();

    res
      .status(201)
      .json({ message: "Team created successfully", team: newTeam });
  } catch (error) {
    console.error("Error creating team:", error);
    res
      .status(500)
      .json({ message: "Failed to create team", error: error.message });
  }
};

module.exports = {
  signUser,
  loginUser,
  getUser,
  editUserCaptain,
  addTeam,
};
