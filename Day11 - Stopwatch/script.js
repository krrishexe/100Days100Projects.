const timeDisplay = document.getElementById('timeDisplay');
const start = document.getElementById('startbtn')
const stopDiv = document.getElementById('stopbtn')
const reset = document.getElementById('resetbtn')

let elapsedTime = 0;
let startTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

start.onclick = ()=>{
    console.log("object1")
    if(paused == true){
        paused=false;
        startTime = Date.now() - elapsedTime ;
        // updateTime();
        console.log(startTime);
        intervalId = setInterval(updateTime,1000)
    }
}
stopDiv.onclick = ()=>{
    console.log("object2");
    if(paused == false){
        paused=true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId)
    }
    else if(paused == true){
        paused=false;
        currentTime = Date.now() - elapsedTime ;
        // updateTime();
        console.log(startTime);
        intervalId = setInterval(updateTime,1000)
    }
    
}
reset.onclick = ()=>{
    console.log("object3");
        paused = true;
        elapsedTime = 0;
        startTime = 0;
        currentTime = 0;
        intervalId;
        hrs = 0;
        secs = 0;
        mins = 0;
        clearInterval(intervalId);
        timeDisplay.textContent = `00 Hrs : 00 Mins : 00 Secs`
}



function updateTime(){
    elapsedTime = Date.now() - startTime ;

    secs = Math.floor((elapsedTime / 1000)%60);
    mins = Math.floor((elapsedTime/(1000 * 60))%60);
    hrs = Math.floor((elapsedTime/(1000 *60 *60))%60);
    timeDisplay.textContent = `${hrs} Hrs : ${mins} Mins : ${secs} Secs`
}