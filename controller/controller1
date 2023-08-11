const asyncHandler = require('express-async-handler');
const firstSchema = require('../model/model1');


const register = asyncHandler(async(req,res)=>{
    const {companyName,ownerName,rollNo,ownerEmail,accessCode} = req.body;
    if(!companyName || !ownerName || !rollNo || !ownerEmail || !accessCode){
        res.status(400);
        throw new Error("All Fields needed");
    }
    const create = await firstSchema.create({companyName,ownerName,rollNo,ownerEmail,accessCode});
    res.status(200).send("Data Added");
})

const authentication = asyncHandler(async(req,res)=>{
    const {companyName,ownerName,rollNo,ownerEmail,accessCode} = req.body;
    if(!companyName || !ownerName || !rollNo || !ownerEmail || !accessCode){
        res.status(400);
        throw new Error("All Fields needed");
    }
    const token_type = req.headers.authorization.split(" ")[0];
    const token = req.headers.authorization.split(" ")[1];
    res.status(200).json({
        "token_type":token_type,
        "access_token":token,
    })
}) 

 


module.exports = {
    register,authentication
}
