

function getData(url){

  return fetch(url)
    .then( function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {  
            //console.log("RESPONSE!!!!!!!!!!!!!!!!!!!"); 
            //console.log(response.json()); 
            return response.json();
            
        }
    } )
    //.then(data => console.log(data)) // transforms the JSON data into a JavaScript object or throws an error
    //.then( data => console.log(Object.entries(data)) )
    .catch( function(error) {
        console.log('There was an error:', error);
    })
    }


/*function getLocationCoordinates(locationName, withoutForecast = false){
    
  console.log("Here is location name info inside function getLocationCoordinates");
  console.log(locationName);

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
          getCurrentWeather();
        } else {
          getWeatherForecastByLocationCoordinates();
        }
        
        }
        
  }*/


  async function getLocationCoordinates(locationName, withoutForecast = false){
    
    console.log("Here is location name info inside function getLocationCoordinates");
    console.log(locationName);

    if (location.protocol === 'http:') {
      var openWeatherUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
    } else {
      var openWeatherUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=';
    }

    console.log("Here is URL URL URLLLLLLLLLLLLLLLL");
    console.log(openWeatherUrl + locationName + '&limit=5&appid=2876382801a396dd5a17e61eabd083ff');

  
    await getData(openWeatherUrl + locationName + '&limit=5&appid=2876382801a396dd5a17e61eabd083ff').then(data => { 
      //this._recipes = data.meals;
      console.log("Here is location data inside function getData inside function getLocationCoordinates");
    console.log(data);

    console.log("newWeatherForecastData!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          console.log(data);
          
          lat = data[0].lat;
          lon = data[0].lon;
          //coordinates[0] = locationData[0].lat;
          //coordinates[1] = locationData[0].lon;
          console.log(lat);
          console.log(lon);
          //console.log(coordinates[0]);
          //console.log(coordinates[1]);
          console.log("newWeatherForecastData$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          if(withoutForecast){
            //displayCurrentWeather();
            //getCurrentWeather();

            console.log("Here is one city data");
            getCurrentWeather();

            

            console.log("Here is the cities data inside function getLocationCoordinates");
          console.log(weatherDataForCities);

            
          

          


          } else {
            getWeatherForecastByLocationCoordinates();
          }
  
      });          
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

  /*function getCurrentWeather(){

    console.log("Here is lat info inside function getCurrentWeather");
console.log(lat);
console.log("Here is lon info inside function getCurrentWeather");
console.log(lon);
    let apiURLForGetCurrentWeatherRequest = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=2876382801a396dd5a17e61eabd083ff&units=imperial';

    let getCurrentWeatherRequest = new XMLHttpRequest();

    let weatherData;
    getCurrentWeatherRequest.open('GET', apiURLForGetCurrentWeatherRequest, true);
    getCurrentWeatherRequest.send();
    getCurrentWeatherRequest.onload =  function () {
     weatherData = JSON.parse(getCurrentWeatherRequest.responseText);
    }
    return weatherData;
  }*/

  async function getCurrentWeather(){

    console.log("Here is lat info inside function getCurrentWeather");
console.log(lat);
console.log("Here is lon info inside function getCurrentWeather");
console.log(lon);
await getData('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=2876382801a396dd5a17e61eabd083ff&units=imperial').then(data => { 
  //this._recipes = data.meals;
  console.log("Here is location data inside function getData inside function getCurrentWeather");
console.log(data);

console.log("currentWeatherData!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(data);


      weatherDataForCities.push(data);

      console.log("Here is the cities data inside function getCurrentWeather");
          console.log(weatherDataForCities);

          var section = document.getElementById('lowersection');

          section.innerHTML = "";

          showTowns(weatherDataForCities, section);

    });
    
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

 function calculateWindChill(ht, lt, s){
        /* Input:
      * Processing: colculation of windchil according the the formula f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
      * Output: future value
      */

      

      /* colculating the average temperature between the high and the low predictions */
      var t = (ht + lt) / 2;

      /* compute and display the wind chill temperature */
      var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t *  Math.pow(s, 0.16);
      f = Math.round(f);
      return f;
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


function showTowns(towns, sectionElement) {
  //var towns = jsonObj['towns'];

  console.log("Inside showTowns function ///////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

  console.log(towns);

  console.log(towns.length);


  for (let i = 0; i < towns.length; i++) {
      /*if (i === 2) { continue; }*/
      let myDiv = document.createElement('div');
      if (i==0 || i==2) {
          myDiv.setAttribute("id", "divleft");
      } /*else {
          myDiv.setAttribute("id", "divright");
      }*/

      

      let myUlist = document.createElement('ul');
      
      createRepeatingListItem(myUlist, "Current temperature: ", "&deg; F / ", "&deg; C", towns[i]);
      createRepeatingListItem(myUlist, "Max temp: ", "&deg; F / ", "&deg; C", towns[i]);
      createRepeatingListItem(myUlist, "Min temp: ", "&deg; F / ", "&deg; C", towns[i]);

      /*let myListItem = document.createElement('li');
      myListItem.textContent = "Chance of Precipitation: 0%";
      myUlist.appendChild(myListItem);*/

      createRepeatingListItem(myUlist, "Wind Speed: ", " mph / ", " kmph", towns[i]);

      //createRepeatingListItem(myUlist, "Wind chill: ", "", "", towns[i]);

      createRepeatingListItem(myUlist, "Current weather description: ", "", "", towns[i]);

      let imgElement1 = document.createElement('img');

      let iconcode = towns[i].weather[0].icon;
      let icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
      imgElement1.setAttribute("src", icon_path);
      imgElement1.setAttribute("class", "weather_icon");
      myUlist.appendChild(imgElement1);

      

      let imgElement2 = document.createElement('img');
      if(towns[i].name == "London"){
          imgElement2.setAttribute("src", "images/london.jpg");
          myDiv.appendChild(imgElement2);
      } else if(towns[i].name == "San Francisco"){
          imgElement2.setAttribute("src", "images/san_Francisco.jpg");
          myDiv.appendChild(imgElement2);
      } else if(towns[i].name == "Sydney"){
          imgElement2.setAttribute("src", "images/sydney.jpg");
          myDiv.appendChild(imgElement2);
      }

      let myH2 = document.createElement("h2");
      myH2.textContent = towns[i].name;
      myDiv.appendChild(myH2);

      /*var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');


      myH2.textContent = towns[i].name;
      myPara2.textContent = 'Year founded: ' + towns[i].yearFounded;
      myPara3.textContent = 'Population: ' + towns[i].currentPopulation;
      myPara4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;


      myArticle.appendChild(myH2);

      myArticle.appendChild(myPara2);

      myArticle.appendChild(myPara3);

      myArticle.appendChild(myPara4);

      myDiv.appendChild(myArticle);

      if (i==0){
          var x = document.createElement("IMG");
          x.setAttribute("src", "images/franklin.jpeg");

          x.setAttribute("alt", "The Town of Franklin");
         /* x.setAttribute("id", [i]);*/
          /*myDiv.appendChild(x);


      } else if (i==1) {
          var x = document.createElement("IMG");
          x.setAttribute("src", "images/greenville.jpeg");

          x.setAttribute("alt", "The Town of Greenville");
          /* x.setAttribute("id", [i]);*/
          /*myDiv.appendChild(x);


      } else {
          var x = document.createElement("IMG");
          x.setAttribute("src", "images/springfield.jpeg");

          x.setAttribute("alt", "The Town of Springfield");
          /* x.setAttribute("id", [i]);*/
          /*myDiv.appendChild(x);


      }*/

      myUlist.style.textAlign = "left";

      myDiv.appendChild(myUlist);


      sectionElement.appendChild(myDiv);
  }

}

function createRepeatingListItem(UListElement, itemText1, itemText2, itemText3, cityData){

      let myListItem = document.createElement('li');

      let mySpan1 = document.createElement('span');
      mySpan1.textContent = itemText1;

      myListItem.appendChild(mySpan1);

      let mySpan2 = document.createElement('span');
      //mySpan2.setAttribute("id", "js-mainTempFahrenheit" + i);
      if(itemText1 != "Current weather description: "){
        mySpan2.textContent = calculateWindChill(cityData.main.temp_max, cityData.main.temp_min, cityData.wind.speed);
      } else {
        mySpan2.textContent = cityData.weather[0].description;
      }

      myListItem.appendChild(mySpan2);

      if(itemText1 != "Current weather description: "){

      let mySpan3 = document.createElement('span');
      mySpan3.innerHTML = itemText2;

      myListItem.appendChild(mySpan3);

      }

      if(itemText1 != "Wind chill: " && itemText1 != "Current weather description: "){

      let mySpan4 = document.createElement('span');
      //mySpan4.setAttribute("id", "js-mainTempCelsius" + i);
      if(itemText1 != "Wind Speed: "){
        mySpan4.textContent = convertFahrenheitToCelsius(cityData.main.temp);
      } else {
        mySpan4.textContent = convertMphToKmph(cityData.wind.speed);
      }

      myListItem.appendChild(mySpan4);

      let mySpan5 = document.createElement('span');
      mySpan5.innerHTML = itemText3;

      myListItem.appendChild(mySpan5);

      }

      UListElement.appendChild(myListItem);
}