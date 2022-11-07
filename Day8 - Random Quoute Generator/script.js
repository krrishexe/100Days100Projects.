const randomDiv = document.getElementById("random")
const btnquoteDiv = document.getElementById("btnquote")

console.log("object");
                                                // 2 Methods.

//                                          method - 1

function run(){
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(json => {
        console.log(typeof(json));
        randomDiv.innerText = `Quote of the Day is : ${json.content}`
    })
    console.log(response.json());
}


// 
//                                    This is method - 2

// const run = async() => {
//     const url = 'https://api.quotable.io/random';
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(typeof(data));
//     randomDiv.innerText = `quote of the day is ${data.content}`

//     console.log(data);
// }   

btnquoteDiv.onclick =()=> run();

console.log("hello");

