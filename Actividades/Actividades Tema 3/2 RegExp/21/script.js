/**21. Confecciona una expresión regular que valide el ingreso del nombre de un día de la semana
y un número de 1 o 2 dígitos */

function recibir(){
    var expresión=/^(lunes|martes|miercoles|jueves|viernes|sabado|domingo) ((0?[1-9])|([1-2]\d)|([3][01]))$/i;
    var recibido= document.getElementById("texto").value;

    document.getElementById("insertar").innerHTML=expresión.test(recibido)?`Dia correcto: ${recibido}`:`Dia no valido: ${recibido}<br>El formato es Dia de la semana + numero <100`;
    
}
