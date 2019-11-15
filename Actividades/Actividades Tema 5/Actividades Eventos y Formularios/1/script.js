//1. Realizar un script que cuando pulse el usuario con el botón del ratón en cualquier sitio de la
// pantalla, identifique si ha pulsado con el botón derecho, izquierdo o la rueda central.
window.onload = function () {
    window.addEventListener('mousedown', (e) => {
        switch (e.button) {
            case 0:
                document.getElementById("ins").innerHTML = 'Se ha pulsado click con el boton izquierdo.';
                break;
            case 1:
                document.getElementById("ins").innerHTML = 'Se ha pulsado click con el boton central.';
                break;
            case 2:
                document.getElementById("ins").innerHTML = 'Se ha pulsado click con el boton derecho.';
                break;
        }
    });
}

document.addEventListener('contextmenu', event => event.preventDefault());