$(document).ready(function() {
    $('#changeColorButton').on('click', function() {
        var colorValue = $('#colorInput').val();
        $('#dummyDiv').css('background-color', colorValue);
    });
});
