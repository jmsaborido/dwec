window.onload = () => {
    $('#boton').click(() => {
        $.get("servidor.php", (data) => {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].length; j++) {
                    $(`${i ? "#primero" : "#segundo"}`).children().remove();
                    $(`${i ? "#primero" : "#segundo"}`).append(`<li>Nombre: ${data[i][j].nombre} DNI: ${data[i][j].dni} Acceso: ${data[i][j].acceso}</li>`)
                }
            }
        })
    })
}