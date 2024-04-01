$(document).ready(function() {
    $('#startAnimationButton').on('click', function() {
        $('#animatedText').animate({
            'font-size': '24px',
            'opacity': '0'
        }, 5000, 'swing', function() {
            alert('Animatie gereed');
        });
    });

    $('#stopAnimationButton').on('click', function() {
        $('#animatedText').stop();
        // $('#animatedText').dequeue();
        // $('#animatedText').finish();
    });

    $('#infoText').text('Met .finish() wordt de animatie direct voltooid en wordt de callbackfunctie uitgevoerd. Met .stop() wordt de animatie onmiddellijk gestopt, maar de animatie kan worden hervat vanaf het huidige punt. Met .dequeue() wordt de animatie gestopt en worden alle wachtrijen voor het geselecteerde element verwijderd.');
});
