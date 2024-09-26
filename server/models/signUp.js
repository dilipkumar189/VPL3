const mongoose = require('mongoose');

const signSchema = mongoose.Schema({
    username :{
        type : String,
        required : false,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password :{
        type : String,
        required : false,
    },
    captain :{
        type : Boolean,
        required : false,
        default : false
    },
    token : {
        type : String,
        required : false,
    }

}, { timestamps: true });


const sign = mongoose.model('sign', signSchema);

module.exports = sign ;