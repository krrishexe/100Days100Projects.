const bodyParser = require("body-parser");
const { response } = require("express");
const express = require("express");
const https = require('https');
                                    // here we are not using the conventional fetch method of js , so we have to use the inbuilt module of express js , which is "HTTPS"
const app = express();
                                    // IKEA flatpak is unorganised data which can be in the form of hex code and we have to convert it into the json object using Parse method

                                    // in order to read text or data ffrom the POST request , we need to use another module which is body-parser.

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){


    res.sendFile(__dirname + "/index.html");

});

app.post("/",function(req,res){
    
    // console.log(req.body);            // req.body me vo sab data aajaega jo form ki body me hai.
    
    
    const query = req.body.cityName;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=07849c23723f8062fa611d36b059cba6`

    https.get(url,function(response){                       // same as fetching a url and then applying .then method
                                                            // console.log(response.statusCode);

        response.on("data",function(data){                          // syntax of https module
            const weatherData = JSON.parse(data)
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const iconUrl = weatherData.weather[0].icon;
            // console.log(weatherDesc);
            // console.log(temp);
            // console.log(iconUrl);
            res.write(`<h1>weather quality is  :  ${weatherDesc}</h1>`)
            res.write(`<h1>The temprature in ${query} is :  ${temp}</h1>`)
            res.write(`<img src = "http://openweathermap.org/img/wn/${iconUrl}@2x.png" >`)
            res.send()

            // we can do res.send() only one time , so what if we want to send more than one line of data to the user , then we can use the res.write() method.


        })
    })


    console.log("post request recieved");
})

    




app.listen(3000,function(){
    console.log(`server is running on port ${3000}`);
})