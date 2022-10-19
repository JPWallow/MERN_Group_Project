const mongoose = require('mongoose');
const db_name = process.env.DB_NAME;

//mongoose.connect("mongodb://localhost/TravelDB",{
mongoose.connect("mongodb://127.0.0.1:27017/TravelDB",{

    useNewUrlParser: true,      // adding these options to avoid possible error related to deprecation
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("Successfully connected to database")
    })
    .catch((err)=>{
        console.log("Failed to connect to database")
    })