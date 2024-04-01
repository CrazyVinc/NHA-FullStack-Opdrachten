$(document).ready(function() {
    $('#textInput').click(function() {
        $(this).select();
    });

    $('#textInput').keypress(function(event) {
        if (event.which == 13) {
            alert('U hebt op Enter gedrukt, we gaan het formulier verzenden.');
        }
    });
});
