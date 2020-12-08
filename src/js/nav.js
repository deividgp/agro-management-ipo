$(function () {
    $("#nav").load("nav.html");
    document.getElementById("variables").className = "nav-item dropdown active";
});

function tancarSessio() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

function onClick(){
    document.getElementById("variables").className = "nav-item dropdown active";
}