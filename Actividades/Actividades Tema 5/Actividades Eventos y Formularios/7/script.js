// 7. Realizar un script que muestre la tecla pulsada de teclado, y si se ha pulsado combinada con alt,
// shift o control también lo indique.

window.onload = function () {
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey) {
            comprueba('Control', e);
        } else if (e.altKey) {
            comprueba('Alt', e);
        } else if (e.shiftKey) {
            comprueba('Shift', e);
        } else {
            document.getElementById("ins").innerHTML += `Se ha pulsado ${e.key} `;
        }
    });
}


function comprueba(boton, e) {
    var salida = `Se ha pulsado ${boton} + ${e.key} `;
    if (boton != e.key) {
        document.getElementById("ins").innerHTML += salida;
    }
}