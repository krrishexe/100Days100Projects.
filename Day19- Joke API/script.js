const Joke = document.getElementById("joke");
const Jokebtn = document.getElementById("btn");






const generateJoke = async () =>{

    url = "https://v2.jokeapi.dev/joke/Any"
    fetch(url)
    .then(response => response.json())
    .then(json => {
        Joke.innerHTML = `<h1> ${json.setup} </h1>
                            <p> ${json.delivery} </p>`
    })


    console.log("joke generated");
}