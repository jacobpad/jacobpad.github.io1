const RECIPES = [
     // Weston
     { mealName: "Oatmeal", forWho: "Weston", mealTime: "Breakfast" },
     { mealName: "Pizza", forWho: "Weston", mealTime: "Lunch" },
     { mealName: "Fish", forWho: "Weston", mealTime: "Dinner" },
     { mealName: "Ice cream", forWho: "Weston", mealTime: "Dessert" },

     // Paxton
     { mealName: "Milk", forWho: "Paxton", mealTime: "Breakfast" },
     { mealName: "Milk", forWho: "Paxton", mealTime: "Lunch" },
     { mealName: "Milk", forWho: "Paxton", mealTime: "Dinner" },
     { mealName: "Milk", forWho: "Paxton", mealTime: "Dessert" },

     // Mom
     { mealName: "Vegegg", forWho: "Mom", mealTime: "Breakfast" },
     { mealName: "Chips-N-Salsa", forWho: "Mom", mealTime: "Lunch" },
     { mealName: "Salad", forWho: "Mom", mealTime: "Dinner" },
     { mealName: "Ice Cream", forWho: "Mom", mealTime: "Dessert" },

     // Dad
     { mealName: "Vegegg", forWho: "Dad", mealTime: "Breakfast" },
     { mealName: "Sandwich", forWho: "Dad", mealTime: "Lunch" },
     { mealName: "Pasta", forWho: "Dad", mealTime: "Dinner" },
     { mealName: "Ice Cream", forWho: "Dad", mealTime: "Dessert" },
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