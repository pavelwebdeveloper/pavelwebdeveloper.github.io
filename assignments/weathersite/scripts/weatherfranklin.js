let weatherRequest = new XMLHttpRequest();
var apiURL = '//api.openweathermap.org/data/2.5/weather?id=4156209&APPID=2876382801a396dd5a17e61eabd083ff&units=imperial';
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
}
