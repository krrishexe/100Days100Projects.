const Joke = document.getElementById("joke");






const generateJoke = async () =>{

    url = "https://v2.jokeapi.dev/joke/Dark"
    fetch(url)
    .then(response => response.json())
    .then()


    console.log("joke generated");
}