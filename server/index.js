const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require('body-parser');
const Router = require("./routes/route");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

connectDB();

// const corsData = {
//     origin: 'https://vpl-tournament.vercel.app', // Allow only your frontend URL 
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true 
// };

// app.use(cors(corsData));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/", Router);

app.listen(PORT, () =>{
    console.log(`Server started at: http://localhost:${PORT}`);
})