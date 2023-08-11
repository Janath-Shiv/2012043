const express = require('express');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose');

const Port = process.env.PORT || 5000;
const portmade = app.listen(Port)
if(portmade) console.log(`App Running in port ${Port}`);

const connect = mongoose.connect(process.env.CONNECTION_STRING).then (() =>{
    console.log(`DATABASE CONNECTION MADE`);
})

app.use(express.json());
app.use("/train",require("./routes/route1"))
app.use("/train",require("./routes/route2"))
