$(document).ready(function() {
    $('#numberInput').keypress(function(event) {
        if (event.which == 13) {
            var number = parseInt($(this).val());
            if (!isNaN(number)) {
                addToUl(number);
            } else {
                alert('Voer een geldig getal in.');
            }
            $(this).val('');
        }
    });

    $('#list').on('mouseover', 'li', function() {
        var index = $(this).index() + 1;
        $('#tooltip').text('Item ' + index);
        var posX = $(this).offset().left;
        var posY = $(this).offset().top + $(this).outerHeight();
        $('#tooltip').css({ top: posY, left: posX }).show();
    });

    $('#list').on('mouseleave', 'li', function() {
        $('#tooltip').hide();
    });

    function addToUl(number) {
        var ul = $('#list');
        for (var i = 1; i <= number; i++) {
            ul.append('<li>Item ' + i + '</li>');
        }
    }
});
