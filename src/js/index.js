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

function onClick() {
    var login = document.getElementById("login");
    var logged = document.getElementById("logged");
    if (document.getElementById("exampleInputEmail1").value = "a@a.com") {
        document.getElementById("exampleInputEmail1").value = "hola";
        login.style.display = "none";
        logged.style.display = "block";
        sessionStorage.setItem('key', 'value');
    }
}