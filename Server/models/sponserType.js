const mongoose = require("mongoose");

const sponserSchema = new mongoose.Schema({
    sptype : {
        type: String,
        required: true
    }
}, { timestamps: true });

const Sponser = mongoose.model("sponserType", sponserSchema);

module.exports = Sponser;