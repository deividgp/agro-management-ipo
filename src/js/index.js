$(function () {
    if (!sessionStorage.getItem('key')) {
        document.getElementById("logged").style.display = "none";
        document.getElementById("login").style.display = "block";
    }
});
/*form.addEventListener('submit', (e)=>{
    if(email.value == "hola@hola.com"){
        console.log("hola");
    }
});*/

function onClickLogIn() {
    var login = document.getElementById("login");
    var logged = document.getElementById("logged");
    var a = document.getElementById("InputEmail1").value;
    localStorage.setItem("IDemail", a);
    if (document.getElementById("InputEmail1").value = "a@a.com") {
        document.getElementById("InputEmail1").value = "hola";
        login.style.display = "none";
        logged.style.display = "block";
        sessionStorage.setItem('key', 'value');
    }
   

}