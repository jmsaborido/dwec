/**22. Buscar la primera palabra de cada frase */

function recibir(){
    var expresión=/(^|\.\s)\w+\s/g; 
    var exp=/\. /g
    var recibido= document.getElementById("texto").value;
    var dev=recibido.match(expresión);


    for (let i = 0; i < dev.length; i++) {
        dev[i]=dev[i].replace(exp,"")
        
    }
    document.getElementById("insertar").innerHTML=dev
    
}
