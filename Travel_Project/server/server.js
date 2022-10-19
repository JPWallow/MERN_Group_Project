require("dotenv").config();
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.MY_PORT;

const cors = require('cors');
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// config
require("./config/mongoose.config");

// routes
require("./routes/travel.routes")(app)
require("./routes/user.routes")(app);


app.listen(process.env.PORT,()=>{console.log(`Successfully listening and connected to process.env.PORT`)})