var weatherDataForCities = [];


var cityNames = ["London", "Sidney", "San Francisco"];

/*
for(let i=0; i <= cityNames; i++){

    getLocationCoordinates(cityNames[i], true);

    weatherDataForCities.push(getCurrentWeather());
}
*/

/*
    getLocationCoordinates(cityNames[0], true);

    weatherDataForCities.push(getCurrentWeather());
 */  

    getLocationCoordinates(cityNames[0], true);

    console.log("Here is one city data");
console.log(getCurrentWeather());

console.log("Here is the cities data");
console.log(weatherDataForCities);