$(document).ready(function () {
    var apiKey = '1420ed779c0141c782883044241204';
    var city = 'Den Haag';

    var apiUrl = 'https://api.weatherapi.com/v1/current.json?q=' + city + '&lang=NL&key=' + apiKey;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            var weerbeschrijving = data.current.condition.text;
            var temperatuur = data.current.temp_c;
            var vochtigheid = data.current.humidity;
            var windSnelheid = data.current.wind_kph;

            $('#weer').html('<h2>Actueel weer in ' + city + '</h2>' +
                '<p>Beschrijving: ' + weerbeschrijving + '</p>' +
                '<p>Temperatuur: ' + temperatuur + '°C</p>' +
                '<p>Vochtigheid: ' + vochtigheid + '%</p>' +
                '<p>Windsnelheid: ' + windSnelheid + ' km/h</p>');
        },
        error: function () {
            alert('Er is een fout opgetreden bij het ophalen van de weergegevens.');
        }
    });
});
