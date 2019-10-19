/*8. Calcula el área de un círculo. El usuario debe indicar el valor del radio y debes mostrar por
pantalla el siguiente mensaje bien formateado “El área de un círculo es XX.XX cm2”. Calcula
también el área del triángulo.*/ 
var radio= parseInt(prompt("Dame el radio del ciruclo en cm"));
var area=Math.PI * (Math.pow(radio,2));
document.write("El área de un círculo es "+area.toFixed(2) + " cm2 <br>");
//area=area/(2*(Math.PI)); este seria el area de un triangulo cuyo radio es la base, el resultado es el mismo que usando el radio
area=(radio*radio)/2
document.write("El área de un triangulo es "+area.toFixed(2) + " cm2");