$(document).ready(function () {
    // $("button").click(function () {
    // 1 
    // $("*").hide();
    // 2
    // $(this).hide();
    // 3
    // $("p.intro").hide();
    // 4
    // $("p:first").hide();
    // 5
    // $("ul:first li:nth-child(3)").hide()
    // $("ul:eq(0) li:eq(2)").hide();   //Ejercicio 5
    // 6
    // $("ul li:nth-child(3)").hide()
    // 7
    // $("[href]").hide()
    // });
    // 8
    // $("#ventana").click(function () {
    //     $("a[target='_blank']").hide()
    // })
    // $("#enlace").click(function () {
    //     $("a[target!='_blank']").hide()

    // })

    // 11
    // var bool = true;
    // $("#tamaño").css("width", "800px");
    // $("#tamaño").css("height", "70px");
    // $("#tamaño").css("background-color", "white");
    // $("#tamaño").dblclick(function () {
    //     bool = !bool
    //     if (bool) {
    //         $("#tamaño").css("width", "800px");
    //         $("#tamaño").css("height", "70px");
    //     } else {
    //         $("#tamaño").css("width", "250");
    //         $("#tamaño").css("height", "250px");
    //     }
    // })
    // 12
    // $("th").css("background-color", "blue")
    // $("th").hover(function () {
    //     $(this).css("background-color", "red")
    // }, function () {
    //     $(this).css("background-color", "blue")
    // })
    // 13

    // $(".t").focus(function () {
    //     $(this).css("background-color", "red")

    // })
    // $(".t").blur(function () {
    //     $(this).css("background-color", "yellow")

    // })

    // 14

    //     $("#tooltip").prop("title", "tu titulo aqui")
    // })

    //15 Crea un documento con dos tag div, dentro de cada uno de los cuales debe
    // haber un botón para esconder dichos tag

    // $(".ocultacion").css("width", "250");
    // $(".ocultacion").css("height", "70px");
    // $(".ocultacion").css("background-color", "white");

    // $(".ocultacion button").click(function () {
    //     $(this).parent().hide();
    // });

    // 16. Crea un documento con un botón que al pulsarlo, oculte un párrafo con
    // velocidad rápida.

    // $("#rapidisimo").click(function () {
    //     $("#raptex").fadeOut(50);
    // });

    // 17. Crea un documento con un botón que al pulsarlo, agregue la opacidad de
    // tres elementos div.El primero ejecútalo sin parámetros, el segundo de manera
    // lenta y el tercero en tres milisegundos

    // $("#opacidad1").css("background-color", "red");
    // $("#opacidad1").hide();
    // $("#opacidad2").css("background-color", "green");
    // $("#opacidad2").hide();
    // $("#opacidad3").css("background-color", "blue");
    // $("#opacidad3").hide();
    // $("#opacidad0").click(function () {
    //     $("#opacidad1").fadeIn();
    //     $("#opacidad2").fadeIn("slow");
    //     $("#opacidad3").fadeIn(3000);
    // });


    // 18. Crea un documento con un botón que al pulsarlo, nos quite la opacidad de
    // tres elementos div.El primero ejecútalo sin parámetros, el segundo de manera
    // lenta y el tercero en tres milisegundos.
    // $("#opacidad4").css("background-color", "red");
    // $("#opacidad5").css("background-color", "green");
    // $("#opacidad6").css("background-color", "blue");
    // $("#opacidad7").click(function () {
    //     $("#opacidad4").fadeOut();
    //     $("#opacidad5").fadeOut("slow");
    //     $("#opacidad6").fadeOut(3000);
    // })

    // 19. Crea un documento con un botón que al pulsarlo, nos agregue o quite la
    // opacidad de tres elementos div.El primero ejecútalo sin parámetros, el
    // segundo de manera lenta y el tercero en tres milisegundos.
    // $("#opacidad8").css("background-color", "red");
    // $("#opacidad9").css("background-color", "green");
    // $("#opacidad10").css("background-color", "blue");
    // $("#opacidad11").click(function () {
    //     $("#opacidad8").toggle();
    //     $("#opacidad9").toggle("slow");
    //     $("#opacidad10").toggle(3000);
    // })
    // 20. Crea un documento con un botón que al pulsarlo, agregue o quite la
    // opacidad de tres elementos div.El primero ejecútalo en modo lento con una
    // opacidad de 0,15, el segundo en modo lento con una opacidad de 0,4 y el
    // tercero, en modo lento con una opacidad de 0,7.
    // $("#opacidad12").css("background-color", "red");
    // $("#opacidad13").css("background-color", "green");
    // $("#opacidad14").css("background-color", "blue");
    // $("#opacidad15").click(function () {
    //     $("#opacidad12").fadeTo("slow", 0.15);
    //     $("#opacidad13").fadeTo("slow", 0.4);
    //     $("#opacidad14").fadeTo("slow", 0.7);
    // })

    // 21. Crea un documento con dos capas, tal que al pulsar sobre la primera se
    // despliegue hacia abajo la segunda.
    $("#cs1").css("background-color", "red");
    $("#cs2").css("background-color", "blue");
    $("#cs1").css("position", "absolute");
    $("#cs2").css("position", "absolute");
    $(".capasobre").css("width", "250px");
    $(".capasobre").css("height", "250px");
    $("#cs2").dblclick(function () {
        $("#cs1").animate({ top: "+=250px" });
    })

    // 22. Crea un documento con dos capas, tal que al pulsar sobre la primera se
    // despliegue hacia arriba la segunda. 
    $("#cs3").css("background-color", "green");
    $("#cs4").css("background-color", "yellow");
    $("#cs3").css({ top: 250, left: 250, position: 'absolute' });
    $("#cs4").css({ top: 250, left: 250, position: 'absolute' });
    $(".capasobre").css("width", "250px");
    $(".capasobre").css("height", "250px");
    $("#cs4").dblclick(function () {
        $("#cs3").animate({ top: "-=250px" });
    })

    // 23. Crea un documento con dos capas, tal que al pulsar sobre la primera fija se
    // despliegue hacia arriba o abajo la segunda.

    $("#cs5").css("background-color", "brown");
    $("#cs6").css("background-color", "orange");
    $("#cs5").css({ top: 500, left: 500, position: 'absolute' });
    $("#cs6").css({ top: 500, left: 500, position: 'absolute' });
    $(".capasobre").css("width", "250px");
    $(".capasobre").css("height", "250px");
    var p = $("#cs5");
    var cer2 = false;
    var prim = true;
    $("#cs6").dblclick(function () {
        if (cer2) {
            $("#cs5").animate({ top: "+=500px" });
        } else {
            $("#cs5").animate({ top: "-=" + prim ? "250px" : "500px" });
        }
        prim = prim ? !prim : prim;
        cer2 = !cer2
    })

    // 24. Crea un programa que al pulsar en un botón anime un cuadrado
    // moviéndolo a la izquierda 375 px y lo haga más pequeño 150 px.

    $("#cs7").css("background-color", "violet");
    $("#cs8").css("background-color", "red");
    $("#cs7").css({ top: 750, left: 750, position: 'absolute' });
    $("#cs8").css({ top: 750, left: 750, position: 'absolute' });
    $(".capasobre").css("width", "250px");
    $(".capasobre").css("height", "250px");
    $("#cs8").dblclick(function () {
        $("#cs7").animate({ left: "-=250px", width: 150, height: 150 });
    })

    // 25. Crea un programa que al pulsar en un botón se muestre y se oculte la
    // anchura de un cuadrado.

    $("#cs9").css("background-color", "white");
    $("#cs10").css("background-color", "purple");
    $("#cs9").css({ top: 1000, left: 1000, position: 'absolute' });
    $("#cs10").css({ top: 1000, left: 1250, position: 'absolute' });
    $("#anchura").css({ top: 1250, left: 1250, position: 'absolute' });
    $(".capasobre").css("width", "250px");
    $(".capasobre").css("height", "250px");
    var p = $("#cs9");
    var offset = p.offset();
    $("#cs10").offset({ top: offset.top, left: offset.left })
    var cer3 = false;
    $("#cs10").dblclick(function () {
        if (cer3) {
            $("#cs9").animate({ width: "-=250px" });
            $("#anchura").text("");
        } else {
            $("#cs9").animate({ width: "+=250px" });
            var aux = $("#cs9").width();
            $("#anchura").text(aux);
        }
        cer3 = !cer3

    })
})