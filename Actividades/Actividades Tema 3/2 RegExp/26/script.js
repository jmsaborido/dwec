/**26. Mostrar el número de palabras contienen 'te' dentro de una cadena */
function recibir(){
    var expresión=/(\b\w+te\w+\b)/mg;
    var recibido= document.getElementById("texto").value;
    document.getElementById("insertar").innerHTML=recibido.match(expresión);
}