/**2.
Crea un script donde declares una función obtenerImporteConImpuestos que reciba
dos parámetros: el importe sin impuestos (numérico) y el tipo de producto (numérico
entero). 
La función debe mostrar por pantalla el importe sin impuestos más el 21% si el
tipo de producto es 1,
ó el importe sin impuestos más el 10% si el tipo de producto es 2,
ó el importe sin impuestos más el 5% si el tipo de producto es 3. 
Si el usuario no especifica el tipo de producto, consideramos que es de tipo 1. (función declarada) */
function obtenerImporteConImpuestos(imp, num){
    var numero=parseInt(num);
    var importe=parseFloat(imp);

    if(isNaN(importe) || importe<=0 ){ document.getElementById("enviar").innerHTML= "Tienes que darme un numero"; return;}
    switch (numero) {
        case 1:
            document.getElementById("enviar").innerHTML=`El importe sin impuesto es ${importe} y con impuestos es ${(importe*1.21).toFixed(2)}`;
            break;
        case 2:
            document.getElementById("enviar").innerHTML=`El importe sin impuesto es ${importe} y con impuestos es ${(importe*1.1).toFixed(2)}`;
            break;
        case 3:
            document.getElementById("enviar").innerHTML=`El importe sin impuesto es ${importe} y con impuestos es ${(importe*1.05).toFixed(2)}`;
            break;
    }
    
}