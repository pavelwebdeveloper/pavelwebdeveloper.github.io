var locationDataRequest = new XMLHttpRequest();
var weatherForecastRequest = new XMLHttpRequest();
var currentWeatherDataRequest = new XMLHttpRequest();
var APODfromNASARequest = new XMLHttpRequest();

var apiURLForLocationDataRequest;
var apiURLForWeatherForecastRequest;
var apiURLForCurrentWeatherDataRequest;
var apiURLForAPODfromNASA;

var locationData;
var weatherForecastData;
var APODfromNASAData;

var nameValue;
var lat;
var lon;




var weatherDataForCities = [];


var cityNames = ["London", "Sydney", "San Francisco"];
