const mongoose = require("mongoose");

const connectDB = async() => {
    console.log("MongoDB URI:", process.env.MONGODB_URI); 
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected Successfully");
    }
    catch(error){
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
};

module.exports = connectDB; 