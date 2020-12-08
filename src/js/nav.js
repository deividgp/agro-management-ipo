function tancarSessio() {
    sessionStorage.clear();
    window.location.href = "login.html";
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

function onClickZona(zona) {
    switch (zona) {
        case 1:
            localStorage.setItem('zona', '1');
            localStorage.setItem('temperatura', '16º');
            localStorage.setItem('humitat', '83%');
            localStorage.setItem('pluja', '0 ml/m2');
            localStorage.setItem('humitatfulla', '73%');
            localStorage.setItem('eto', '1340 ml');
            localStorage.setItem('dpv', '45%');
            localStorage.setItem('humitatsol', '3 ml/m2');
            localStorage.setItem('poblacio', 'La Selva del Camp (41.199092,1.1318003)');
            localStorage.setItem('alertatemp','35º');
            localStorage.setItem('alertahumi','98%');
            localStorage.setItem('alertapluja','35 ml/m2');
            break;
        case 2:
            localStorage.setItem('zona', '2');
            localStorage.setItem('temperatura', '15º');
            localStorage.setItem('humitat', '80%');
            localStorage.setItem('pluja', '15 ml/m2');
            localStorage.setItem('humitatfulla', '80%');
            localStorage.setItem('eto', '1000 ml');
            localStorage.setItem('dpv', '55%');
            localStorage.setItem('humitatsol', '4.5 ml/m2');
            localStorage.setItem('poblacio', 'Alcover (41.26141,1.1613327)');
            localStorage.setItem('alertatemp','32º');
            localStorage.setItem('alertahumi','100%');
            localStorage.setItem('alertapluja','40 ml/m2');
            break;
    }
    window.location.href = "index.html";
}