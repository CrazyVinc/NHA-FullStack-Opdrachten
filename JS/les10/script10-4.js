$(document).ready(function() {
    $('.thumbnails img').click(function() {
        var description = $(this).attr('title');
        var newImageSrc = $(this).attr('src');

        $('#mainImage').fadeTo(1000, 0, function() {
            $(this).attr('src', newImageSrc).fadeTo(1000, 1);
        });

        $('#imageDescription').text(description);
    });
});
