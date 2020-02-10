window.onload = () => {
    $('#boton').click(() => {
        $(`ul`).children().remove()
        var curso = document.getElementById("texto").value
        if (curso == "1DAW" || curso == "2DAW") {
            curso = curso.substr(0, 1)
            $.get("servidor.php", (data) => {
                for (let i = 0; i < data[curso - 1].length; i++) {
                    $(`ul`).append(`<li>Nombre: ${data[curso - 1][i].nombre}, ${data[curso - 1][i].dni}, formacion: ${data[curso - 1][i].acceso}</li>`)
                }
            })
        }
        else {
            $('ul').append(`<p>Tienes que introducir 1DAW ó 2DAW</p>`)
        }
    })
}