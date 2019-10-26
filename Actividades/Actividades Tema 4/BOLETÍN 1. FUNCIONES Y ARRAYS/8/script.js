/**8. A partir del siguiente array, var valores = [true, 5, false, "hola", "adios", 2], muéstralo
ordenado por pantalla. Comenta por qué sale ese orden. */
function ordenar(){
    var ordenar=[true, 5, false, "hola", "adios", 2];
    ordenar.sort();
    document.write(`El orden seria ${ordenar}, ko transforma todo a cadena y lo ordena, no respeta el tipo.`);



}
