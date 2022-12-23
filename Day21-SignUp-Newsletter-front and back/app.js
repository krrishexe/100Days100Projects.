const express = require('express')
const bodyParser = require('body-parser')
const request = require('request');
const https = require('https')
const { urlencoded } = require('body-parser');
const { response } = require('express');

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
    console.log(fname , lname , email);

    const data = {
        members:[
            {
                email_address : email,
                status : "subscribed",
                merge_fields:{
                    FNAME : fname,
                    LNAME : lname
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = 'https://us13.api.mailchimp.com/3.0/lists/6f6b23e02f'
    
    const options = {
        method :'POST',
        auth:'krish69:8b1b860e378fc8eedf7424166fb5f6bf-us13'
    }
    const request = https.request(url,options, function(response){      
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
})



app.listen(3000,function(){
    console.log("Server started successfully on port : 3000");
})



// API key
// 8b1b860e378fc8eedf7424166fb5f6bf-us13

// 6f6b23e02f