
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

    for(let i=0; i<=cityNames.length;i++){
    getLocationCoordinates(cityNames[i], true);
    }


    

    


    /*console.log("Here is one city data");
console.log(getCurrentWeather());*/

