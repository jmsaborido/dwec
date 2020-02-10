$(function () {
    $(':submit').on('click', function (e) {
        e.preventDefault();
        comprobar();
    });
});
function comprobar() {
    var exps = [/^\w+$/, /^\d{3}-\d{6}$/, /^\d{5}$/, /^[A-Za-záéíóúÁÉÍÓÚ0-9]+@[a-z]+\.[a-z]{2,3}$/];
    var err = ['Nombre incorrecto. Xxxxx', 'Telefono incorrecto. XXX-XXXXXX', 'CP incorrecto. XXXXX', 'Email incorrecto: xxxxx@xxxx.xxx'];
    var bool = true;
    $('span').remove();
    $('form label input').each(function (i) {
        if (exps[i].test($(this).val())) {
            $(this).css('background-color', "green")
        } else {
            bool = false;
            $(this).css('background-color', "red");
            $(this).after(`<span>${err[i]}</span>`)
        }
    });
    hasErrors(bool);
}
function hasErrors(bool) {
    bool ? alert('Formulario enviado.') : alert('El formulario tiene campos incorrectos o esta incompleto.');
}