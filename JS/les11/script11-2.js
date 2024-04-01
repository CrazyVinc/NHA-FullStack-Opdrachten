$(document).ready(function() {
    $('#mijnDiv').mousemove(function(e) {
        var xPos = e.pageX - $(this).offset().left;
        var yPos = e.pageY - $(this).offset().top;
        $('#positieTekst').text('Muispositie: X = ' + xPos + ', Y = ' + yPos);
    });
    
    $('#mijnDiv').mouseleave(function() {
        $('#positieTekst').text('Muispositie: X = 0, Y = 0');
    });
});
