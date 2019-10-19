/**28. Buscar dentro de un texto palabras con una longitud determinada. La longitud la decidirá el
usuario en tiempo de ejecución */

function recibir(){
    var long = document.getElementById("long").value;
    var expresión=/(\b[A-Z|À-Þ]*\b)/mgi;
    var recibido= document.getElementById("texto").value;
    var array= recibido.match(expresión);
    var dev="";

    for (let i = 0; i < array.length; i++) {
        if (array[i].length==long){
            dev+= array[i]+"<br>"
        }
        
    }

    document.getElementById("insertar").innerHTML=dev==""?`No se han encontrado palabras con longitud ${long}`:dev;
}