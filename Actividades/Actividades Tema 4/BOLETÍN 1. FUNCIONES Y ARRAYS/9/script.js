/**9. Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas
obtenidas en tres módulos. Dicha información será introducida por el usuario y una vez
finalizada la recogida de datos se mostrará el contenido del array en forma de tabla. */
function recibir() {
    var nombres = [document.getElementById("text1").value, document.getElementById("text2").value, document.getElementById("text3").value, document.getElementById("text4").value, document.getElementById("text5").value]
    var notas1 = [document.getElementById("sel11").value, document.getElementById("sel21").value, document.getElementById("sel31").value, document.getElementById("sel41").value, document.getElementById("sel51").value]
    var notas2 = [document.getElementById("sel12").value, document.getElementById("sel22").value, document.getElementById("sel32").value, document.getElementById("sel42").value, document.getElementById("sel52").value]
    var notas3 = [document.getElementById("sel13").value, document.getElementById("sel23").value, document.getElementById("sel33").value, document.getElementById("sel43").value, document.getElementById("sel53").value]
    var dev = [];
    tabla.style.display = "block";
    var i = 0;
    nombres.forEach(element => {
        dev[i] = [nombres[i], notas1[i], notas2[i], notas3[i]]
        i++;
    });
    for (let i = 0; i <dev.length; i++) {
        tabla.innerHTML+=`<tr id="${i}">`;
        for (let j = 0; j < dev[i].length; j++) {
            document.getElementById(`${i}`).innerHTML+=`<td>${dev[i][j]}</td>`;
        }
        tabla.innerHTML+=`<tr>`;
    }
    document.getElementById("button").style.display="none";
}
function ocultar() {
    document.getElementById("tabla").style.display = "none";
}
