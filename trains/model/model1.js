const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    companyName:{
        type:String,
        require:true
    },
    ownerName:{
        type:String,
        require:true
    },
    rollNo:{
        type:String,
        require:true
    },
    ownerEmail:{
        type:String,
        require:true
    },
    accessCode:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("firstModel",Schema);
