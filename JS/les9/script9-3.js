$(document).ready(function() {
    $('#addTextButton').on('click', function() {
        var newText = $('#textInput').val();
        $('#dummyDiv').append('<p>' + newText + '</p>');
        $('#textInput').val('');
    });
});
