/**1. Crea un documento html que contenga una lista vacía. Añade una función que permita
añadirle un número variable de items (valores numéricos).
2. Añade otra función que permita devolver cuál es el menor de los valores que contiene
la lista.
3. Realiza una nueva función para que muestre al usuario el triple del valor de cada
elemento de la lista (arrow)
*/


function añadir() {
    var recibido = document.getElementById("text").value;
    var opciones = [];
    opciones = recibido.split(" ");
    añadirElementos(...opciones);
}

function añadirElementos(...opciones) {
    for (let i in opciones) {
        if (!isNaN(parseInt(opciones[i]))) {
            lista.innerHTML += `<li id="lista${i}" >${opciones[i]}</li>`;
        }else{
            document.getElementById("nonum").innerHTML+=`${opciones[i]} no es un numero <br>`
        }
    }
}

function menor() {
    var opciones = document.getElementsByTagName('li');
    var numeros = [];
    for (var i = 0; i < opciones.length; i++) {
        numeros.push(Number(opciones[i].innerHTML));
    }
    document.getElementById("menor").innerHTML = `El menor de todos es ${Math.min(...numeros)}.`;
}

var triple = () =>{
    var numeros = document.getElementsByTagName('li');
    for (var i = 0; i < numeros.length; i++) {
       document.getElementById(`lista${i}`).innerHTML=`El triple de ${numeros[i].innerHTML} es ${(numeros[i].innerHTML * 3)}`;
    }
}