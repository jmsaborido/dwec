/**3. 
Crea un script donde declares una función obtenerImporteConImpuestos2 que reciba
un parámetro: 
el importe sin impuestos (numérico). 
La función debe devolver un array con importe undefined para el índice 0,
el importe sin impuestos más el 21% para el índice 1, 
el importe sin impuestos más el 10% para el índice 2, 
ó el importe sin impUestos más el 5% para el índice 3. 
Invoca la función haciendo que se muestre el contenido del array por pantalla. (función expresada)*/
var obtenerImporteConImpuestos2 = function (imp) {
    var importe = parseFloat(imp);

    if ((isNaN(importe))|| importe<=0) { document.getElementById("enviar").innerHTML = "Tienes que darme un numero"; return; }
    var ret = [];
    ret[1]=(1.21 * importe).toFixed(2);
    ret[2]=(1.1 * importe).toFixed(2);
    ret[3]=(1.05 * importe).toFixed(2);
    document.getElementById("enviar").innerHTML=ret;
    console.log(ret)

}