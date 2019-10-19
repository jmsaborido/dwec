/**27. Modificar los ejercicios 24,25 y 26 para que el patrón buscado lo pueda decidir el usuario en
tiempo de ejecución */

function recibir() {
    var recibido = document.getElementById("texto").value;
    var buscar = document.getElementById("buscar").value;
    var num = document.getElementById("opc").value;
    var opc = parseInt(num);
    var dev = "";
    var exp;

    switch (opc) {
        case (1):
            exp = new RegExp(`\\b${buscar}\\w*`, "mg");
            dev = recibido.match(exp)
            break;
        case (2):
            exp = new RegExp(`\\w*${buscar}\\b`, "mg");
            dev = recibido.match(exp);
            break;
        case (3):
            exp = new RegExp(`\\w*${buscar}\\w*`, "mg");
            dev = recibido.match(exp);
            break;
        default:
            dev = "Opcion no valida";
            break;
    }

    document.getElementById("insertar").innerHTML = dev == "" ? "No se ha encontrado" : dev;


}