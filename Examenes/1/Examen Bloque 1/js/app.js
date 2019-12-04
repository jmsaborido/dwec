var reset = document.getElementById("reset");
var form = document.getElementsByTagName("input")
var mens = document.getElementById("mensaje")
var mail = document.getElementById("email")
var send = document.getElementById("send")
var jugar = document.getElementById("jugar")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var ventana;


window.onload = () => {


    minutos.addEventListener("change", tiempo)
    segundos.addEventListener("change", tiempo)




    jugar.disabled = true;

    jugar.addEventListener("click", () => {

        ventana = window.open("ajedrez.html")
        ventana.minutos = minutos;
        ventana.segundos = segundos;

    })
    reset.addEventListener("click", () => {
        for (let i = 0; i < form.length - 3; i++) {
            form[i] = "";
        }
    })

    send.disabled = true;
    send.addEventListener("click", () => {
        var link = `mailto:${mail.value} &body=${mens.value}`
        window.location.href = link;
    })


    mens.addEventListener("change", vacia)
    mail.addEventListener("change", vacia)

}

function vacia() {
    if (mens.value != "" && email.value != "") {
        document.getElementById("send").disabled = false;
    } else {
        document.getElementById("send").disabled = true;
    }
}
function tiempo() {
    if (minutos.value != "" && segundos.value != "") {
        jugar.disabled = false;
    }
}