/********** BOUNTIFUL UTAH TEMPLE CURRENT WEATHER**********/
// Key - 7HJD8THE17P65BKJ

var apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=7HJD8THE17P65BKJ';

var bWeatherRequest = new XMLHttpRequest();

bWeatherRequest.open('GET', apiURL, true);
bWeatherRequest.responseType = 'json';
bWeatherRequest.send();

bWeatherRequest.onload = function () {
     var weatherData = bWeatherRequest.response;
     document.getElementById("ticker1").innerHTML = weatherData.time series(5min);
}
