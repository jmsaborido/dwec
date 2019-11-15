// 10. Realiza una aplicación que tenga una imagen, y que muestre un mensaje indicando si la imagen
// no se ha cargado correctamente, ya sea por un error o porque el usuario lo haya detenido.

img = document.getElementById("img");
bt = document.getElementById("error");
cerrojo = true;
img.onerror = function () {
    document.getElementById("ins").innerHTML = "La imagen no ha sido cargada por un error.";
};
img.onabort = function () {
    document.getElementById("ins").innerHTML = "La imagen no ha sido cargada por petición del usuario.";
};

window.onload = function () {
    bt.addEventListener('mousedown', () => {
        if (cerrojo) {
            img.src = 'dos.png';
        } else {
            img.src = 'images.png';
            document.getElementById("ins").innerHTML = "";
        }
        cerrojo = !cerrojo
    });
};
