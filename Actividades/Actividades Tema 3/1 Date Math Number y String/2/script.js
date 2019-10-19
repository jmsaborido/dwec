/*2. Calcula tu edad, sin utilizar ningún método, trabajando con los milisegundos.*/

var nac = new Date(1994, 9, 4)
var hoy = new Date();
var edad = hoy - nac;
edad = edad/(1000*60*60*24*365.25);
document.write(`Mi edad es ${edad.toFixed(4)} años`);
