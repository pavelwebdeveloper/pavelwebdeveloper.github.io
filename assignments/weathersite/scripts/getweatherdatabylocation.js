var locationDataRequest = new XMLHttpRequest();
var weatherForecastRequest = new XMLHttpRequest();
var currentWeatherDataRequest = new XMLHttpRequest();

var apiURLForLocationDataRequest;
var apiURLForWeatherForecastRequest;
var apiURLForCurrentWeatherDataRequest;

var locationData;
var weatherForecastData;

var nameValue;
var lat;
var lon;
//var coordinates = [];


function displayWeatherData() {
  
    alert("The form was submitted");
    nameValue = document.getElementById("jsLocationNameForData").value;
    document.getElementById("jsLocationName").innerHTML = nameValue;
    getLocationCoordinates(nameValue);
    document.getElementById("js-locationInfo").innerHTML = '';
    
    //displayCurrentWeather();
    
    //getWeatherForecastByLocationCoordinates();
  }

  

  function getWeatherForecastByLocationCoordinates(){
    
    apiURLForWeatherForecastRequest = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid={API key}&units=imperial';
    weatherForecastRequest.open('GET', apiURLForWeatherForecastRequest, true);
        weatherForecastRequest.send();
        weatherForecastRequest.onload =  function () {
        weatherForecastData = JSON.parse(weatherForecastRequest.responseText);
        console.log("newWeatherForecastData**************************************************************************************");
        console.log(weatherForecastData);
        console.log(locationData);
        console.log("newWeatherForecastData§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§");
        displayCurrentWeather();
        
        //showLocationInfo(locationData[0], document.getElementById("js-locationInfo"));
  }
}

 
