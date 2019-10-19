/**25. Buscar las palabras que terminen en 's' dentro de una cadena. */
function recibir(){
    var expresión=/\b([a-z]|[à-ÿ])*s\b/mig;
    var recibido= document.getElementById("texto").value;
    document.getElementById("insertar").innerHTML=recibido.match(expresión);
}
