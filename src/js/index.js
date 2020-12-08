$(function () {
    if (!sessionStorage.getItem('key')) {
        window.location.href = "login.html";
    }
});
/*form.addEventListener('submit', (e)=>{
    if(email.value == "hola@hola.com"){
        console.log("hola");
    }
});*/