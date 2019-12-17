let weatherForecastRequest = new XMLHttpRequest();
var apiURL = '//api.openweathermap.org/data/2.5/forecast?id=4156209&APPID=2876382801a396dd5a17e61eabd083ff&units=imperial';
weatherForecastRequest.open('GET', apiURL, true);
weatherForecastRequest.send();
weatherForecastRequest.onload =  function () {
    let weatherForecastData = JSON.parse(weatherForecastRequest.responseText);
    console.log(weatherForecastData);

    document.getElementById('date0').innerHTML = weatherForecastData.list[0].dt_txt;
    /*
    /*
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
    /*
    var t = (ht + lt) / 2;
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t *  Math.pow(s, 0.16);
    f = Math.round(f);
    document.getElementById("windchill").innerHTML = f;
    */
}
