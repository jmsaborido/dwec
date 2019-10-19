/**Pide al usuario que introduzca una cadena y determinar si esa cadena está formada sólo por
letras mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

function recibir() {
    var recibido = document.getElementById("texto").value;
    var may=recibido.search("[A-Z|À-Þ]");
    var min=recibido.search("[a-z|à-ÿ]");
    may==-1 && min!=-1?document.getElementById("insertar").innerHTML ="La cadena recibida esta escrita en minusculas <br>":
    may!=-1 && min==-1?document.getElementById("insertar").innerHTML ="La cadena recibida esta escrita en mayusculas <br>":
    document.getElementById("insertar").innerHTML ="La cadena recibida no esta compuesta unicamente de mayusculas o minusculas<br>";
}