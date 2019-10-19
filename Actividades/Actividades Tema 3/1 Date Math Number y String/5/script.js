/**5. Muestra un menú con las distintas zonas horarias, pide al usuario que indique la zona horaria
de la que desea conocer la hora y muestre la hora local del lugar seleccionado. */

function recibir() {
    var recibido = document.getElementById("texto").value
    var lugar = ["Línea internacional de fecha del oeste", "Isla Midway, Samoa", "Hawaii", "Alaska", "Hora del pacífico (USA y Canadá)", "Hora de las montañas rocosas (USA y Canadá)", "América central", "Hora central (USA y Canadá)", "Hora del Atlántico (Canadá)", "Buenos Aires, Asunción, Brasilia, Montevideo", "Atlántico central", "Azores", "Hora del meridiano de Greenwich, Londres, Dublín", "París, Madrid, Barcelona, Roma", "El Cairo", "Nairobi", "Bakú", "Ekaterimburgo", "Astana", "Bangkok", "Ulán Bator", "Tokio", "Sidney", "Islas Salomón", "Wellington"]
    if (recibido >= -12 && recibido <= 12) {
        var fecha = new Date();
        var hora = fecha.getUTCHours();
        hora += parseInt(recibido)+1;
        hora= hora>11? hora-12:hora;
        document.getElementById("Lugar").innerHTML = "Son las " + hora + " en " + lugar[parseInt(recibido) + 12];
    }else{
        document.getElementById("Lugar").innerHTML ="Tienes que darme un numero entre -12 y 12 incluidos";
    }
}