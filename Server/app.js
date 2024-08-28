const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = 4000

connectDB();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () =>{
    console.log(`Server started at: http://localhost:${PORT}`);
})