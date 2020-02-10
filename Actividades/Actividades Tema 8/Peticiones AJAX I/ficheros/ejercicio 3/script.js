window.onload = () => {
    $(':button').click(() => {
        if ($('.flight-times').children() != 0) {
            $('.flight-times').children().remove();
        }
        $.get("servidor.php", (data) => {
            data.forEach((data) => {
                $('.flight-times').append(`<li> ${data.flightNumber} - ${data.time}</li>`)
            })
        })
    })
}