const secondsHand = document.getElementById("seconds")
const minutesHand = document.getElementById("minutes")
const hoursHand = document.getElementById("hours")

function getTime(){
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    const secondsInterval = 6;


    // console.log(seconds)
    // console.log(minutes)
    // console.log(hours)

    secondsHand.style.transform = `rotate(${seconds*secondsInterval}deg)`
    minutesHand.style.transform = `rotate(${minutes*secondsInterval + seconds/10}deg)`
    hoursHand.style.transform = `rotate(${hours *30 + minutes/2}deg)`
}
setInterval(() => {
    getTime();
}, 1000);