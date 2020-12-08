function onClickLogIn() {
    if (document.getElementById("InputEmail1").value == "admin@admin.com") {
        sessionStorage.setItem('key', 'value');
        document.getElementById("InputEmail1").value = "admin";
        window.location.replace("index.html");
    }
}