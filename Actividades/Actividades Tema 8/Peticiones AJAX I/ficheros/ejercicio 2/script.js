window.onload = () => {
    $(':button').click(peticion)
    function peticion() {
        $.get("servidor.php", (data) => {
            $('div').children().empty();
            $('div').each((i) => {
                $(`div:eq(${i}) > h3`).append(`${data[i].name}`)
                $(`div:eq(${i}) > p`).append(`${data[i].price}`)
            })
        })
    }

}