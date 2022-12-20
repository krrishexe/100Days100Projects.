const express = require('express')
const bodyParser = require('body-parser')
const request = require('request');
const { urlencoded } = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))             // here we have to use the inbuilt static method of express which helps in uploading the static files of the website to the server .

app.get("/",function(req,res){
    res.sendFile(__dirname + "/Signup.html")
})

app.post("/",function(req,res){

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;

    res.sendFile(__dirname + "/success.html")
    console.log(fname + lname + email);


})



app.listen(3000,function(){
    console.log("Server started successfully on port : 3000");
})
