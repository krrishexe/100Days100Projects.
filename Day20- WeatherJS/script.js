const city = document.getElementById('city');
const Title = document.getElementById('title');
const Temp = document.getElementById('temp');
const image = document.getElementById('imgid');


const getnewweatherdata =  () =>{
    fetch('http://api.weatherstack.com/current?access_key=548758f2ed6f39aca351ae6b81cfa6f3&query=jaipur')
    .then(resposne => resposne.json())
    .then(json => {
        Title.innerText = `${json.current.weather_descriptions}`
        city.innerText = `${json.request.query}`
        Temp.innerText = `${json.current.temperature}`
        Temp.appendChild(document.createElement('img')).src = `${json.current.weather_icons}`;

        // image.innerHTML = `<img id="imgid" src=${json.current.weather_icons}>`
        console.log("hello");
    } )

}
