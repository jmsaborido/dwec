// 4. Realiza un Listado de FAQs como el que ve a continuación.
// - Desarrolle los enlaces Contacte con nosotros e Imprimir.
// - Los enlaces a las FAQs deben aparecer de color azul.
// - Cuando pulse en una pregunta, debe cerrar la anterior(si es que la había)
//    y mostrar la respuesta(añadiéndole una R al principio)
// - Los enlaces ya visitados se pondrán de color rojo.
const respuestas = [
    'Viva ...',
    'El betis ...',
    'Manquepierda ...',
];

window.onload = function () {
    var enlaces = document.getElementsByTagName('a');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function () {
            if (p = document.getElementsByTagName('p')[0]) {
                bloque.removeChild(p);
            }
            this.setAttribute('class', 'visitado');
            var par = document.createElement('p');
            var txt = document.createTextNode(respuestas[this.id]);
            par.appendChild(txt);
            console.log(par);
            this.parentNode.insertBefore(par, this.nextSibling);
        });
    }
    imprimir.addEventListener('click', function () {
        window.print();
    });
};