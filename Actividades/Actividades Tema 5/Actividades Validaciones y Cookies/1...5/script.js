// 1. Valida el siguiente formulario.Valide también que no puedan dejarse en blanco.
// 2. Modifique el ejercicio anterior para que recoja información el número de hijos(puede
// estar entre 0 y 10).Validar el formulario ayudándote de los atributos de html5.La
// validación se debe realizar poco a poco según el usuario vaya rellenando los campos.En
// caso de introducir un valor incorrecto, limpiar el campo.
// 3. Modifique el ejercicio anterior para que los mensajes sean personalizados.
// 4. Modifique el ejercicio 2 para que cuando el usuario introduzca los datos correctamente
// en el formulario introduzca estos datos en cookies y proporcione al formulario un botón
// para que estos puedan ser leídos.
// 5. Realice un script que permita llevar un contador de todas las veces que se ha visitado una
// página.

window.onload = () => {
    var contador = getCookie("contador");
    ++contador;
    setCookie("contador", contador);
    document.getElementById("ins").innerHTML = `Contador de visitas=${contador}`;
    var elem = document.getElementById("formu").elements;
    var reg = [
        /^\d{2}\.\d{3}\.\d{3}-[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
        /^[a-zñáéíóú]+( [a-zñáéíóú]+){1,3}$/i,
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/i,
        /^[0-9]|(10)$/,
        /[a-zñáéíóú][a-zñáéíóú0-9]+@[a-zñáéíóú]+\.[a-zñáéíóú]+/i,
        /http:\/\/www\.[a-zñáéíóú0-9]+\.[a-zñáéíóú0-9]/i,
        /.{8,10}/i,
        /.{8,10}/i,
    ];
    var place = [
        '99.999.999-X',
        'Xxxx Xxxx',
        'dd/mm/yyyy',
        '0-10',
        'xxx@yyy.zzz',
        'http://www.xxxx.yyy',
        '8-10 caracteres',
        '8-10 caracteres',
    ];
    var pass = elem[reg.length - 2]
    var confPass = elem[reg.length - 1]
    for (let i = 0; i < reg.length; i++) {
        elem[i].setCustomValidity(`El campo ${elem[i].name} esta mal formado. El formato es ${place[i]} `)
        elem[i].addEventListener("change", () => {
            if (elem[i].validity.patternMismatch) {
                alert(elem[i].validationMessage)
                elem[i].value = "";
            }
        })
    }
    confPass.addEventListener("change", () => {
        if (pass.value != confPass.value) {
            alert("Las contraseñas no coinciden")
            pass.value = ""
            confPass.value = "";
        }
    })
    document.getElementById("guardar").addEventListener("click", () => {
        for (let i = 0; i < reg.length; i++) {
            if (reg[i].test(elem[i].value)) {
                setCookie(elem[i].name, elem[i].value);
            } else {
                alert(elem[i].validationMessage)
                break
            }
        }
    })
    document.getElementById("ver").addEventListener('click', () => {
        pass.type = confPass.type = pass.type == 'password' ? 'text' : 'password';
    });
    document.getElementById("verCookie").addEventListener('click', () => {
        var str = prompt('Introduzca la cookie que desea visualizar');
        alert(getCookie(str) == null ? 'No existe dicha cookie' : `El valor de ${str} es ${getCookie(str)}`);
    });
    document.getElementById("verTodas").addEventListener('click', () => {
        var txt = "";
        for (let i = 0; i < reg.length; i++) {
            txt += `Cookie Numero ${i}: ${elem[i].name} -- -> ${getCookie(elem[i].name)
                } \n`
        }
        alert(txt)
    });
    document.getElementById("eliminar").addEventListener('click', () => {
        var str = prompt('Introduzca la cookie que desea eliminar');
        if (getCookie(str) == null) {
            alert('No existe dicha cookie');
        } else {
            delCookie(str);
            alert('Cookie eliminada correctamente');
        }
    });
    document.getElementById("eliminarTodas").addEventListener('click', () => {
        for (let i = 0; i < reg.length; i++) {
            delCookie(elem[i].name);
        }
        alert('Cookies eliminadas correctamente');
    });
};
