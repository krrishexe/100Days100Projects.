let flag = 2



function decreaseFlag(x){
    flag+=x
    slideShow(flag)
}
function increaseFlag(x){
    flag+=x
    slideShow(flag)
}

function slideShow(num){
    let slides = document.getElementsByClassName("slide")

    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length -1
        num = slides.length -1 
    }

    for(let y of slides){
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}
slideShow(flag)





