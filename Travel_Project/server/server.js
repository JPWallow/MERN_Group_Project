const express = require('express')
const app = express()
app.use(express.json())
const port = 8000

const cors = require('cors')
app.use(cors({
    origin: "http://localhost:3000"
}));

// config
require("./config/mongoose.config")

// routes
require("./routes/travel.routes")(app)


app.listen(port,()=>{console.log(`Successfully listening and connected to port ${port}`)})