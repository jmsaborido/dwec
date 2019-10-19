/**24. Buscar las palabras que comiencen por 'lo' dentro de una cadena. */

function recibir(){
    var expresión=/\blo(\w)*/mig;
    var recibido= document.getElementById("texto").value;


    document.getElementById("insertar").innerHTML=recibido.match(expresión);
    
}
