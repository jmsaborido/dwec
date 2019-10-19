/**3. Establece un título del documento (document.title) de forma dinámica, mostrando cada segundo la
hora actual, como vemos en la siguiente figura:
Añade al documento un enlace que permita parar la hora */
var cerrojo = false;

function hora() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = comprobarTiempo(m);
    s = comprobarTiempo(s);
    document.title = `La hora es ${h}:${m}:${s}`
    if (!cerrojo) {setTimeout(hora, 500); }
    
}
function comprobarTiempo(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function parar() { 
    cerrojo = !cerrojo; 
    if(!cerrojo){
        hora();

    }
    
    document.getElementById("boton").value=cerrojo?"Reanudar el reloj":"Parar el reloj"
}
