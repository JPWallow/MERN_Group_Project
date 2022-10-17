const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 8000

const cors = require('cors')
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// config
require("./config/mongoose.config");

// .env
require("dotenv").config();

// routes
require("./routes/travel.routes")(app)
require("./routes/user.routes")(app);


app.listen(process.env.PORT,()=>{console.log(`Successfully listening and connected to port ${port}`)})