/**4. Haz que el ordenador te salude educadamente dándote los buenos días, buenas tardes o
buenas noches dependiendo de la hora que sea. */

var fecha = new Date();
var hora = fecha.getHours()
if (hora > 7 && hora < 12) {
    document.write("Buenos Dias") 
} else if (hora >= 12 && hora < 21) {
    document.write("Buenas Tardes") 
} else { 
    document.write("Buenas Noches") 
}