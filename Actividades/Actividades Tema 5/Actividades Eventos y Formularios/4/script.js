// 4. Realizar un evento que muestre la url que tiene asociada cada imagen, cada vez que se pase el
// ratón por encima de ella.

window.onload = function () {
    var imagenes = document.getElementsByTagName('img');

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].title = ` La ruta de la imagen es ${imagenes[i].src}`;
    }
}