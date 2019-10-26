/**1. Crea un script que permita cambiar de base. */
function convertir1() {
    document.getElementById("insertar").innerHTML = "";
    document.getElementById("enviar").innerHTML = "";
    document.getElementById("enviar2").innerHTML = "";
    var numero =parseInt(document.getElementById("numero").value);
    var base = document.getElementById("base").value;
    if (!isNaN(numero)) {
        if (base.match(/^[0-9]*$/)) {
            if (base >= 2 && base <= 36) {
                document.getElementById("enviar").innerHTML = `El numero <n>${numero}</n> en <c>decimal</c> es <n>${numero.toString(base)}</n> en base <c>${base}</c> <br> <br>`;
            }
            else { document.getElementById("insertar").innerHTML = "La base tiene que estar comprendida entre 2 y 36" }

        } else { document.getElementById("insertar").innerHTML = "En el segundo campo tienes que pasar un numero" }
    }
    else { document.getElementById("insertar").innerHTML = "En el primer campo tienes que pasar un numero" }


}
function convertir2() {
    document.getElementById("insertar").innerHTML = "";
    document.getElementById("enviar").innerHTML = "";
    document.getElementById("enviar2").innerHTML = "";
    var numero = document.getElementById("numero2").value;
    var base = document.getElementById("base2").value;
    if (numero.match(/^\w*$/)) {
        if (base.match(/^[0-9]*$/)) {
            if (base >= 2 && base <= 36) {
                document.getElementById("enviar2").innerHTML = `<br>El numero <n>${numero}</n> en la base <c>${base}</c> es <n>${parseInt(numero, base)}</n> en <c>decimal</c>`;
            }
            else { document.getElementById("insertar").innerHTML = "La base tiene que estar comprendida entre 2 y 36" }

        } else { document.getElementById("insertar").innerHTML = "En el segundo campo tienes que pasar un numero" }
    }
    else { document.getElementById("insertar").innerHTML = "En el primer campo tienes que pasar un numero" }

}
