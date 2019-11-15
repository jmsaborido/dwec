// 13. Realiza el siguiente formulario
// Cuando pulse Haz clic para enviar información, se enviará la información a un correo
// electrónico en texto plano.
// Cuando pulse en Haz clic sobre mí, se redirigirá a la página de google.
// 14. Modifica el formulario, según la materia seleccionada, debe enviarle el cuestionario a un
// profesor distinto.
// 15. Modifica el formulario, siendo el día preferente el día que haya marcado como
// disponible.Si marca varios, que coja el último.
// 16. Modifica el formulario, según el color de icono seleccionado, cambie el color de fondo
// del formulario.

var ele = document.getElementById("form").elements;
var dias = document.getElementsByName('dia');
var colores = document.getElementsByName("color")
var seleccionados = [];

window.onload = () => {
    document.getElementById("submit").onclick = () => {
        var txt = "";
        for (let i = 0; i < ele.length - 3; i++) {
            if (undefined != ele[i].value) {
                if (ele[i].name == "color") {
                    if (ele[i].checked) {
                        txt += ele[i].value + " ";
                    }
                } else if (ele[i].name == "dia") {
                    if (ele[i].checked) {
                        txt += ele[i].value + " ";
                    }
                } else {
                    txt += ele[i].value + " ";
                }
            }
        }
        var link = `mailto:${document.getElementById("asignaturas").value}@iesdonana.org &body=${escape(txt)}`
        window.location.href = link;
    }
    document.getElementById("google").onclick = () => {
        location.href = "http://www.google.es";
    }
    for (var i = 0; i < dias.length; i++) {
        dias[i].addEventListener('change', () => {
            for (var i = 0; i < dias.length; i++) {
                if (dias[i].checked) {
                    seleccionados.push(dias[i]);
                }
            }
            if (seleccionados.length == 0) {
                document.getElementById('preferente').value = "lunes";
            } else {
                document.getElementById('preferente').value = seleccionados[seleccionados.length - 1].value;
            }
        });
    }
    for (let i = 0; i < colores.length; i++) {
        colores[i].addEventListener('click', () => {
            document.body.style.background = colores[i].value
        })
    }

}
