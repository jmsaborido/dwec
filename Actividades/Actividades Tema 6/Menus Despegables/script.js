var titulos = [
    [
        "Quienes Somos"
        // ,"De donde somos",
        // "Que hacemos",
        // "Como contactar con nosotros2,
    ],
    [
        "Productos",
        "Tipo A",
        "Tipo B",
        "Tipo C",
    ],
    [
        "Pedidos",
        "Nuevo",
        "Consulta",
        "Totales",
    ],
    [
        "Facturación",
        "Nueva",
        "Consulta",
        "Totales",
    ],
    [
        "Contacto"
        //     ,"Correo Electronico",
        //     "Telefono",
        //     "Direccion"
    ]
];

var menu = []
var submenu = []
var lista = document.createElement("ul")
document.getElementById("navegador").appendChild(lista)

window.onload = function () {
    for (i = 0; i < titulos.length; i++) {
        menu[i] = document.createElement("li");
        menu[i].id = "seccion" + i
        menu[i].appendChild(document.createTextNode(titulos[i][0]))
        lista.appendChild(menu[i])
        submenu[i] = menu[i].appendChild(document.createElement("div"));
        submenu[i].id = i;
        for (j = 1; j < titulos[i].length; j++) {
            txt = document.createTextNode(titulos[i][j])
            parrafo = document.createElement("p");
            parrafo.appendChild(txt);
            submenu[i].appendChild(parrafo);
        }
        menu[i].style.position = "relative";
        submenu[i].style.position = "absolute";
        submenu[i].style.top = "100%";
        submenu[i].style.left = "0px";
        submenu[i].style.backgroundColor = "#41338b";
        submenu[i].style.font = "normal 0.8em arial";
        submenu[i].style.padding = "0.2em 0.5em";
        submenu[i].style.display = "none"
        menu[i].onmouseover = ver;
        menu[i].onmouseout = ocultar;
    }
    var borrar = document.createElement("div")
    borrar.style.clear = "both";
    document.getElementById("navegador").appendChild(borrar)

}
function ver() {
    muestra = this.getElementsByTagName("div")[0];
    if (titulos[muestra.id].length > 1) {
        muestra.style.display = "block"

    }
}
function ocultar() {
    oculta = this.getElementsByTagName("div")[0];
    oculta.style.display = "none"
}