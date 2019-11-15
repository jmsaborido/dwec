// 11. Crea un formulario que cuando el usuario pulse el campo que va a rellenar muestre un prompt
// pidiéndole la información y la complete en el formulario.

var nombre = document.getElementById("nombre");
var pass = document.getElementById("pass");

window.onload = function () {
    nombre.onclick = () => {
        var text = prompt("Introduzca el nombre.");
        nombre.value = text;
    }
    pass.onclick = () => {
        var pw = prompt("Introduzca la contraseña.");
        pass.value = pw;
    }
}