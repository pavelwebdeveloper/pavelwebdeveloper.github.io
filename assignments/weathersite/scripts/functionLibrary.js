
function getLocationCoordinates(locationName, withoutForecast = false){
    
    apiURLForLocationDataRequest = 'http://api.openweathermap.org/geo/1.0/direct?q=' + locationName + '&limit=5&appid=2876382801a396dd5a17e61eabd083ff';
        locationDataRequest.open('GET', apiURLForLocationDataRequest, true);
        locationDataRequest.send();
        locationDataRequest.onload =  function () {
        locationData = JSON.parse(locationDataRequest.responseText);
        console.log("newWeatherForecastData!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(locationData[0]);
        
        lat = locationData[0].lat;
        lon = locationData[0].lon;
        //coordinates[0] = locationData[0].lat;
        //coordinates[1] = locationData[0].lon;
        console.log(lat);
        console.log(lon);
        //console.log(coordinates[0]);
        //console.log(coordinates[1]);
        console.log("newWeatherForecastData$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        if(withoutForecast){
          //displayCurrentWeather();
          
        } else {
          getWeatherForecastByLocationCoordinates();
        }
        
        }
        
  }

function displayCurrentWeather(){
  
    apiURLForCurrentWeatherDataRequest = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=2876382801a396dd5a17e61eabd083ff&units=imperial';
          currentWeatherDataRequest.open('GET', apiURLForCurrentWeatherDataRequest, true);
          currentWeatherDataRequest.send();
          currentWeatherDataRequest.onload =  function () {
          currentWeatherData = JSON.parse(currentWeatherDataRequest.responseText);
          console.log("-------------------------------------------------");
    console.log(weatherForecastData);
    //document.getElementById('js-locationName').innerHTML = weatherForecastData.city.name;
            document.getElementById('js-mainTempFahrenheit').innerHTML = weatherForecastData.list[0].main.temp.toFixed(0);
            document.getElementById('js-mainTempCelsius').innerHTML = convertFahrenheitToCelsius(weatherForecastData.list[0].main.temp);
            document.getElementById('js-currentWeatherDescription').innerHTML = weatherForecastData.list[0].weather[0].description;
            document.getElementById('js-maxTempFahrenheit').innerHTML = weatherForecastData.list[0].main.temp_max.toFixed(0);
            document.getElementById('js-maxTempCelsius').innerHTML = convertFahrenheitToCelsius(weatherForecastData.list[0].main.temp_max);
            document.getElementById('js-minTempFahrenheit').innerHTML = weatherForecastData.list[0].main.temp_min.toFixed(0);
            document.getElementById('js-minTempCelsius').innerHTML = convertFahrenheitToCelsius(weatherForecastData.list[0].main.temp_min);
            document.getElementById('js-windSpeedMph').innerHTML = weatherForecastData.list[0].wind.speed;
            document.getElementById('js-windSpeedKmph').innerHTML = convertMphToKmph(weatherForecastData.list[0].wind.speed);
  
            var iconcode = weatherForecastData.list[0].weather[0].icon;
            var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            document.getElementById('js-weather_icon').src = icon_path;
  
            var ht = weatherForecastData.list[0].main.temp_max;
            var lt = weatherForecastData.list[0].main.temp_min;
            var s = weatherForecastData.list[0].wind.speed;
            /* colculating the average temperature between the high and the low predictions */
            var t = (ht + lt) / 2;
            var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t *  Math.pow(s, 0.16);
            f = Math.round(f);
            document.getElementById("js-windChill").innerHTML = f;
   }
  }

  function getCurrentWeather(){
    let apiURLForgetCurrentWeatherRequest = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=2876382801a396dd5a17e61eabd083ff&units=imperial';

    let getCurrentWeatherRequest = new XMLHttpRequest();

    let weatherData;
    getCurrentWeatherRequest.open('GET', apiURLForgetCurrentWeatherRequest, true);
    getCurrentWeatherRequest.send();
    getCurrentWeatherRequest.onload =  function () {
     weatherData = JSON.parse(getCurrentWeatherRequest.responseText);
    }
    return weatherData;
  }
  
   function convertFahrenheitToCelsius(tempInFahrenheit){
      tempInCelsius = (tempInFahrenheit - 32) * (5/9);
      return tempInCelsius.toFixed(0);
   }

   function convertMphToKmph(mphSpeed){

    let kmphSpeed = mphSpeed * 1.609344;
    // INSIDE convertMphToKmph function
    console.log("INSIDE convertMphToKmph function ////////////////////////////////////////");
    console.log(mphSpeed);
    console.log(kmphSpeed);
    return kmphSpeed.toFixed(0);
 }


function showLocationInfo(weatherForecastData, element) {
    // INSIDE showLocationInfo function
    console.log("INSIDE showLocationInfo function ))))))))))))))))))))))))))))))))))))))");
    console.log(weatherForecastData);

    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    //var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    /*var myPara5 = document.createElement('p');
    var myList = document.createElement('ul');*/

    myH2.textContent = locationData.name;
    //myPara2.textContent = 'Year founded: ' + towns[0].yearFounded;
    myPara3.textContent = 'Population: ' + locationData.population;
    //myPara4.textContent = 'Annual Rainfall: ' + towns[0].averageRainfall;
   /* myPara5.textContent = 'Town Events:';

    var townEvents = towns[0].events;
    for (var i = 0; i < townEvents.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = townEvents[i];

        myList.appendChild(listItem);
    }*/

    myArticle.appendChild(myH2);

    //myArticle.appendChild(myPara2);

    myArticle.appendChild(myPara3);

    //myArticle.appendChild(myPara4);

    /*myArticle.appendChild(myPara5);*/

    /*myArticle.appendChild(myList);*/

    element.appendChild(myArticle);

}


function getAPODfromNASA(){
  document.getElementById("js-apod").innerHTML = "";
  apiURLForAPODfromNASA = 'https://api.nasa.gov/planetary/apod?api_key=0egd1x0LXz5zySlcg3r29Oy41ltagnCjLBMIy0vQ';
  APODfromNASARequest.open('GET', apiURLForAPODfromNASA, true);
  APODfromNASARequest.send();
  APODfromNASARequest.onload =  function () {
    APODfromNASAData = JSON.parse(APODfromNASARequest.responseText);
        console.log("APODfromNASAData?????????????????????????????????????????????????");
        console.log(APODfromNASAData);    
        
        console.log("UUUUUUUUUUUUUUUUUUUUUUUUU");
        console.log(APODfromNASAData);
        var h2ForApod = document.createElement('h2');
        h2ForApod.textContent = APODfromNASAData.title;
        var divForApod = document.createElement('div');
        divForApod.setAttribute("id", "divForApod");
        var paraForApod = document.createElement('p');
        paraForApod.setAttribute("id", "paraForApod");
        paraForApod.textContent = APODfromNASAData.explanation;
        const img = document.createElement("img");
        img.setAttribute("id", "spaceImage");
        img.src = APODfromNASAData.hdurl;
        
        document.getElementById("js-apod").appendChild(h2ForApod);
        divForApod.appendChild(img);
        divForApod.appendChild(paraForApod);
        document.getElementById("js-apod").appendChild(divForApod);
        }

        

        
}