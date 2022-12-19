const { response } = require("express");
const express = require("express");
const https = require('https');
                                    // here we are not using the conventional fetch method of js , so we have to use the inbuilt module of express js , which is "HTTPS"
const app = express();
                                    // IKEA flatpak is unorganised data which can be in the form of hex code and we have to convert it into the json object using Parse or Stringify method

app.get("/",function(req,res){

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=07849c23723f8062fa611d36b059cba6'

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){                          // syntax of https module
            const weatherData = JSON.parse(data)
            console.log(weatherData);
            
        })
    })
    res.sendFile(__dirname + "/index.html");n
})



app.listen(3000,function(){
    console.log(`server is running on port ${3000}`);
})