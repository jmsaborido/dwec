/**18. Solicita el ingreso de la coordenada de un punto. El formato a ingresar por teclado es:
(999,999)
Los números pueden tener entre 1 y 3 dígitos */



function recibir() {
    var numeros=new RegExp(/^\([0-9]{1,3}\,[0-9]{1,3}\)$/)
    var recibido = document.getElementById("texto").value;
    document.getElementById("insertar").innerHTML =numeros.test(recibido)?`Coordenada correcta: ${recibido}`:`Coordenada incorrecta: ${recibido}<br>Debe introducir una coordenada con el siguiente formato: (0-999,0-999)`;
}