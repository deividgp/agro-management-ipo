$(function () {
    $("#nav").load("nav.html");
});

function tancarSessio() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

function onClickDropdown(page) {
    switch (page) {
        case 'inici':

            break;
        case 'variables':
            document.getElementById('inici').className = "nav-item";
            document.getElementById(page).className = "nav-item dropdown active";
            break;
        case 'cultius':
            document.getElementById('inici').className = "nav-item";
            document.getElementById(page).className = "nav-item active";
            break;
    }

}