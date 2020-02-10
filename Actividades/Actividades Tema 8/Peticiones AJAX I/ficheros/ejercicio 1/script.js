window.onload = () => {
    $(':button').click(() => {
        var parametros = {
            fecha_nacimiento: $('#fecha_nacimiento').val(),
            codigo_postal: $('#codigo_postal').val(),
            telefono: $('#telefono').val()
        };
        $.post("servidor.php", parametros, (r) => { $('#respuesta').html(r) });
    });
}
