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

    secondsHand.style.transform = `rotate(${seconds*(360/60)}deg)`
    minutesHand.style.transform = `rotate(${minutes*6}deg)`
    console.log(minutes +" "+ secondsInterval+" "+ seconds)
    console.log(minutes*secondsInterval + seconds/10)
    hoursHand.style.transform = `rotate(${hours *(360/12) + minutes/2}deg)`
}
setInterval(() => {
    getTime();
}, 1000);