/**4. Crear un vector de 10 elementos con valores aleatorios comprendidos entre 0 y 1000.
Buscar el menor y el mayor. Generar otro vector a partir de él que deje fuera dichos
valores. */
function vector() {
    var a=[];
    for (let i = 0; i < 10; i++) {
        a[i]=(Math.floor((Math.random()*1001)))
    }
    var b=a.slice();
    b=b.sort();
    b.splice(0,1);
    b.splice(b.length-1,1);
    document.getElementById("enviar").innerHTML=`vector original: ${a}<br>vector con valores maximo y minimo eliminado: ${b}`
}
