const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/TravelDB",{
    useNewUrlParser: true,      // adding these options to avoid possible error related to deprecation
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("Successfully connected to database")
    })
    .catch((err)=>{
        console.log("Failed to connect to database")
    })