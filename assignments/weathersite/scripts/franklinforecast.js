let weatherForecastRequest = new XMLHttpRequest();
var apiURL = '//api.openweathermap.org/data/2.5/forecast?id=4156209&APPID=2876382801a396dd5a17e61eabd083ff&units=imperial';
weatherForecastRequest.open('GET', apiURL, true);
weatherForecastRequest.send();
weatherForecastRequest.onload =  function () {
    let weatherForecastData = JSON.parse(weatherForecastRequest.responseText);
    console.log(weatherForecastData);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var dString = '';
    var dateString = '';
    for(let i = 0; i<40; i++){
    var dString = weatherForecastData.list[i].dt_txt;
    var n = dString.split("");
        console.log(n);
    n[10] = "T";
    n.push("Z");
        for(let j=0;j<n.length;j++){
            dateString+=n[j];
        }
        console.log(dateString);
    var date = new Date(dateString);
        console.log(date);


        hours = date.getUTCHours();
        if(hours<10){
            hours = "0" + hours;
        }

        minutes = date.getUTCMinutes();
        if(minutes<10){
            minutes = "0" + minutes;
        }
        seconds = date.getUTCSeconds();
        if(seconds<10){
            seconds = "0" + seconds;
        }

    //document.getElementById('date0').innerHTML = weatherForecastData.list[0].dt;
    document.getElementById("day" + i).innerHTML = days[date.getDay()];
    document.getElementById("date" + i).innerHTML = date.getDate();
    document.getElementById('month' + i).innerHTML = months[date.getMonth()];
    document.getElementById('time' + i).innerHTML = hours + ":" + minutes + ":" + seconds;
        dateString = '';
    }
    /*
    document.getElementById('currentweatherdescription').innerHTML = weatherData.weather[0].description;
    document.getElementById('hightemp').innerHTML = weatherData.main.temp_max;
    document.getElementById('lowtemp').innerHTML = weatherData.main.temp_min;
    document.getElementById('wind').innerHTML = weatherData.wind.speed;

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

    var ht = parseFloat(document.getElementById('hightemp').value = weatherData.main.temp_max);
    var lt = parseFloat(document.getElementById('lowtemp').value = weatherData.main.temp_min);
    var s = parseFloat(document.getElementById('wind').value = weatherData.wind.speed);
    /* colculating the average temperature between the high and the low predictions */
    /*
    var t = (ht + lt) / 2;
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t *  Math.pow(s, 0.16);
    f = Math.round(f);
    document.getElementById("windchill").innerHTML = f;
    */
}
