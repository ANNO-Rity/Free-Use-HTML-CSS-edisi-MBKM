// token API gua
// b3a18eef0c2a967104386b2ad4585956
$(document).ready(function() {
    function getWeather() {
        // VAR
        var city = $('#city-input').val();
        var apiKey = 'b3a18eef0c2a967104386b2ad4585956'; //tempat token API
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

        //AJAX
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                var tempC = Math.round(data.main.temp - 273.15);
                var weatherData = 'City: ' + data.name + '<br>' +
                                  'Temperature: ' + tempC + '°C<br>' +
                                  'Humidity: ' + data.main.humidity + '%<br>' +
                                  'Description: ' + data.weather[0].description;
                $('#weather-result').hide().html(weatherData).fadeIn('slow'); //JQuery events
            },
            error: function() {
                $('#weather-result').hide().html('An error occurred.').fadeIn('slow'); //JQuery events
            }
        });
    }

    $('#get-weather-btn').click(getWeather);

    // kontrol dan seleksi
    $('#city-input').keypress(function(e) {
        if (e.which == 13) { // 13 itu kode ascii buat "Enter"
            getWeather();
        }
    });

    var cities = ['Jakarta', 'Sydney', 'London', 'Paris', 'Milan', 'Nevada'];
    var apiKey = 'b3a18eef0c2a967104386b2ad4585956'; // tempat token API

    cities.forEach(function(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                var tempC = Math.round(data.main.temp - 273.15);
                var weatherData = 'City: ' + data.name + '<br>' +
                                  'Temperature: ' + tempC + '°C<br>' +
                                  'Humidity: ' + data.main.humidity + '%<br>' +
                                  'Description: ' + data.weather[0].description;
                $('#' + city.replace(' ', '')).html(weatherData);
            },
            error: function() {
                $('#' + city.replace(' ', '')).html('An error occurred.');
            }
        });
    });
});
