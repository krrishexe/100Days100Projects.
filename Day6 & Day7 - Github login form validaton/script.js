const form = document.getElementById("form");
const username = document.getElementById("username")
const password = document.getElementById("password")
const errorelement = document.getElementById("error-element")

form.addEventListener("submit", (e) => {

    errorelement.style.display = "block";

    let message = [];

    //  /^[a-z0-9]+$/i --->> this is a regex expression and is used to validate whether an alphanumeric characterr is present in the given string or not.

    if (password.value.length <= 5 || /^[a-z0-9]+$/i.test(password.value) ) {
        message.push("Password must contain 5 letters,1 alphanumeric character and 1 number");
        // alert("Password must contain 5 letters,1 alphanumeric character and 1 number") --> we can alert too
    }
    if (message.length > 0){
        e.preventDefault();
        errorelement.innerText = message.join(" ,")
    }

})  



// for(let a in username.value){
//     if(username.value[a] === "@")
//     return
//     else{
//         message.push("invalid username or email");
//     }
// }