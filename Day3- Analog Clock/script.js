const secondsHand = document.getElementById("seconds")
const minutesHand = document.getElementById("minutes")
const hoursHand = document.getElementById("hours")

function getTime(){
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    const timeInterval = 6;
    console.log(seconds)

    secondsHand.style.transform = `rotate(${seconds*timeInterval}deg)`
    minutesHand.style.transform = "rotate(1deg)"
    hoursHand.style.transform = "rotate(1deg)"
}
setInterval(() => {
    getTime();
}, 1000);