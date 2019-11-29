// 1. Aplicación web que muestre un desplegable que nos permita seleccionar los elementos html que
// quiere modificar el estilo. Realiza las modificación que quieras, en función del tipo de elemento
// seleccionado (tipo de letra, color, alineación, visibilidad...)
// Haz un ejemplo con cada uno de ellas. 
window.onload = () => {
    opciones.addEventListener('change', () => {
        var select = document.getElementsByTagName('option')[opciones.selectedIndex];
        var tag = select.getAttribute('tag').split(',');
        var clase = select.value.split(',');

        for (var i = 0; i < tag.length; i++) {
            colorear(document.getElementsByTagName(tag[i]), clase[i]);
        }
    });
};

function colorear(enlaces, clase) {
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].setAttribute('class', clase);
    }
}