function onClickLogIn() {
    if (document.getElementById("InputEmail1").value == "a@a.com") {
        sessionStorage.setItem('key', 'value');
        document.getElementById("InputEmail1").value = "hola";
        
        window.location.replace("index.html");
    }
}