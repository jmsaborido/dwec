/**7. Gestión dinámica de una tabla en tiempo de ejecución
- Debe preguntar el número de filas y columnas
- Crear tabla.
- Preguntar los valores de las celdas
- Poder borrar por filas
- Poder insertar nuevas filas
- Personalizar el estilo de la tabla. */
window.onload = () => {
    crear.addEventListener("click", () => {
        var filas = parseInt(document.getElementById("filas").value)
        var columnas = parseInt(document.getElementById("columnas").value)
        var tabla = document.createElement("table")

        document.body.appendChild(tabla)
        for (var i = 0; i < filas; i++) {
            var row = tabla.insertRow(-1);
            for (var j = 0; j < columnas; j++) {
                var cell = row.insertCell(-1);
                cell.addEventListener('click', rellena);
            }
        }
        var borrar = document.createElement("button");
        borrar.innerHTML = "Borrar fila"

        document.body.appendChild(borrar);
        borrar.addEventListener("click", () => {
            var numero = parseInt(prompt(`Dime la fila que quieres borrar. Total de filas= ${tabla.rows.length}`)) - 1
            tabla.deleteRow(numero)
        })
        var insert = document.createElement("button");
        insert.innerHTML = "Añadir fila"

        document.body.appendChild(insert);
        insert.addEventListener("click", () => {
            var row = tabla.insertRow(-1);
            for (var j = 0; j < columnas; j++) {
                var cell = row.insertCell(-1);
                cell.addEventListener('click', rellena);
            }
        })
        var estilo = document.createElement("button");
        estilo.innerHTML = "Cambiar color borde"

        document.body.appendChild(estilo);
        estilo.addEventListener("click", () => {
            var colors = ['#ffffff', '#ffff00', '#ff00ff', '#00ffff'];
            var nombres = ['Blanco', 'Amarillo', 'Rosa', 'Azul'];
            var botones = [];
            for (let i = 0; i < colors.length; i++) {
                botones[i] = document.createElement("button");
                botones[i].innerHTML = nombres[i];
                botones[i].style.color = colors[i]
                botones[i].name = colors[i];
                document.body.appendChild(botones[i])
                botones[i].addEventListener("click", (e) => {
                    tabla.style.borderColor = e.srcElement.name;
                    tabla.style.outlineColor = e.srcElement.name
                })
            }
        })
    })
}
function rellena() {
    var valor = prompt(`Introduzca un valor para la celda clicada: `);
    if (this.childNodes.length == 1) {
        this.replaceChild(document.createTextNode(valor), this.childNodes[0]);
    } else {
        this.appendChild(document.createTextNode(valor));
    }
}
