/**7. Crea un script que tome una serie de palabras ingresadas por el usuario y almacene esas
palabras en un array. Posteriormente, manipula ese array para mostrar en una nueva
ventana los siguientes datos:
Todas las palabras.
Todas las palabras colocadas al revés.
La primera palabra ingresada por el usuario
La última palabra ingresada por el usuario
El número de palabras presentes en el array
Las palabras ordenadas de la 'a' a la 'z':
Las palabras Ordenadas de la 'z' a la 'a' 
*/
function recibir() {
    var array=[];
    var recibido=document.getElementById("text").value
    array=recibido.split(" ");
    var ventana=window.open("","","width=500, height=200");
    
    var dev=`Todas las palabras ${array}<br> Las palabras al reves ${array.reverse()}<br>
    La primera palabra ingresada ${array[array.length-1]} <br> La ultima palabra ${array[0]}<br>
    El numero de palabras presentes ${array.length}<br> Las palabras ordenadas de la a la z ${array.sort()}<br>
    Las palabras ordenadas de la z la a ${array.sort().reverse()}`
    
    ventana.document.write(dev);
    // document.getElementById("enviar").innerHTML=dev;
    
}