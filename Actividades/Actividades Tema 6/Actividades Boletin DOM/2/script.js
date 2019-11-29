// 2. Aplicación web que incluya un conjunto de imágenes y en función de la
// imagen sobre la que se seleccione, muestre su descripción a continuación.

var nodos_a_eliminar = new Array();

window.onload = () => {
    buscar();
    var img = document.getElementsByTagName('img');
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('click', function () {
            let text = document.createTextNode(this.getAttribute('alt'));
            let aux = document.getElementsByTagName('p')[0];
            if (aux) {
                aux.replaceChild(text, aux.childNodes[0]);
                // aux.firstChild.nodeValue = this.getAttribute('alt');
            } else {
                // let text = document.createTextNode(this.getAttribute('alt'));
                let p = document.createElement("p");
                p.appendChild(text);
                document.body.appendChild(p);
            }
        });
    }
};

function buscar() {
    var elementos = document.getElementsByTagName('*');
    for (var k = 0; k < elementos.length; k++) {
        for (var i = 0; i < elementos[k].childNodes.length; i++) {
            var hijo = elementos[k].childNodes[i];
            if ((hijo.nodeType == 3 && !/\S/.test(hijo.nodeValue)) || (hijo.nodeType == 8)) {
                nodos_a_eliminar[nodos_a_eliminar.length] = hijo;
            }
        }
    }
    destruir();
}

function destruir() {
    for (var d = 0; d < nodos_a_eliminar.length; d++) {
        nodos_a_eliminar[d].parentNode.removeChild(nodos_a_eliminar[d]);
    }
}