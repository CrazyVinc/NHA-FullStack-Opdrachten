$(document).ready(function() {
    $('#hideCheckbox').on('change', function() {
        if ($(this).is(':checked')) {
            $('#dummyDiv').slideUp(500);
        } else {
            $('#dummyDiv').slideDown(500);
        }
    });
});
