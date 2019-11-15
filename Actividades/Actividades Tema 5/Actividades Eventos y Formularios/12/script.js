// 12. Añadir al formulario un botón de limpieza del formulario, para que cuando el usuario lo pulse,
// se muestre un aviso como el que se muestra en la imagen.

var nombre = document.getElementById("nombre");
var pass = document.getElementById("pass");
var reset = document.getElementById("reset");

window.onload = function () {
    reset.addEventListener('mousedown', () => {
        nombre.value = "";
        pass.value = "";
        alert("Empezamos de nuevo")
    })
}