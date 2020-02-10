window.onload = () => {
    $('#boton').click(() => {
        $(`#tabla`).children().remove()
        var curso = document.getElementById("texto").value
        if (curso == "1DAW" || curso == "2DAW") {
            curso = curso.substr(0, 1)
            $.get("servidor.php", (data) => {
                $('#tabla').append('<p>Lista de alumnos matriculados en 1 DAW</p><table border="1">');
                $('table').append('<tr><th>Nombre</th><th>DNI</th><th>Acceso</th> </tr>');
                for (var j = 0; j < data[curso - 1].length; j++) {
                    $(`table`).append(`<tr>
                                        <th> ${data[curso - 1][j].nombre}</th>
                                        <th> ${data[curso - 1][j].dni} </th>
                                        <th>${data[curso - 1][j].acceso}  </th>
                                        </tr>`);
                }
                $("#tabla").append('</table>');
            })
        }
        else {
            $('#tabla').append(`<p>Tienes que introducir 1DAW ó 2DAW</p>`)
        }
    })
}