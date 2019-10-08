/*
Calcula el tiempo restante en milisegundos entre la fecha actual y la fecha de fin de año. 
*/ 


var hoy= new Date();
hoy=hoy.getTime();
var finDeAño= new Date(2019,12,31,23,59,59);
finDeAño=finDeAño.getMilliseconds();
var tiempo= finDeAño-hoy;
document.write(`Quedan ${Math.abs(tiempo)} milisegundos para el fin de año`);