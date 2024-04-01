$(document).ready(function() {
    var block = $('#block');
    var speed = 5;
    var keys = {};

    function moveBlock() {
        if (keys[37]) block.stop().animate({left: '-=' + speed}, 5);
        if (keys[38]) block.stop().animate({top: '-=' + speed}, 5);
        if (keys[39]) block.stop().animate({left: '+=' + speed}, 5);
        if (keys[40]) block.stop().animate({top: '+=' + speed}, 5);
    }

    $(document).keydown(function(e) {
        keys[e.which] = true;
    });

    $(document).keyup(function(e) {
        delete keys[e.which];
    });

    setInterval(moveBlock, 20);
});
