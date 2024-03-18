$(document).ready(function() {
    $('#get-weather-btn').click(function() {
        var city = $('#city-input').val();
        var apiKey = 'your_openweather_api_key'; // replace with your OpenWeatherMap API key
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + 'b3a18eef0c2a967104386b2ad4585956';

        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                var weatherData = 'City: ' + data.name + '<br>' +
                                  'Temperature: ' + Math.round(data.main.temp - 273.15) + '°C<br>' +
                                  'Humidity: ' + data.main.humidity + '%<br>' +
                                  'Description: ' + data.weather[0].description;
                $('#weather-result').html(weatherData);
            },
            error: function() {
                $('#weather-result').html('An error occurred.');
            }
        });
    });
});