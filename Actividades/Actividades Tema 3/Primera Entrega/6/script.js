/*6. Busca 3 casos de operaciones aritméticas que generen Infinite y 3 casos que generen -Infinite. */ 
var inf1=1/0
var inf2=Math.pow(1000,1000);
var inf3=-1*Math.log(0);
var inf4=-1/0;
var inf5= Math.pow(-1000,999)
var inf6=Math.log(0);

document.write("Podemos calcular infinito y - infinito en JS con: <br>")
document.write("1/0 = "+ inf1 +" <br>");
document.write("1000¹⁰⁰⁰ = "+ inf2 + "<br>");
document.write("-1*Math.log(0) = "+inf3+ "<br>");
document.write("-1/0 = "+ inf4+ "<br>");
document.write("-1000⁹⁹⁹ = "+ inf5+ "<br>");
document.write("Math.log(0) = "+inf6+ "<br>");