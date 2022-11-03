const textArea = document.getElementById("floatingTextarea2");

// console.log(textArea.value);

textArea.addEventListener('input', function handleChange(event) {
    console.log(event.target.value);
    let text = event.target.value;
});



function upperCase(text){
    text = textArea.value.toUpperCase()
    textArea.value = text;
    console.log(text);
}
upperCase();

function lowerCase(text){
    text = textArea.value.toLowerCase()
    textArea.value = text;
    console.log(text);
}
lowerCase();

function clearBtn(text){
    text = textArea.value.toUpperCase()
    textArea.value = text;
    console.log(text);
}
clearBtn();