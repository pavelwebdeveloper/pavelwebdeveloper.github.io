let weatherRequest = new XMLHttpRequest();
var apiURL = '//api.openweathermap.org/data/2.5/weather?id=4659557&APPID={API key}&units=imperial';

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('maintemp').innerHTML = weatherData.main.temp;
    document.getElementById('currentweatherdescription').innerHTML = weatherData.weather[0].description;
    document.getElementById('hightemp').innerHTML = weatherData.main.temp_max;
    document.getElementById('lowtemp').innerHTML = weatherData.main.temp_min;
    document.getElementById('wind').innerHTML = weatherData.wind.speed;

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

    var ht = parseFloat(document.getElementById('hightemp').value = weatherData.main.temp_max);
    var lt = parseFloat(document.getElementById('lowtemp').value = weatherData.main.temp_min);
    var s = parseFloat(document.getElementById('wind').value = weatherData.wind.speed);
    /* colculating the average temperature between the high and the low predictions */
    var t = (ht + lt) / 2;
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t *  Math.pow(s, 0.16);
    f = Math.round(f);
    document.getElementById("windchill").innerHTML = f;
}
