const RECIPES = [
     {
          Category: "Dad likes",
          Recipe: "Lasagna",
          Ingredients: [
               {
                    name: "Noodles",
                    quantity: "1 box"
               },
               {
                    name: "Sauce",
                    quantity: "1 jar"
               }
          ]
     }
];

// Create a table
let table = document.createElement("table");

// Create header row
let headerRow = document.createElement("tr");

// Keys
var keys = Object.keys(RECIPES[0]);

keys.forEach(key => {
     let th = document.createElement("th");
     let heading = document.createTextNode(key);

     th.appendChild(heading);
     headerRow.append(th);
});

// Append row to table
table.appendChild(headerRow);

// Loop through objects in array
RECIPES.forEach(title => {
     // Create new row
     let tr = document.createElement("tr");

     // Add title column
     let mealName = document.createElement("td");
     let mealNameText = document.createTextNode(title.mealName);
     mealName.appendChild(mealNameText);
     tr.appendChild(mealName);

     // Add forWho column
     let forWho = document.createElement("td");
     let forWhoText = document.createTextNode(title.forWho);
     forWho.appendChild(forWhoText);
     tr.appendChild(forWho);

     // Add mealTime column
     let mealTime = document.createElement("td");
     let mealTimeText = document.createTextNode(title.mealTime);
     mealTime.appendChild(mealTimeText);
     tr.appendChild(mealTime);

     // Add row to table
     table.appendChild(tr);
});




// Add to document
document.getElementById("recipeList").appendChild(table);
document.getElementById("ending").innerHTML = "<br>HI";