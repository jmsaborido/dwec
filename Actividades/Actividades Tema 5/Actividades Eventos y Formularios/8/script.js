// 8. Realizar un script que al terminarse de cargar, muestre un mensaje indicando que la página se ha
// cargado correctamente y dando la bienvenida.document.write("Hola Mundo")

window.onload = function () {
    setTimeout(() => {
        document.getElementById("ins").innerHTML = "La pagina ha cargado"
    }, 2000)
}
