var templeJSONData = [
     {
          "temple": "Bountiful Utah Temple",
          "address": "640 S Bountiful Blvd",
          "city": "Bountiful",
          "state": "Utah",
          "zip": "84010",
          "country": "USA",
          "phone": "801-296-2100",
          "email": "Unavailable",
          "ordinanceSchedule": "6AM and every 30min from 7AM until 8PM.",
          "services": [
               {
                    "service": "Clothing rental available"
               },
               {
                    "service": "Cafeteria available"
               },
               {
                    "service": "No patron housing available"
               },
               {
                    "service": "Distribution center nearby"
               }
          ],
          "closures": [
               {
                    "start": "April 6, 2019"
               },
               {
                    "start": "July 4, 2019"
               },
               {
                    "start": "July 16-20, 2019"
               },
               {
                    "start": "July 22, 2019 - August 5, 2019"
               },
               {
                    "start": "October 5, 2019"
               },
               {
                    "start": "November 28, 2019"
               },
               {
                    "start": "December 24-25, 2019"
               },
               {
                    "start": "December 31, 2019"
               }
          ],
          "announced": "February 2, 1990",
          "groundbreaking": "May 2, 1992"
     },
     {
          "temple": "Gilbert Arizona Temple",
          "address": "3301 S Greenfield Rd",
          "city": "Gilbert",
          "state": "Arizona",
          "zip": "85297",
          "country": "USA",
          "phone": "480-822-5000",
          "email": "Unavailable",
          "ordinanceSchedule": "Every 45 minutes starting at 5:30AM",
          "services": [
               {
                    "service": "Clothing rental available"
               },
               {
                    "service": "No cafeteria available"
               },
               {
                    "service": "No patron housing available"
               },
               {
                    "service": "Distribution center nearby"
               }
          ],
          "closures": [
               {
                    "start": "April 6, 2019"
               },
               {
                    "start": "July 4, 2019"
               },
               {
                    "start": "September 30, 2019 - October 14, 2019"
               },
               {
                    "start": "November 27-28, 2019"
               },
               {
                    "start": "December 24-25, 2019"
               },
               {
                    "start": "December 31, 2019"
               }
          ],
          "announced": "April 10, 2008",
          "groundbreaking": "November 13, 2010"
     },
     {
          "temple": "Paris France Temple",
          "address1": "46 Boulevard Saint Antoine",
          "address2": "78150 Le Chesnay",
          "city": "Paris",
          "country": "France",
          "phone": "(33) 970-73-70-00",
          "email": "Unavailable",
          "ordinanceSchedule": "8:30AM, 11:00AM, 1:30PM",
          "services": [
               {
                    "service": "No clothing rental available"
               },
               {
                    "service": "No cafeteria available"
               },
               {
                    "service": "Patron housing available"
               },
               {
                    "service": "No distribution center nearby"
               }
          ],
          "closures": [
               {
                    "start": "April 6, 2019"
               },
               {
                    "start": "June 3-17, 2019"
               },
               {
                    "start": "October 5, 2019"
               },
               {
                    "start": "December 24-25, 2019"
               },
               {
                    "start": "December 31, 2019"
               }
          ],
          "announced": "October 1, 2011",
          "groundbreaking": "August 24, 2012"
     },
     {
          "temple": "Preston England Temple",
          "address": "Temple Way, Hartwood Green Chorley",
          "city": "Lancashire",
          "country": "England PR6 7EQ, United Kingdom",
          "phone": "(44) 1257-226-100",
          "email": "Unavailable",
          "ordinanceSchedule": "On the hour from 8:00AM to 3:00PM",
          "services": [
               {
                    "service": "Clothing rental available"
               },
               {
                    "service": "Cafeteria available"
               },
               {
                    "service": "Patron housing available"
               },
               {
                    "service": "Distribution center nearby"
               }
          ],
          "closures": [
               {
                    "start": "April 6, 2019"
               },
               {
                    "start": "July 15-29, 2019"
               },
               {
                    "start": "October 5-20, 2019"
               },
               {
                    "start": "December 17-21, 2019"
               },
               {
                    "start": "December 24-28, 2019"
               },
               {
                    "start": "December 31, 2019"
               }
          ],
          "announced": "February 2, 1990",
          "groundbreaking": "May 2, 1982"
     }
];


/******************* BOUNTIFUL *******************/
document.getElementById("bountifulAddress").innerHTML = templeJSONData[0].address;
document.getElementById("bountifulCity").innerHTML = templeJSONData[0].city + ',';
document.getElementById("bountifulState").innerHTML = templeJSONData[0].state;
document.getElementById("bountifulZip").innerHTML = templeJSONData[0].zip;
document.getElementById("bountifulCountry").innerHTML = templeJSONData[0].country;
document.getElementById("bountifulPhone").innerHTML = 'Phone: ' + templeJSONData[0].phone;
document.getElementById("bountifulEmail").innerHTML = 'Email: ' + templeJSONData[0].email;
document.getElementById("bountifulAnnounced").innerHTML = 'Announced: ' + templeJSONData[0].announced;
document.getElementById("bountifulGroundbreaking").innerHTML = 'Ground breaking: ' + templeJSONData[0].groundbreaking;
document.getElementById("bountifulOrdSchedule").innerHTML = templeJSONData[0].ordinanceSchedule;

for (i = 0; i < templeJSONData[0].services.length; i++) {
     var div = document.createElement('div');
     div.textContent = templeJSONData[0].services[i].service;
     document.getElementById("bountifulServices0").appendChild(div);
};

for (i = 0; i < templeJSONData[0].closures.length; i++) {
     var div = document.createElement('div');
     div.textContent = 'Closed: ' + templeJSONData[0].closures[i].start;
     document.getElementById("bountifulClosureStart").appendChild(div);
};











/******************* GILBERT *******************/
document.getElementById("gilbertAddress").innerHTML = templeJSONData[1].address;
document.getElementById("gilbertCity").innerHTML = templeJSONData[1].city + ',';
document.getElementById("gilbertState").innerHTML = templeJSONData[1].state;
document.getElementById("gilbertZip").innerHTML = templeJSONData[1].zip;
document.getElementById("gilbertCountry").innerHTML = templeJSONData[1].country;
document.getElementById("gilbertPhone").innerHTML = 'Phone: ' + templeJSONData[1].phone;
document.getElementById("gilbertEmail").innerHTML = 'Email: ' + templeJSONData[1].email;
document.getElementById("gilbertAnnounced").innerHTML = 'Announced: ' + templeJSONData[1].announced;
document.getElementById("gilbertGroundbreaking").innerHTML = 'Ground breaking: ' + templeJSONData[1].groundbreaking;
document.getElementById("gilbertOrdSchedule").innerHTML = templeJSONData[1].ordinanceSchedule;

for (i = 0; i < templeJSONData[1].services.length; i++) {
     var div = document.createElement('div');
     div.textContent = templeJSONData[1].services[i].service;
     document.getElementById("gilbertServices0").appendChild(div);
};

for (i = 0; i < templeJSONData[1].closures.length; i++) {
     var div = document.createElement('div');
     div.textContent = 'Closed: ' + templeJSONData[1].closures[i].start;
     document.getElementById("gilbertClosureStart").appendChild(div);
};











/******************* PARIS *******************/
document.getElementById("parisAddress1").innerHTML = templeJSONData[2].address1;
document.getElementById("parisAddress2").innerHTML = templeJSONData[2].address2;
document.getElementById("parisCity").innerHTML = templeJSONData[2].city;
document.getElementById("parisCountry").innerHTML = templeJSONData[2].country;
document.getElementById("parisPhone").innerHTML = 'Phone: ' + templeJSONData[2].phone;
document.getElementById("parisEmail").innerHTML = 'Email: ' + templeJSONData[2].email;
document.getElementById("parisAnnounced").innerHTML = 'Announced: ' + templeJSONData[2].announced;
document.getElementById("parisGroundbreaking").innerHTML = 'Ground breaking: ' + templeJSONData[2].groundbreaking;
document.getElementById("parisOrdSchedule").innerHTML = templeJSONData[2].ordinanceSchedule;

for (i = 0; i < templeJSONData[2].services.length; i++) {
     var div = document.createElement('div');
     div.textContent = templeJSONData[2].services[i].service;
     document.getElementById("parisServices0").appendChild(div);
};

for (i = 0; i < templeJSONData[2].closures.length; i++) {
     var div = document.createElement('div');
     div.textContent = 'Closed: ' + templeJSONData[2].closures[i].start;
     document.getElementById("parisClosureStart").appendChild(div);
};











/******************* PRESTON *******************/
document.getElementById("prestonAddress").innerHTML = templeJSONData[3].address;
document.getElementById("prestonCity").innerHTML = templeJSONData[3].city;
document.getElementById("prestonCountry").innerHTML = templeJSONData[3].country;
document.getElementById("prestonPhone").innerHTML = 'Phone: ' + templeJSONData[3].phone;
document.getElementById("prestonEmail").innerHTML = 'Email: ' + templeJSONData[3].email;
document.getElementById("prestonAnnounced").innerHTML = 'Announced: ' + templeJSONData[3].announced;
document.getElementById("prestonGroundbreaking").innerHTML = 'Ground breaking: ' + templeJSONData[3].groundbreaking;
document.getElementById("prestonOrdSchedule").innerHTML = templeJSONData[3].ordinanceSchedule;

for (i = 0; i < templeJSONData[3].services.length; i++) {
     var div = document.createElement('div');
     div.textContent = templeJSONData[3].services[i].service;
     document.getElementById("prestonServices0").appendChild(div);
};

for (i = 0; i < templeJSONData[3].closures.length; i++) {
     var div = document.createElement('div');
     div.textContent = 'Closed: ' + templeJSONData[3].closures[i].start;
     document.getElementById("prestonClosureStart").appendChild(div);
};








































// /******************** BOUNTIFUL ********************/
// var getJSONData = 'https://jacobpad.github.io/CIT230/assignments/temple-project-final/scripts/json/temples.json';

// var templeDataRequest = new XMLHttpRequest();

// templeDataRequest.open('GET', getJSONData, true);
// templeDataRequest.responseType = 'json';
// templeDataRequest.send();

// templeDataRequest.onload = function () {
//      var templeData = templeDataRequest.response;

//      // console.log(templeData);
//      document.getElementById("bountifulAddress").innerHTML = templeData[0].address;
//      document.getElementById("bountifulCity").innerHTML = templeData[0].city;
//      document.getElementById("bountifulState").innerHTML = templeData[0].state;
//      document.getElementById("bountifulZip").innerHTML = templeData[0].zip;
//      document.getElementById("bountifulCountry").innerHTML = templeData[0].country;
//      document.getElementById("bountifulPhone").innerHTML = templeData[0].phone;
//      document.getElementById("bountifulEmail").innerHTML = templeData[0].email;
//      document.getElementById("bountifulAnnounced").innerHTML = templeData[0].announced;
//      document.getElementById("bountifulGroundbreaking").innerHTML = templeData[0].groundbreaking;
//      document.getElementById("bountifulOrdSchedule").innerHTML = templeData[0].ordinanceSchedule;
//      // document.getElementById("bountifulServices0").innerHTML = templeData[0].services[0];
//      // document.getElementById("bountifulServices1").innerHTML = templeData[0].services[1];
//      // document.getElementById("bountifulServices2").innerHTML = templeData[0].services[2];
//      // document.getElementById("bountifulServices3").innerHTML = templeData[0].services[3];
//      for (i = 0; i < templeData.closure.length; i++) {
//           document.createElement('div')
//           console.log(x);
//      }
// }