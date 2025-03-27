const dotenv= require('dotenv');
dotenv.config();
const express = require('express');
const cors= require('cors');
const app= express();

app.use(cors());

//we are accepting request from all but in production we write it such that it only accepts request from domain
app.get('/',(req,res)=>{
    res.send('Hello World');
});
module.exports=app;