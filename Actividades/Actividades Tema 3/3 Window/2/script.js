/**2. Crea un buscador para que tus visitantes puedan encontrar un texto cualquiera en tus páginas.
Pide al usuario que introduzca la cadena a buscar. Una vez hallado, pregunta si se desea
continuar la búsqueda y repite el proceso hasta que se le diga que pare o no encuentre más
coincidencias.
Modifícalo para que solo busque palabras completas.
Modifícalo para que distinga entre mayúsculas y minúsculas
Comprueba que le método existe en el navegador, en caso contrario, avisa al usuario. */

var contador = 0;

function recibir() {
    var buscar = document.getElementById("buscar").value;
    var compl = document.getElementById("compl").checked
    var mayus = document.getElementById("mayus").checked

    if (window.find) {
        if (!window.find(buscar, mayus, false, false, compl)) {
            if (contador > 0) {
                alert(`No se ha encontrado mas ocurrencias de ${buscar}, en total en el texto hay ${contador}`)
                contador=0;
            }else { 
                alert(`No se ha encontrado ninguna ocurrencia de ${buscar}`)
            }
        } else {
            contador++;
        }
    } else {
        document.getElementById("recibir").innerHTML="Este navegador no soporta la busqueda"
    }
}



