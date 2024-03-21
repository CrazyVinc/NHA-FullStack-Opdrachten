$(document).ready(function() {
    var cssProperties = {
        'font-size': '20px',
        'font-weight': 'normal',
        'background-color': '#f0f0f0'
    };

    $('#element').css(cssProperties);

    function addClassToElement(className) {
        $('#element').removeClass().addClass(className);
    }

    $('#addRedButton').on('click', function() {
        addClassToElement('red');
    });

    $('#addBlueButton').on('click', function() {
        addClassToElement('blue');
    });

    $('#addGreenButton').on('click', function() {
        addClassToElement('green');
    });
});
