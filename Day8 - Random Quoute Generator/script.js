const randomDiv = document.getElementById("random")
const btnquoteDiv = document.getElementById("btnquote")


function run(){
    fetch("https://zenquotes.io/api/random")
    .then(Response => Response.json())
    .then(json => {
        randomDiv.innerText = `${json.message}`
        console.log(json.message);
    })
}