/**4. Desarrolla una aplicación web que funcione de alarma. Ésta tendrá que mostrar la hora actual y
preguntar al usuario la hora que quiere que te avise. Una vez que llegue a la hora introducida por el
usuario, debe preguntarle si quiere descansar un poco más y vuelva a mostrar el mensaje a los dos
minutos. */



function recibir() {
    var today = new Date();
    var recibido = document.getElementById("buscar").value;
    var exp = /^([01]\d|2[0-3]):([0-5]\d)$/gm;
    if (!exp.test(recibido)) {
        document.getElementById("mensajes").innerHTML = "Formato de hora incorrecto";
    } else {
        var hora = recibido.replace(/:\d{2}$/, "")
        var minutos = recibido.replace(/^\d{2}:/, "")
        var fechalarma = new Date();
        fechalarma.setHours(hora);
        fechalarma.setMinutes(minutos);
        if (fechalarma < today) {
            fechalarma.setDate((fechalarma.getDate() + 1))
        }
        cuentaAtras(fechalarma);

    }
}
function cuentaAtras(fechalarma) {
    if (fechalarma.getFullYear() != 1970) {
        var t;
        fechalarma.setSeconds(0);
        today = new Date();
        var mostrar = (fechalarma - today) / 1000;
        if (mostrar >= 0) {
            t = setTimeout(cuentaAtras(fechalarma), 3000);
        } else {
            if (confirm(`Ya es ${fechalarma.getHours()}:${comprobarTiempo(fechalarma.getMinutes())} ¿Quieres descansar un poco mas?`)) {
                fechalarma.setMinutes(fechalarma.getMinutes() + 2);
                cuentaAtras(fechalarma);
            }
        }
        document.getElementById("mensajes").innerHTML = "Ya ha tocado la alarma"
    }

}

function hora() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    today

    m = comprobarTiempo(m);
    document.getElementById("hora").innerHTML = `La hora es ${h}:${m}`
}



function comprobarTiempo(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

