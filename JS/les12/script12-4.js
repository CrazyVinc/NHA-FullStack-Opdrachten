$(document).ready(function () {
    var apiKey = 'ddd4a0d2f18d4cefa1fcc0f4d788e8f2';

    $('#convert').click(function () {
        var amount = $('#amount').val()
        var targetCurrencies = ['EUR', 'GBP', 'JPY'];

        var apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=' + apiKey;

        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function (data) {
                var rates = data.rates;

                $('#result').html('');
                for (var i = 0; i < targetCurrencies.length; i++) {
                    var targetCurrency = targetCurrencies[i];
                    var rate = rates[targetCurrency];
                    if (rate) {
                        var convertedAmount = amount * rate;
                        $('#result').append('<p>' + amount + ' USD is ' + convertedAmount.toFixed(2) + ' ' + targetCurrency + '</p>');
                    } else {
                        $('#result').append('<p>Koersinformatie voor ' + targetCurrency + ' niet beschikbaar</p>');
                    }
                }
            },
            error: function () {
                alert('Er is een fout opgetreden bij het ophalen van de valutakoersen.');
            }
        });
    });
});
