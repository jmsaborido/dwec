/**13.Pide al usuario una cadena de texto 5 veces. Haz estadísticas sobre la frecuencia de
aparición de cada letra. Muestra por pantalla dichas ocurrencias */
function recibir() {
    var recibido = document.getElementById("text0").value + document.getElementById("text1").value + document.getElementById("text2").value + document.getElementById("text3").value + document.getElementById("text4").value;
    document.getElementById("insertar").innerHTML = "Estadisticas <br>";
    var dev="";

    do {
        var aux = recibido[0];
        var auxLength = recibido.length;
        recibido = recibido.replace(new RegExp(aux, "g"), "");
        dev+= `${aux} = ${auxLength - recibido.length} <br>`;
    } while (recibido[0]);
    document.getElementById("insertar").innerHTML =dev;

}