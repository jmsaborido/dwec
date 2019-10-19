/**23. Buscar la última palabra de cada frase */

function recibir(){
    var expresión=/\w+$/i;
    var recibido= document.getElementById("texto").value;

    document.getElementById("insertar").innerHTML=expresión.exec(recibido);
    
}
