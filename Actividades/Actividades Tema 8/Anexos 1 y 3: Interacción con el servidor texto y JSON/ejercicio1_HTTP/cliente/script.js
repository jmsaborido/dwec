document.getElementById('comprobar').addEventListener('click', () => {
    var nodoMostrarResultados = document.getElementById('disponibilidad');
    var contenidosAMostrar = '';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            contenidosAMostrar = xmlhttp.responseText;
            nodoMostrarResultados.innerHTML = contenidosAMostrar;
        }
        else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
            alert("Ha ocurrido el siguiente error: " + xmlhttp.statusText);
        }
    }
    xmlhttp.open("GET", "../servidor/compruebaDisponibilidad.php", true);
    xmlhttp.send();
});
