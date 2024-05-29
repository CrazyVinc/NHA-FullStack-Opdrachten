$(document).ready(function(){
    $.ajax({
        url: 'content12.html',
        method: 'GET',
        success: function(data){
            $('#container').html(data);
            alert('Content loaded successfully!');
        },
        error: function(){
            alert('Error loading content.');
        }
    });
});
