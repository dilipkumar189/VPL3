const mongoose = require("mongoose");

const advertiserSchema = new mongoose.Schema({
    shop_name: {
        type: String,
        required: true,
        unique: true
    },
    logo: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
    
    
    
})