/********** PRESTON CURRENT WEATHER**********/
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
     var weatherData = weatherRequest.response;

     var temp = weatherData.main.temp;
     var windSpeed = weatherData.wind.speed;
     var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
     // console.log(weatherData)
     document.getElementById("prestonCurrentTemperature").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
     document.getElementById("prestonCurrentHumidity").innerHTML = weatherData.main.humidity.toFixed(1) + "%";
     document.getElementById("prestonCurrentWindSpeed").innerHTML = weatherData.wind.speed.toFixed(1) + "mph";
     document.getElementById("prestonCurrentWindChill").innerHTML = windChill.toFixed(1) + "&#8457";
}

// /********** PRESTON FORECAST **********/
// var apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

// var weatherRequest = new XMLHttpRequest();

// weatherRequest.open('GET', apiURLstring, true);
// weatherRequest.responseType = 'json';
// weatherRequest.send();

// weatherRequest.onload = function () {
//      var forecastInfo = JSON.parse(forecastRequest.responseText);
//      /* json information */
//      console.log(forecastInfo);
//      /* placing the days of the week in the table head */
//      var d = new Date();
//      /* define the days of the week */
//      var weekday = new Array(7);
//      weekday[0] = "Sun";
//      weekday[1] = "Mon";
//      weekday[2] = "Tue";
//      weekday[3] = "Wed";
//      weekday[4] = "Thu";
//      weekday[5] = "Fri";
//      weekday[6] = "Sat";
//      weekday[7] = "Sun";
//      weekday[8] = "Mon";
//      weekday[9] = "Tue";
//      weekday[10] = "Wed";
//      weekday[11] = "Thu";
//      weekday[12] = "Fri";
//      weekday[13] = "Sat";
//      /* create the five day sequence */
//      var one = weekday[d.getDay()];
//      document.getElementById('day1').innerHTML = one;
//      var two = weekday[d.getDay() + 1];
//      document.getElementById('day2').innerHTML = two;
//      var three = weekday[d.getDay() + 2];
//      document.getElementById('day3').innerHTML = three;
//      var four = weekday[d.getDay() + 3];
//      document.getElementById('day4').innerHTML = four;
//      var five = weekday[d.getDay() + 4];
//      document.getElementById('day5').innerHTML = five;
//      /* placing the data forecast in the table data */
//      document.getElementById('temp1').innerHTML = forecastInfo.list[0].main.temp_max.toFixed(0);
//      document.getElementById('temp2').innerHTML = forecastInfo.list[8].main.temp_max.toFixed(0);
//      document.getElementById('temp3').innerHTML = forecastInfo.list[16].main.temp_max.toFixed(0);
//      document.getElementById('temp4').innerHTML = forecastInfo.list[24].main.temp_max.toFixed(0);
//      document.getElementById('temp5').innerHTML = forecastInfo.list[32].main.temp_max.toFixed(0);
// }