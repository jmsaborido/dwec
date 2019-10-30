/**5. Realiza los cambios necesarios en el ejercicio anterior para que la última acción de generar
un nuevo vector a partir de los valores de otro, dejando fuera el primer y último, pase a ser
un método del objeto Array.*/

Array.prototype.quitarLimites = function () {
    let b;
    b = this.slice();
    b = b.sort();
    b.splice(0, 1);
    b.splice(b.length - 1, 1);
    return b;
};
function vector() {
    let a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = (Math.floor((Math.random() * 1001)))
    }
    let b = a.quitarLimites()

    document.getElementById("enviar").innerHTML = `vector original: ${a}<br>vector con valores maximo y minimo eliminado: ${b}`
}
