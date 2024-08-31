const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  village: {
    type: String,
    required: true
  },
  image: {
    type: String,
  }
  
});

const teamSchema = new mongoose.Schema({
  team_name:  {
    type: String,
    required: true
  },
  mobile_no: {
    type: String,
    required: true
  },
  logo: {
    type: String,
  },
  player1: playerSchema,
  player2: playerSchema,
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
