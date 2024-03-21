$(document).ready(function() {
    $('#changeColorButton').on('click', function() {
        var colorValue = $('#colorInput').val();
        var colorType = $('input[name="colorType"]:checked').val();

        if (colorType === 'foreground') {
            $('#dummyDiv').css('color', colorValue);
        } else if (colorType === 'background') {
            $('#dummyDiv').css('background-color', colorValue);
        }
    });
});
