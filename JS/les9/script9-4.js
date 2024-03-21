$(document).ready(function() {
    $('#setSizeButton').on('click', function() {
        var height = parseInt($('#inputHeight').val());
        var width = parseInt($('#inputWidth').val());

        if (!isNaN(height) && !isNaN(width)) {
            $('#dummyDiv').css({
                'height': height + 'px',
                'width': width + 'px'
            });
            $('#errorDiv').empty();
        } else {
            $('#errorDiv').text('Ongeldige invoer. Voer alstublieft geldige getallen in.');
        }
    });
});
