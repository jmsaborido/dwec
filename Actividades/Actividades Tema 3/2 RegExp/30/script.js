/**30. Extraer del body de un documento html todas las etiquetas junto con su contenido y al final
un resumen de éstas. En el caso de etiquetas anidadas, mostrar solo las más internas */
function recibir(){
    var expresión=/<[a-z][\s\S]*>/i;
    var recibido= document.getElementById("texto").value;
    recibido=recibido.match(expresión)
    var dev="Etiquetas encontradas: ";
    dev+=recibido
 
    document.getElementById("insertar").innerHTML=dev;
}