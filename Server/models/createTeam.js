const mongoose = require("mongoose");

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
    team_name: {
        type: String,
        required: true,
        unique: true
    },
    village: {
        type: String,
        requir: true
    },
    sponse_1: {
        type: String,
        require: true
    },
    sponse_2: {
        type: String,
        require: true
    },
    captain: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    logo: {
        type: String,
        require: true
    },
    player1: {},
    player2: playerSchema,
    player3: playerSchema,
    player4: playerSchema,
    player5: playerSchema,
    player6: playerSchema,
    player7: playerSchema,
    player8: playerSchema,
    player9: playerSchema,
    player10: playerSchema,
    player11: playerSchema,
    player12: playerSchema,
    player13: playerSchema

}, { timestamps: true });

const Teamview = mongoose.model('team_view', teamSchema);

module.exports = Teamview;