const Joke = document.getElementById("joke");
const Jokebtn = document.getElementById("btn");






const generateJoke = () => {

    try {
        url = "https://v2.jokeapi.dev/joke/any"
        fetch(url)
            .then(response => response.json())
            .then(json => {
                Joke.innerHTML = `<h1> ${json.setup} </h1>
                            <p> ${json.delivery} </p>`
            })

    } catch (error) {
        console.log("error");
    }
}



