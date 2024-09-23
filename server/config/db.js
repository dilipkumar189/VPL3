const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI
    // process.env.NODE_ENV === "production"
    //   ? process.env.MONGODB_URI
    //   : "mongodb://localhost:27017/vpl3";

  console.log("MongoDB URI:", mongoURI);

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
