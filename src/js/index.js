$(function () {
    if (!sessionStorage.getItem('key')) {
        window.location.href = "login.html";
    }
    display_ct();

    if (localStorage.getItem('zona')) {
        document.getElementById('zona').innerHTML = "Zona " + localStorage.getItem('zona');
        document.getElementById('temperatura').innerHTML = "Temperatura " + localStorage.getItem('temperatura');
        document.getElementById('humitat').innerHTML = "Humitat relativa " + localStorage.getItem('humitat');
        document.getElementById('pluja').innerHTML = "Pluja " + localStorage.getItem('pluja');
        document.getElementById('humitatfulla').innerHTML = "Humitat en fulla " + localStorage.getItem('humitatfulla');
        document.getElementById('eto').innerHTML = "ETo " + localStorage.getItem('eto');
        document.getElementById('dpv').innerHTML = "DPV " + localStorage.getItem('dpv');
        document.getElementById('humitatsol').innerHTML = "Humitat al sòl " + localStorage.getItem('humitatsol');
        document.getElementById('poblacio').innerHTML = "Població " + localStorage.getItem('poblacio');
        document.getElementById('alertatemp').innerHTML = "Alerta temperatura " + localStorage.getItem('alertatemp');
        document.getElementById('alertahumi').innerHTML = "Alerta humitat " + localStorage.getItem('alertahumi');
        document.getElementById('alertapluja').innerHTML = "Alerta pluja " + localStorage.getItem('alertapluja');
    }
});

function display_c() {
    var refresh = 1000;
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date();
    document.getElementById('dia-hora').innerHTML = x;
    display_c();
}