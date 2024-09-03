const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const Router = require("./routes/route");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", Router);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () =>{
    console.log(`Server started at: http://localhost:${PORT}`);
})