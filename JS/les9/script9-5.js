$(document).ready(function() {
    var counter = 0;

    for (var i = 0; i < 5; i++) {
        $('#div-Result').prepend('<p>Boven element ' + (i + 1) + '</p>');
        counter++;
    }

    $('#div-Result').prepend('<hr>');

    for (var j = 0; j < 5; j++) {
        $('#div-Result').append('<p>Onder element ' + (j + 1) + '</p>');
        counter++;
    }

    $('#div-Result').append('<p>Totaal aantal toegevoegde elementen: ' + counter + '</p>');
});
