/**3. Muestra los meses, días y años que tienes, haciendo uso de los métodos vistos en clase. */
var nac = new Date(1994, 9, 4)
var hoy = new Date();
var edad = hoy - nac;
edad = edad/(1000*60*60*24*365.25);
document.write(`Tengo  ${edad.toFixed(4)} años <br>`);
edad=edad*365.25;
document.write(`Tengo ${edad.toFixed(4)} dias <br>`);
edad=edad/12;
document.write(`Tengo ${edad.toFixed(4)} meses <br>`);
