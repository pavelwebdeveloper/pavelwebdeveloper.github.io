let weatherRequest = new XMLHttpRequest();
var apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=2876382801a396dd5a17e61eabd083ff&units=imperial';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
