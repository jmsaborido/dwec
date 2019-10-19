/**1. Crea una página web que realice las siguientes funciones:
Imprimir, Abrir ventana (figura2), Abrir ventana y detenerla, Cerrar ventana nueva, Dar foco
ventana nueva, Quitar foco ventana nueva, Scroll absoluto (0, 1000) y Scroll relativo (0, 10).
Mover absoluto (500, 150) , mover relativo (0,50), redimensionar
absoluto (500,500), redimensionar relativo (-50, -50)
Prueba si desde la ventana principal se puede mover y redimensionar la nueva ventana y
viceversa. */

var ventana;

function abrirVentana() {
    ventana = window.open("ventana.html", "", "width=200, height=200");
}
function abrirVentanaYDetenerla() {
    ventana = window.open("ventana.html", "", "width=200, height=200");
    ventana.stop();
}
function cerrarVentanaNueva() {
    ventana.close();
}
function darFocoVentanaNueva() {
    ventana.focus()
}
function quitarFocoVentanaNueva() {
    ventana.blur();

}

function cerrarEstaVentana() {
    close()
}

function moverPadre(){
    ventana.opener().moveTo(500, 150);
}
function cerrarPadre(){
    ventana.opener().close()
}

// ! Esta funcion la tengo guardada por si encuentro alguna manera de detectar un error
function error() {
    document.getElementById("prueba").innerHTML = "La ventana secundaria no esta abierta";

}