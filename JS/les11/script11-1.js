$(document).ready(function () {
    $('#afbeelding').hover(function () {
        $('#tooltip').fadeIn(200);
    }, function () {
        $('#tooltip').fadeOut(200);
    });
});
