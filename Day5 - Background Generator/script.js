var body = document.getElementById('gradient')
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")

function bgChanger(){
    console.log("object");
    body.style.background = `linear-gradient(to right,${color1.value} ,${color2.value} )`;
}
color1.addEventListener("input",bgChanger)
color2.addEventListener("input",bgChanger)