/**6. Crea un array con los números impares del 1 al 21.
a. Calcula el sumatorio de dichos números impares e imprime el resultado.
b. Muestra en orden inverso el array creado anteriormente.
c. Lea un valor que escriba el usuario y búsquelo en el array. Indique si la búsqueda
tuvo éxito indicando la posición o si no tuvo éxito.
d. En caso de tener éxito, borra su valor.
e. Muéstrelo ordenado de forma ascendente, y a continuación de forma descendente. */
var a=[];

for (let i = 0,j=0; i < 22; i++) {
    if (i%2!=0){
        a[j]=i;
        j++
    }
}
var b=a.slice();
b.reverse();

document.getElementById("arrays").innerHTML=`Orden ascendente: ${a}<br>Orden descendente: ${b}`

function eliminar() {
    var c=a.slice();
    var d=b.slice();
    var numero=parseInt(document.getElementById("text").value);
    if(isNaN(numero)){document.getElementById("enviar").innerHTML=`Tienes que introducir un numero, has introducido ${numero}`; return;}
    if (c.indexOf(numero)==-1) {
        document.getElementById("enviar").innerHTML=`El numero ${numero} no está en el array`
        return;
    }
    c.splice(c.indexOf(numero),1)
    d.splice(d.indexOf(numero),1)
    document.getElementById("enviar").innerHTML=`Orden ascendente: ${c}<br>Orden descendente: ${d}`
    
}