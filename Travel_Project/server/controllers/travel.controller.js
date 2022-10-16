const Travel = require('../models/travel.model');

const TravelController = {
    // Renee was here
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
    updateOne: (req, res)=>{
        Travel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})  //new:true will show the changes after the updates are made. runValidators:true is saying to do the same validations as in create because default validators only run on post and not on a put or update
        .then((travel)=>{
            res.status(200).json({travel})
        })
        .catch((err)=>{
            res.status(400).json({message:"An error occurred",error:err})
        })
    },
    // Delete
    deleteOne: (req, res)=>{
        Travel.deleteOne({_id:req.params.id})
        .then((deletedTravel)=>{
            console.log(deletedTravel);
            res.json(deletedTravel);
        })
        .catch((err)=>{
            console.log("Unable to delete a destination");
            res.json({message:"An error occurred",error:err})
        })
    }

}

module.exports = TravelController