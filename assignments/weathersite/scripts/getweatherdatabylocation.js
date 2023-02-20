let weatherForecastRequest = new XMLHttpRequest();

var apiURL;

var nameValue;

var lat;
var lon;

function myFunction() {
    alert("The form was submitted");
    nameValue = document.getElementById("jsLocationNameForData").value;
    document.getElementById("jsLocationName").innerHTML = nameValue;
    getLocationCoordinates();
    
  }

  function getLocationCoordinates(){
        apiURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + nameValue + '&limit=5&appid=2876382801a396dd5a17e61eabd083ff';
        weatherForecastRequest.open('GET', apiURL, true);
        weatherForecastRequest.send();
        weatherForecastRequest.onload =  function () {
        let weatherForecastData = JSON.parse(weatherForecastRequest.responseText);
        console.log("newWeatherForecastData!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(weatherForecastData[0]);
        console.log(weatherForecastData[0].lat);
        console.log(weatherForecastData[0].lon);
        lat = weatherForecastData[0].lat;
        lon = weatherForecastData[0].lon;
        console.log("newWeatherForecastData$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        getWeatherDataByLocationCoordinates();
        }
        
  }

  function getWeatherDataByLocationCoordinates(){
    apiURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=2876382801a396dd5a17e61eabd083ff';
    weatherForecastRequest.open('GET', apiURL, true);
        weatherForecastRequest.send();
        weatherForecastRequest.onload =  function () {
        let weatherForecastData = JSON.parse(weatherForecastRequest.responseText);
        console.log("newWeatherForecastData**************************************************************************************");
        console.log(weatherForecastData);
        
        console.log("newWeatherForecastData§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§");
  }
}
