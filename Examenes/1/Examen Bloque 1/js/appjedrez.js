var minutos = window.opener.minutos.value
minutos = minutos < 10 ? `0${minutos}` : minutos;
var segundos = window.opener.segundos.value
segundos = segundos < 10 ? `0${segundos}` : segundos;
var minBl = document.createTextNode(minutos)
var minNg = document.createTextNode(minutos)
var segBl = document.createTextNode(segundos)
var segNg = document.createTextNode(segundos)
var bminBl = document.getElementById("minBl").appendChild(minBl)
var bsegBl = document.getElementById("segBl").appendChild(segBl)
var bminNg = document.getElementById("minNg").appendChild(minNg)
var bsegNg = document.getElementById("segNg").appendChild(segNg)


window.onload = () => {


    iniciarTablero()


}


function iniciarTablero() {
    peonesB = [];
    peonesN = [];
    torresB = [];
    torresN = [];
    caballosB = [];
    caballosN = [];
    alfilB = [];
    alfilN = [];
    reyesB = []
    reyesN = []
    posiciones = ["a", "b", "c", "d", "e", "f", "g", "h"]


    for (let i = 0; i < 8; i++) {
        peonesN[i] = new Pieza(`peon_negro_${i + 1}`, String.fromCharCode(9823), `Peon Negro ${i + 1}`, `${posiciones[i]}7`, false)
        peonesN[i].colocar();
    } for (let i = 0; i < 8; i++) {
        peonesB[i] = new Pieza(`peon_blanco_${i + 1}`, String.fromCharCode(9817), `Peon Blanco ${i + 1}`, `${posiciones[i]}2`, true)
        peonesB[i].colocar()
    }
    torresN[0] = new Pieza(`torre_negro_1`, String.fromCharCode(9820), `Torre Negro 1`, `a8`, false)
    torresN[1] = new Pieza(`torre_negro_2`, String.fromCharCode(9820), `Torre Negro 2`, `h8`, false)
    torresB[0] = new Pieza(`torre_blanco_1`, String.fromCharCode(9814), `Torre Blanco 1`, `a1`, true)
    torresB[1] = new Pieza(`torre_blanco_2`, String.fromCharCode(9814), `Torre Blanco 2`, `h1`, true)
    for (let i = 0; i < torresN.length; i++) {
        torresN[i].colocar();
        torresB[i].colocar();
    }
    caballosN[0] = new Pieza(`caballos_negro_1`, String.fromCharCode(9822), `Caballo Negro 1`, `b8`, false)
    caballosN[1] = new Pieza(`caballos_negro_2`, String.fromCharCode(9822), `Caballo Negro 2`, `g8`, false)
    caballosB[0] = new Pieza(`caballos_blanco_1`, String.fromCharCode(9816), `Caballo Blanco 1`, `b1`, true)
    caballosB[1] = new Pieza(`caballos_blanco_2`, String.fromCharCode(9816), `Caballo Blanco 2`, `g1`, true)
    for (let i = 0; i < caballosN.length; i++) {
        caballosN[i].colocar();
        caballosB[i].colocar()
    }
    alfilN[0] = new Pieza(`alfil_negro_1`, String.fromCharCode(9821), `Alfil Negro 1`, `c8`, false)
    alfilN[1] = new Pieza(`alfil_negro_2`, String.fromCharCode(9821), `Alfil Negro 2`, `f8`, false)
    alfilB[0] = new Pieza(`alfil_blanco_1`, String.fromCharCode(9815), `Alfil Blanco 1`, `c1`, true)
    alfilB[1] = new Pieza(`alfil_blanco_2`, String.fromCharCode(9815), `Alfil Blanco 2`, `f1`, true)
    for (let i = 0; i < alfilN.length; i++) {
        alfilN[i].colocar();
        alfilB[i].colocar();
    }
    reyesN[0] = new Pieza(`rey_negro_1`, String.fromCharCode(9812), `Rey Negro 1`, `d8`, false)
    reyesN[1] = new Pieza(`reina_negro_1`, String.fromCharCode(9813), `Reina Negro 2`, `e8`, false)
    reyesB[0] = new Pieza(`rey_blanco_1`, String.fromCharCode(9818), `Rey Blanco 1`, `e1`, true)
    reyesB[1] = new Pieza(`reina_blanco_1`, String.fromCharCode(9819), `Reina Blanco 1`, `d1`, true)
    for (let i = 0; i < reyesN.length; i++) {
        reyesN[i].colocar();
        reyesB[i].colocar();
    }


    // reyesB[0].retirar();
    var span = document.getElementsByName("span")
    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("click", (e) => {

            e.srcElement = undefined;

        })

    }



}
class Pieza {

    constructor(id, figura, valor, posicion, blanca) {
        this.id = id;
        this.figura = figura;
        this.valor = valor;
        this.posicion = posicion;
        this.blanca = blanca


    }
    colocar() {
        var txt = document.createTextNode(this.figura)
        var span = document.createElement("span");
        span.id = this.id;
        span.appendChild(txt)
        document.getElementById(this.posicion).appendChild(span);
    }
    retirar() {

        var txt = document.createTextNode("")
        document.getElementById(this.posicion).removeChild(document.getElementById(this.id));

    }
}
