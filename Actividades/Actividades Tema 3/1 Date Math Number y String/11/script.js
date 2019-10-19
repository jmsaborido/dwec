/* 11. Modifica el ejercicio anterior para que ahora sea una calculadora modo programador y te
permita convertir entre bases numéricas.*/

var num1, num2;
var exit = false;
do {
    calc();
    opc = prompt("Introduzca la opcion deseada: ");
    switch (opc) {
        case "1":
            param2();
            console.log("Suma:  " + num1 + "+" + num2 + "=" + (num1 + num2) + "\n");
            break;
        case "2":
            param2();
            console.log("Resta:  " + num1 + "-" + num2 + "=" + (num1 - num2) + "\n");
            break;
        case "3":
            param2();
            console.log("Multiplicacion:  " + num1 + "*" + num2 + "=" + (num1 * num2) + "\n");
            break;
        case "4":
            param2();
            console.log("Division:  " + num1 + "/" + num2 + "=" + (num1 / num2) + "\n");
            break;
        case "5":
            param2();
            console.log("Modulo:  " + num1 + "%" + num2 + "=" + (num1 % num2) + "\n");
            break;
        case "6":
            param2();
            console.log(num1 + "^" + num2 + "=" + (Math.pow(num1, num2)) + "\n");
            break;
        case "7":
            param();
            console.log("Raiz cuadrada de " + num1 + "=" + Math.sqrt(num1) + "\n");
            break;
        case "8":
            param();
            console.log("Seno de " + num1 + "=" + Math.sin(num1) + "\n");
            break;
        case "9":
            param();
            console.log("Coseno de " + num1 + "=" + Math.cos(num1) + "\n");
            break;
        case "10":
            param();
            console.log("Tangente de " + num1 + "=" + Math.tan(num1) + "\n");
            break;
        case "11":
            param();
            console.log("Valor absoluto de " + num1 + "=" + Math.abs(num1) + "\n");
            break;
        case "12":
            param2();
            console.log("El valor maximo de " + num1 + " y " + num2 + " es " + Math.max(num1, num2) + "\n");
            break;
        case "13":
            param2();
            console.log("El valor minimo de " + num1 + " y " + num2 + " es " + Math.min(num1, num2) + "\n");
            break;
        case "14":
            param();
            console.log("El numero " + num1 + " en binario es " + parseInt(num1, 2) + "\n");
            break;
        case "15":
            param();
            console.log("El numero " + num1 + " en octal es " + parseInt(num1, 8) + "\n");
            break;
        case "16":
            param();
            console.log("El numero " + num1 + " en hexadecimal es " + parseInt(num1, 16) + "\n");
            break;

        case "0":
            exit = confirm("¿Desea salir de la calculadora?");
            break;
        default:
            console.log("Opcion no valida.\n")
    }
} while (!exit);

function calc() {
    console.log("Calculadora\n"
        + "Pulse 1 para sumar\n"
        + "Pulse 2 para restar\n"
        + "Pulse 3 para multiplicar\n"
        + "Pulse 4 para dividir\n"
        + "Pulse 5 para obtener el módulo\n"
        + "Pulse 6 para potencia\n"
        + "Pulse 7 para raiz cuadrada\n"
        + "Pulse 8 para seno \n"
        + "Pulse 9 para coseno \n"
        + "Pulse 10 para tangente \n"
        + "Pulse 11 para valor absoluto \n"
        + "Pulse 12 para el valor maximo de dos numeros\n"
        + "Pulse 13 para el valor minimo de dos numeros\n"
        + "Pulse 14 para pasar un numero decimal a binario\n"
        + "Pulse 15 para pasar un numero decimal a octal\n"
        + "Pulse 16 para pasar un numero decimal a hexadecimal\n"
        + "Pulse 0 para salir\n");
}

function param() {
    do {
        num1 = prompt("Introduzca el numero a convertir: ");
    } while (isNaN(num1) && !num1);
    num1 = Number(num1);

}

function param2() {
    do {
        num1 = prompt("Introduzca la primera variable: ");
    } while (isNaN(num1) && !num1);
    num1 = Number(num1);

    do {
        num2 = prompt("Introduzca la segunda variable: ");
    } while (isNaN(num2) && !num2);
    num2 = Number(num2);
    console.log("Variable 1 = " + num1 + "\nVariable 2 = " + num2 + "\n");
}
