const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express();


app.get("/",function(req,res){
    res.send("Helllooo World");
})




app.listen(3000,function(){
    console.log("Server started successfully on port : 3000");
})
