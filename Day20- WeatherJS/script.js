const weatherDiv = document.getElementById('weatherApi');


const getnewweatherdata =  () =>{
    fetch('http://api.weatherstack.com/current?access_key=548758f2ed6f39aca351ae6b81cfa6f3&query=New%20York')
    .then(resposne => resposne.json())
    .then(json => {
        weatherDiv.innerText = `${json.location.name}`
        console.log("hello");
    } )

}
