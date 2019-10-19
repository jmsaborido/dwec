/**14.Realiza un script que pida al usuario una frase. De ella se extraerá la parte comprendida
entre unas marcas de inicio y fin (distintas) que serán indicadas por el usuario.
Modificación 1 : Realizar ahora utilizando la misma marca de inicio y fin.
Modificación 2: Probar ahora el script con la etiqueta de inicio / * y la de fin * /.
¿Es correcto?
Modifícalo para que funcione con etiquetas de más de un carácter.
*/

function recibir() {
    var str, del1, del2, pos1;

    var rec = document.getElementById("opcion").value;
    var opc= parseInt(rec)
    switch (opc) {
        case (1):
            param1();
            mod0(param2());
            break;
        case (2):
            param1();
            mod1(str.indexOf(del1, pos1));
            break;
        case (3):
            param1();
            mod0(param2());
            break;
        default:
            document.getElementById("insertar").innerHTML = "Opcion incorrecta.";
    }
}

    /*
    Recolecta los parametros base para cualquiera de las opciones:
    str: frase introducida
    del1: un delimitador
    pos1: posicion del delimitador en la frase
    */





function param1() {
    do {
        str = document.getElementById("texto").value;
    } while (!str);
    do {
        del1 = document.getElementById("ini").value;
    } while (!del1);
    pos1 = str.indexOf(del1) != -1 ? str.indexOf(del1) + del1.length + 1 : -1;
}

/*
Recolecta el segundo delimitador y
devuelve la posicion de dicho delimitador en la cadena.
*/
function param2() {
    do {
        del2 = document.getElementById("fin").value;
    } while (!del2);
    return str.indexOf(del2, pos1);
}

/*
Usa solo un delimitador
Recibe la posicion del ultimo caracter a mostrar.
*/
function mod1(pos2) {
    if (pos1 != -1 && pos2 != -1) {
        document.getElementById("insertar").innerHTML = `Frase introducida: "${str}"<br>Delimitador: "${del1}"<br>Resultado: "${str.slice(pos1, pos2).trim()}"`;
    } else {
        document.getElementById("insertar").innerHTML = "El delimitador no está en la frase o solo está una vez.";
    }
}

/*
Usa dos delimitadores pero no se especifica si deben ser iguales o diferentes.
Recibe la posicion del ultimo caracter a mostrar.
*/
function mod0(pos2) {
    if (pos1 != -1 && pos2 != -1 && del1 != del2) {
        document.getElementById("insertar").innerHTML = `Frase introducida: "${str}"<br>Delimitador inicial: "${del1}"<br>Delimitador final: "${del2}"<br>Resultado: "${str.slice(pos1, pos2).trim()}"`;
    } else {
        document.getElementById("insertar").innerHTML = "Alguno de los delimitadores no está en la frase.";
    }
}