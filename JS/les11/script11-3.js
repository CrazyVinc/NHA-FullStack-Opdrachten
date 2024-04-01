$(document).ready(function() {
    $('#mijnDiv').mousemove(function(e) {
        $('#tooltip').css({
            top: e.pageY + 10,
            left: e.pageX + 10,
            display: 'block'
        });
    }).mouseout(function() {
        $('#tooltip').css('display', 'none');
    });
});
