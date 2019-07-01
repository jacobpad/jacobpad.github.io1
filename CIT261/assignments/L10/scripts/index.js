import { getJSON, getLocation } from './wk10.js';

let baseURL =
     'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&maxradiuskm=350';

getLocation()
     .then(
          (result) => {
               console.log(result);

               const lat = result.coords.latitude;
               const lon = result.coords.longitude;

               console.log(lat);
               console.log(lon);

               baseURL += '&latitude=' + lat + '&longitude=' + lon;

               console.log(baseURL);

               getJSON(baseURL)
                    .then(
                         (result) => {
                              console.log(result);

                              let ul = document.getElementById('quakeList');

                              result.features.forEach(
                                   (features) => {
                                        console.table(features.properties.place);
                                        let hr = document.createElement('hr');
                                        let li = document.createElement('li');
                                        li.textContent = 'Location: ' + features.properties.place + '     Mag: ' + features.properties.mag;
                                        ul.appendChild(hr);
                                        ul.appendChild(li);
                                   }
                              )
                         }
                    );
          }
     );