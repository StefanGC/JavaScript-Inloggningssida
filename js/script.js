//Variabler
const correctName = "test";         //Konstantvariabler används
const correctPassword = "1234";     //Konstantvariabler används 
let name, pass;

//DOM
let nameInp = document.getElementById("username");
let passwordInp = document.getElementById("password");
let logInBtn = document.getElementById("loginBtn");
let logOutBtn = document.getElementById("logoutBtn");
let form = document.getElementsByClassName("form");
let errorText = document.getElementsByClassName("error");

function welcomeIn () {
    errorText[0].style.display = "none";
    form[0].style.display = "none";
    form[1].style.display = "block";
}

//Om man är redan inloggad
if (localStorage.length != 0) {
    welcomeIn();
}

logInBtn.onclick = function () {
    name = nameInp.value;
    pass = passwordInp.value;
    
    if (name === correctName && pass === correctPassword) {
        localStorage.setItem("Name", name);
        welcomeIn();
    } else {
        errorText[0].style.display = "block";
    }
    
}


logOutBtn.onclick = function () {
    localStorage.clear();
    form[0].style.display = "block";
    form[1].style.display = "none";
}