const MOUNTAINS = [
     { Name: "Kilimanjaro", Height: 5895, Place: "Tanzania" },
     { Name: "Everest", Height: 8848, Place: "Nepal" },
     { Name: "Mount Fuji", Height: 3776, Place: "Japan" },
     { Name: "Vaalserberg", Height: 323, Place: "Netherlands" },
     { Name: "Denali", Height: 6168, Place: "United States" },
     { Name: "Popocatepetl", Height: 5465, Place: "Mexico" },
     { Name: "Mont Blanc", Height: 4808, Place: "Italy/France" }
];

// CREATE TABLE
let table = document.createElement("table");

// CREATE HEADER ROW
let headerRow = document.createElement("tr");
var keys = Object.keys(MOUNTAINS[0]);

keys.forEach(key => {
     let th = document.createElement("th");
     let heading = document.createTextNode(key);
     th.appendChild(heading);
     headerRow.append(th);
});

// APPEND ROW TO TABLE
table.appendChild(headerRow);

// LOOP THROUGH OBJECTS IN ARRAY
MOUNTAINS.forEach(mountain => {
     let tr = document.createElement("tr");

     let Name = document.createElement("td");
     let NameText = document.createTextNode(mountain.Name);
     Name.appendChild(NameText);
     tr.appendChild(Name);

     let Height = document.createElement("td");
     let HeightText = document.createTextNode(mountain.Height);
     Height.appendChild(HeightText);
     tr.appendChild(Height);

     let Place = document.createElement("td");
     let PlaceText = document.createTextNode(mountain.Place);
     Place.appendChild(PlaceText);
     tr.appendChild(Place);

     // ADD NEW ROW TO TABLE
     table.appendChild(tr);
});


// ADD TABLE TO DOCUMENT
document.getElementById("mountains").appendChild(table);