// 6. Coloque en la aplicación una imagen, y que se cambie por otra imagen, y ésta se mantenga
// mientras el usuario está pulsando algún botón del ratón, cuando suelte debe volver la primera
// imagen.
window.onload = function () {
    window.addEventListener('mousedown', cambia);
    window.addEventListener('mouseup', cambia);
};

function cambia(e) {
    if (e.type == 'mousedown') {
        img.src = 'dos.png';
    } else {
        img.src = 'uno.png';
    }
}