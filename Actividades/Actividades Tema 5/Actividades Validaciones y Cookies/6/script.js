// 6. Realice un script que permite llevar a cabo la siguiente encuesta:


window.onload = () => {
    actualizaContadores();
    for (let index = 0; index <= 3; index++) {
        actualizarMax()

    }
    votar.addEventListener('click', () => {
        var sistemas = document.getElementsByName('sistema');
        for (var i = 0; i < sistemas.length; i++) {
            if (sistemas[i].checked) {
                renuevaContador(sistemas[i].value);
            }
        }
        actualizarMax()
    });

}


function renuevaContador(sistema) {
    var cont = 0;
    var d = new Date(2019, 11, 1);
    if (getCookie(sistema)) {
        var contc = getCookie(sistema);
        contc++;
        setCookie(sistema, contc, d);
        document.getElementById(sistema).value = contc;
    } else {
        setCookie(sistema, cont, d);
        document.getElementById(sistema).value = cont;
    }

}

function actualizaContadores() {
    var meteres = document.getElementsByTagName('meter');
    for (let i = 0; i < meteres.length; i++) {
        if (getCookie(meteres[i].id)) {
            meteres[i].value = getCookie(meteres[i].id);
        } else {
            meteres[i].value = 0;
        }
    }

}

function actualizarMax() {
    var meteres = document.getElementsByTagName('meter');
    aux = 0;

    for (let i = 0; i < meteres.length; i++) {
        aux += parseInt(meteres[i].value)
    }

    // console.log(aux);


    for (let j = 0; j < meteres.length; j++) {
        meteres[j].max = aux;
    }
}