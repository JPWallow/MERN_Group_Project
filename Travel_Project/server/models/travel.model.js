// creating a model/schema to structure the document (rows) and connect with a specific collection (table) in the database
    // schema defines the structure of the document (rows) along with validations

const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema ({
    city:{
        type:String,
        required:[true,"City is a required field"], 
        minlength:[3, "City must be at least 3 characters long"]
    },
    country:{
        type:String,
        // required:[true,"Country is a required field"],
        // minlength:[3, "Country must be at least 3 characters long"]
    },
    departed:{
        type:Date,
        required:[true,"Departed is a required field"]
    },
    returned:{
        type:Date,
        required:[true,"Returned is a required field"]
    },
    boxArt:{
        type:String,
        required:[true,"Images is a required field"]
    },
    comments:{
        type:String
    }

},{timestamps:true})

const Travel = mongoose.model("Travel", TravelSchema)

module.exports = Travel