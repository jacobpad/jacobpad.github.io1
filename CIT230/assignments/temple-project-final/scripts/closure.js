/******************** BOUNTIFUL ********************/
var apiURLstring = 'json/temples.json';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
// weatherRequest.send();
// var weatherData = JSON.parse(temples);
// console.log(weatherData);
weatherRequest.onload = function () {
     var weatherData = weatherRequest.response;

     // var temp = weatherData.main.temp;
     // var windSpeed = weatherData.wind.speed;
     // var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
     console.log(weatherData);
     // document.getElementById("sodaSpringsCurrentTemperature").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
     // document.getElementById("sodaSpringsCurrentHumidity").innerHTML = weatherData.main.humidity.toFixed(1) + "%";
     // document.getElementById("sodaSpringsCurrentWindSpeed").innerHTML = weatherData.wind.speed.toFixed(1) + "mph";
     // document.getElementById("sodaSpringsCurrentWindChill").innerHTML = windChill.toFixed(1) + "&#8457";
}