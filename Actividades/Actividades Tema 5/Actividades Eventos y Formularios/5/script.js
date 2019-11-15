// 5. Realizar un script que, al pulsar un botón del ratón, el color de fondo del cuadro de mensaje
// debe ser amarillo(#FFFF00) y cuando se pulsa una tecla, el color de fondo debe ser azul
// (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
// Modifica el ejemplo anterior para que cuando se pulse sobre el ratón se muestren las
// coordenadas respecto del navegador y la pantalla.Cuando se pulse una tecla se deberá mostrar
// tanto el carácter como el código correspondiente.
var body = document.body;
window.addEventListener("click", (e) => {

    document.body.style.backgroundColor = "#FFFF00";
    document.getElementById("ins").innerHTML += `coordenada X ${e.pageX} coordenada Y ${e.pageY} `;

})

body.addEventListener('keydown', (e) => {

    document.body.style.backgroundColor = "#CCE6FF";
    document.getElementById("ins").innerHTML += e.key.valueOf();

})
body.addEventListener('mouseenter', (e) => {
    document.body.style.backgroundColor = "#FFFFFF";

})