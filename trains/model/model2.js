const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    trainName:{
        type:String,
        require:true
    },
    trainNumber:{
        type:String,
        require:true
    },
    departureTime:{
        Hours:{
            type:Number,
            require:true
        },
        Minutes:{
            type:Number,
            require:true
        },
        Seconds:{
            type:Number,
            require:true
        }
    },
    seatsAvailable:{
        sleeper:{
            type:Number,
            require:true
        },
        AC:{
            type:Number,
            require:true
        },
    },
    price:{
        sleeper:{
            type:Number,
            require:true
        },
        AC:{
            type:Number,
            require:true
        },
    },
    delayedBy:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model("secondModel",Schema);
