
//var coordinates = [];


function displayWeatherData() {
  
    alert("The form was submitted");
    nameValue = document.getElementById("js-locationNameForData").value;
    //document.getElementById("js-locationName").innerHTML = nameValue;
    document.getElementById('js-geolocationNameIfGeolocationDenied').innerHTML = "";
    if(nameValue.match(/[A-Za-z]{3,}[\s\\-]{1}/)){
        document.getElementById("js-locationNameForData").style.borderColor = "black";
        document.getElementById("js-message").innerHTML = "";
    document.getElementById('js-geolocationNameIfGeolocationDenied').innerHTML = " for " + nameValue;
    getLocationCoordinates(nameValue);
    document.getElementById("js-locationInfo").innerHTML = '';
    } else {
        document.getElementById("js-locationNameForData").style.borderColor = "red";
        document.getElementById("js-message").innerHTML = "Please, input a valid city name";
        document.getElementById("js-message").style.color = "red";
    }
    
    //displayCurrentWeather();
    
    //getWeatherForecastByLocationCoordinates();
  }

  

  function getWeatherForecastByLocationCoordinates(){
    console.log("LATITUDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        console.log(lat);
        console.log("LONGITUDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        console.log(lon);
        
    apiURLForWeatherForecastRequest = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=2876382801a396dd5a17e61eabd083ff&units=imperial';
    weatherForecastRequest.open('GET', apiURLForWeatherForecastRequest, true);
        weatherForecastRequest.send();
        weatherForecastRequest.onload =  function () {
        weatherForecastData = JSON.parse(weatherForecastRequest.responseText);
        console.log("newWeatherForecastData**************************************************************************************");
        console.log(weatherForecastData);
        console.log(locationData);
        console.log("newWeatherForecastData§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§");
        displayCurrentWeather();
        
        //showLocationInfo(weatherForecastData, document.getElementById("js-locationInfo"));
        showForecast(weatherForecastData);
        getAPODfromNASA();
  }
}


function showForecast(weatherForecastData){
// INSIDE showForecast function
console.log("INSIDE showForecast function ))))))))))))))))))))))))))))))))))))))");
console.log(weatherForecastData);
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var dString = '';
    var dateString = '';
    var tempMin = 0;
    var tempMax = 0;
    var iconcode = 0;
    var icon_path = '';
    var weatherDescription = '';
    var windSpeed = '';

    for(let i = 0; i<40; i++){
    var dString = weatherForecastData.list[i].dt_txt;
        tempMin = weatherForecastData.list[i].main.temp_min;
        tempMax = weatherForecastData.list[i].main.temp_max;
        iconcode = weatherForecastData.list[i].weather[0].icon;
        icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
        weatherDescription = weatherForecastData.list[i].weather[0].description;
        windSpeed = weatherForecastData.list[i].wind.speed;
    var n = dString.split("");
        console.log(n);
        console.log(tempMin);
        console.log(tempMax);
        console.log(iconcode);
        console.log(icon_path);
        console.log(weatherDescription);
    n[10] = "T";
    n.push("Z");
        for(let j=0;j<n.length;j++){
            dateString+=n[j];
        }
        console.log(dateString);
    var date = new Date(dateString);
        console.log(date);


        hours = date.getHours();
        if(hours<10){
            hours = "0" + hours;
        }

        minutes = date.getMinutes();
        if(minutes<10){
            minutes = "0" + minutes;
        }
        seconds = date.getSeconds();
        if(seconds<10){
            seconds = "0" + seconds;
        }

    //document.getElementById('date0').innerHTML = weatherForecastData.list[0].dt;
    document.getElementById("day" + i).innerHTML = days[date.getDay()];
    document.getElementById("date" + i).innerHTML = date.getDate();
    document.getElementById('month' + i).innerHTML = months[date.getMonth()];
    document.getElementById('time' + i).innerHTML = hours + ":" + minutes + ":" + seconds;
        dateString = '';
        document.getElementById("js-tempMinFahrenheit" + i).innerHTML = tempMin;
        document.getElementById("js-tempMinCelsius" + i).innerHTML = convertFahrenheitToCelsius(tempMin);
        document.getElementById("js-tempMaxFahrenheit" + i).innerHTML = tempMax;
        document.getElementById("js-tempMaxCelsius" + i).innerHTML = convertFahrenheitToCelsius(tempMax);
        document.getElementById('weather_icon' + i).src = icon_path;
        document.getElementById('weatherDescription' + i).innerHTML = weatherDescription;
        document.getElementById('js-windSpeedMph' + i).innerHTML = windSpeed;
        document.getElementById('js-windSpeedKmph' + i).innerHTML = convertMphToKmph(windSpeed);
    }
}

 
