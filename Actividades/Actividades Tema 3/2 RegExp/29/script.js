/**29. Realiza un script que reciba una cadena y elimine las etiquetas <script> en el caso de que las
incluya. Mostrar la cadena por consola. */

function recibir(){
    var expresión=/<script[^]*>[^]*<\/script>/mig;
    var recibido= document.getElementById("texto").value;
    var dev=recibido.replace(expresión,"")
    console.log(recibido.match(expresión))
    console.log(dev)
    
    
}
//<script[^]*>[^]*<\/script>/mig;
///<script[^>]*> /mig;
