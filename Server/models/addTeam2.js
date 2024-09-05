const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  adhar: {
    type: String,
    required: true
  },
  village: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
  
});

const teamSchema = new mongoose.Schema({
  team_name:  {
    type: String,
    required: true
  },
  village: {
    type: String,
    required: true
  },
  sponser_1: {
    type: String,
    required: true
  },
  sponser_2: {
    type: String,
    required: true
  },
  captain: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true  
  },
  logo: {         
    type: String,
    required: true
  },
  player1: playerSchema,
  player2: playerSchema
}, { timestamps: true });

const Team = mongoose.model("Team_two", teamSchema);
module.exports = Team;