const asyncHandler = require('express-async-handler');
const secondSchema = require('../model/trains');

const getAll = asyncHandler(async(req,res)=>{
    const detail = await secondSchema.find();
    res.status(200).json(detail);
})

const getOne = asyncHandler(async(req,res)=>{
    const detail = await secondSchema.findById(req.params.trainNumber);
    res.status(200).json(detail);
})

const train = asyncHandler(async(req,res)=>{
    const {trainName,trainNumber,departureTime,seatsAvailable,price} = req.body;
    if(!trainName || !trainNumber || !departureTime || !seatsAvailable || !price){
        res.status(400);
        throw new Error("All Fields needed");
    }
    const create = await secondSchema.create({trainName,trainNumber,departureTime,seatsAvailable,price});
    res.status(200).json({
        trainName:trainName,
        trainNumber:trainNumber,
        departureTime:departureTime,
        seatsAvailable:seatsAvailable,
        price:price
    });
})

module.exports = {
    getAll,
    train,
    getOne
}
