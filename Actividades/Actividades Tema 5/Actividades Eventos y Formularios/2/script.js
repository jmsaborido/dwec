// 2. Realizar un script que permita mover una caja dentro de la ventana del navegador tanto con las
// teclas de desplazamiento del teclado central como con las del teclado numérico.document.write("Hola Mundo")
var coorX = 0;
var coorY = 0;
var altura = window.screen.height
var anchura = window.screen.width

window.onload = function () {
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Numpad4':
            case 'ArrowLeft':
                coorX = (coorX - 25) < 0 ? coorX : coorX - 25;
                caja.style.left = coorX + 'px';
                break;
            case 'Numpad6':
            case 'ArrowRight':
                coorX = coorX + 25 > anchura ? coorX : coorX + 25;
                caja.style.left = coorX + 'px';
                break;
            case 'Numpad8':
            case 'ArrowUp':
                coorY = (coorY - 25) < 0 ? coorY : coorY - 25;
                caja.style.top = coorY + 'px';
                break;
            case 'Numpad2':
            case 'ArrowDown':
                coorY = coorY + 25 > altura ? coorY : coorY + 25;
                caja.style.top = coorY + 'px';
                break;
        }
    });
};
