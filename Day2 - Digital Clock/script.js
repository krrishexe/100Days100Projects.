setInterval(() => {
    const time = document.getElementById("time")
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >=12 ?'PM':'AM';
    hours = hours %12;
    hours =hours ? hours :12;
    minutes = minutes 


    time.innerHTML = `${hours} : ${minutes} : ${seconds}  ${ampm}  `
}, 1000);