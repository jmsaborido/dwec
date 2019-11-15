// 9. Modifica la aplicación, para que cada vez que el usuario redimensione la ventana, nos indique
// que el alto y alto de la ventana del navegador.


window.addEventListener("resize", () => {
    document.getElementById("ins").innerHTML = `El alto es ${window.innerHeight} y el ancho es ${window.innerWidth}`;
});