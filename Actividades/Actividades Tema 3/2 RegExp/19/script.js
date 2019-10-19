/**Valida el ingreso de una hora con el formato hh:mm:ss o hh:mm */

function recibir(){
    var horas=/^([01]\d|[2][0-3])(:[0-5]\d){1,2}$/;
    var recibido= document.getElementById("texto").value;

    document.getElementById("insertar").innerHTML=horas.test(recibido)?`Hora correcta: ${recibido}`:`Hora no valida: ${recibido}<br>El formato correcto es hh:mm:ss o hh:mm`


}