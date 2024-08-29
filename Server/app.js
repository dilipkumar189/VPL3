const express = require("express");
const connectDB = require("./config/db");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

connectDB();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () =>{
    console.log(`Server started at: http://localhost:${PORT}`);
})