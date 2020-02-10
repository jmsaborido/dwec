window.onload = () => {
    $.get("cargaProvinciasJSON.php", (data) => {
        $("#provincia").children().remove()
        var json = JSON.parse(data);
        var provincias = $('#provincia');
        $.each(json, (k, v) => {
            $(`<option value="${k}">${v}</option>`).appendTo(provincias);
        });
    })
    $("select#provincia").on("change", (aux) => {
        aux = $("select#provincia").val()
        $.post("cargaMunicipiosJSON.php", { provincia: aux }
        ).done((data) => {
            var json = JSON.parse(data);
            var $municipios = $('#municipio');
            $municipios.children().remove();
            $.each(json, (k, v) => {
                $(`<option value="${k}">${v} </option>`).appendTo($municipios);
            });
        })
    })
}
