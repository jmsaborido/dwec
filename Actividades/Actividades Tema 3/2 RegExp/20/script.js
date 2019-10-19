/**20. Valida una matrícula moderna*/

function recibir(){
    var matricula=/^\d{4}((?![EIOQU])[B-Z]){3}$/i;
    var recibido= document.getElementById("texto").value;

    document.getElementById("insertar").innerHTML=matricula.test(recibido)?`Matricula correcta: ${recibido}`:`Matricula no valida: ${recibido}<br>El formato XXXXNNN siendo X numeros y N consonantes`;

}
