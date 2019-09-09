//Variabler
const correctName = "test";         //Konstantvariabler används
const correctPassword = "1234";     //Konstantvariabler används 
let name, pass;

//DOM
let nameInp = document.getElementById("username");
let passwordInp = document.getElementById("password");
let logInBtn = document.getElementById("submit");

logInBtn.onclick = function () {
    name = nameInp.value;
    pass = passwordInp.value;
    
    if (name === correctName && pass === correctPassword) {
        console.log("Log in correcto");
    } else {
        console.log("ERROR");
    }
    
}