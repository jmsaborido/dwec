// 6. Realice un script que permite llevar a cabo la siguiente encuesta:

var d = new Date(2020, 12, 1);

window.onload = function () {
    votar.addEventListener('click', vota);
    actualizaContadores();
}

//Activa la funcion renueva del boton que se checkea
function vota() {
    var sistemas = document.getElementsByName('sistema');
    for (var i = 0; i < sistemas.length; i++) {
        if (sistemas[i].checked) {
            renuevaContador(sistemas[i].value);
        }
    }
}

//Al votar, renueva el contador que toca
function renuevaContador(sistema) {
    var cont = 0;
    if (getCookie(sistema)) {
        var contc = getCookie(sistema);
        contc++;
        setCookie(sistema, contc, d);
        document.getElementById(sistema).value = contc;
    } else {
        setCookie(sistema, cont, d);
        document.getElementById(sistema).value = cont;
    }
}

//Esta funcion comprueba si ya habia valores previos
function actualizaContadores() {
    var meteres = document.getElementsByTagName('meter');
    for (var i = 0; i < meteres.length; i++) {
        if (getCookie(meteres[i].id)) {
            meteres[i].value = getCookie(meteres[i].id);
        }
    }
}