window.onload = () => {
    var peticion_http = null;

    function inicializa_xhr() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    function comprobar() {
        peticion_http = inicializa_xhr();
        if (peticion_http) {
            peticion_http.onreadystatechange = procesaRespuesta;
            peticion_http.open("POST", "compruebaDisponibilidadJSON.php", true);
            peticion_http.setRequestHeader("Content-Type", "application/json");
            var obj = { "login": document.getElementById('login').value };
            var objT = JSON.stringify(obj);
            peticion_http.send(objT);
        }
    }

    function procesaRespuesta() {
        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {
                respuesta = JSON.parse(peticion_http.responseText);
                if (respuesta.disponible == 'no') {
                    var alternativas = '';
                    for (i = 0; i < respuesta.alternativas.length; i++) {
                        alternativas += respuesta.alternativas[i] + '<br>';
                    }
                    document.getElementById('disponibilidad').innerHTML = `${respuesta.disponible}!<br>Alternativas:<br> ${alternativas}`;
                } else {
                    document.getElementById('disponibilidad').innerHTML = `${respuesta.disponible}`;
                }
            }
        }
    }
    document.getElementById('comprobar').addEventListener('click', comprobar);
}