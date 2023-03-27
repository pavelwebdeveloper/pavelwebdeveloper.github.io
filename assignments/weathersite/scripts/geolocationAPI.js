var geolocationMessageElement = document.getElementById("js-geolocationMessage");

/*function askForPermissionToGetGeolocation() {
    
    if (confirm("Do you want the website to know your location?")) {
        getLocation();
    } else {
      
    }
    
  }*/

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPositionAndShowWeather, showError);
    
  } else { 
    //geolocationMessageElement.innerHTML = "Geolocation is not supported by this browser";
  }
}

function setPositionAndShowWeather(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  getWeatherForecastByLocationCoordinates();
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
        geolocationMessageElement.innerHTML = "You denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
        geolocationMessageElement.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
        geolocationMessageElement.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
        geolocationMessageElement.innerHTML = "An unknown error occurred."
      break;
  }
}

//askForPermissionToGetGeolocation();
getLocation();