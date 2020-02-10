$(document).ready(function () {

    // 26. Crear un programa que al pulsar en un botón se mueva un cuadrado 100
    //     px a la derecha y si dentro del cuadrado pone HELLO aumente el tamaño de la
    //     letra.
    // 27. Mejora el ejercicio 26 añadiendo cinco botones.
    //     1. Empezar: Comienza la animación
    //     2. Parar: Para la animación actual pero continúa con el resto.
    //     3. Parar todo: Detiene todas las animaciones de inmediato.
    //     4. Para pero terminar: Detiene la animación activa, pero acabándola
    //        primero y luego continua el resto.
    //     5. Parar todo, pero terminar: Detiene las animaciones pero acabando
    //        primero la que se encuentra en ejecución.

    $("#capa").css("background-color", "yellow");
    $("#capa").css("width", "400px");
    $("#capa").css("height", "400px");
    $("#capa").css({ top: 50, left: 0, position: 'absolute' });

    $("#e").click(function () {

        $("#capa").animate({ left: '+=100px' }, 5000);
        hello = $("#capa").find(":contains('Hello')")
        if (hello) {
            var currentSize = hello.css('font-size');
            var currentSize = parseFloat(currentSize) * 1.15;
            hello.css('font-size', currentSize);
        }
    })
    $("#p").click(function () { $("#capa").stop() })
    $("#pt").click(function () { $("#capa").stop(true) })
    $("#ppt").click(function () { $("#capa").stop(false, true) })
    $("#ptpt").click(function () { $("#capa").stop(true, true) })

    // 28. Crea una aplicación que contenga una caja negra y dos enlaces.Un enlace
    // será expandir y otro Contraer.Cuando se pulse uno de los dos botones, debe
    // preguntar al usuario que cantidad lo quiere expandir o contraer.Una vez
    // realizado la acción, debe cambiar de color. 


    $("#tamaño").css("background-color", "blueviolet");
    $("#tamaño").css("width", "400px");
    $("#tamaño").css("height", "400px");
    $("#tamaño").css({ top: 500, left: 0, position: 'absolute' });
    $("#agrandecer").click(function () {
        var pixeles = "a"
        while (isNaN(pixeles)) {
            pixeles = parseInt(prompt("Cuanto px quieres que se agrandezca el tiesto este?"))
        }
        $("#tamaño").css({ width: `+=${pixeles}`, height: `+=${pixeles}` });
        $("#tamaño").css("background-color", "tomato");



    })
    $("#empequeñezar").click(function () {
        var pixeles = "a"
        while (isNaN(pixeles)) {
            pixeles = parseInt(prompt("Cuanto px quiere que se empequeñezca el tiesto este?"))
        }
        $("#tamaño").css({ width: `-=${pixeles}`, height: `-=${pixeles}` });
        $("#tamaño").css("background-color", "springgreen");

    })





})