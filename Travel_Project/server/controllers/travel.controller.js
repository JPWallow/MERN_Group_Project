const Travel = require('../models/travel.model');

const TravelController = {

      // Renee was here

      // Eddie was here

    // Create a travel desination
    create:(req, res)=>{
        Travel.create(req.body)
        .then((travel)=>{
            res.status(201).json(travel);
        })
        .catch((err)=>{
            console.log("An error occurred");
            res.status(400).json({message:"An error occurred",error:err})
        })
    },
    // Read
    getAll:(req, res)=>{
        Travel.find({})
        .then((travel)=>{
            res.status(200).json(travel)
        })
        .catch((err)=>{
            res.status(500).json({message:"An error occurred",error:err})
        })
    },
    getOne:(req, res)=> {
        Travel.find({_id:req.params.id})
        .then((travel)=>{
            res.status(200).json({message:"An error occurred",error:err})
        })
        .catch((err)=>{
            res.status(500).json({message:"An error occurred",error:err})
        })
    },
    // Update



    // Delete

}

module.exports = TravelController