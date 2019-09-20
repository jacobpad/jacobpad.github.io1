import { Recipe } from './recipe.js';
// import { showRecipes } from './showRecipe';

let recipes = [];
let editMode = false;
console.log(recipes);

function loadRecipes() {
     if (localStorage.getItem("recipes")) {
          recipes = JSON.parse(localStorage.getItem("recipes"));
          console.table(recipes);
     }
}

function saveToLocalStorage() {
     localStorage.setItem('recipes', JSON.stringify(recipes));
}

function saveRecipeToList() {
     let newRecipe = new Recipe(
          document.getElementById("title").value,
          document.getElementById("author").value,
          document.getElementById("dateFinished").value,
          document.getElementById("rating").value,
          document.getElementById("link").value
     );

     recipes.push(newRecipe);
     console.log(recipes);
     saveToLocalStorage();

     document.querySelector('input[type="reset"]').click();
     /* TEMP */
     console.table(recipes);

}


function navToHome() {
     window.location.href = './index.html';
}
loadRecipes();
document.querySelector('input[type="button"]').addEventListener('click', saveRecipeToList);
document.querySelector('input[type="button"]').addEventListener('click', saveToLocalStorage);
document.querySelector('input[type="button"]').addEventListener('click', navToHome);




// un-MOVED TO SHOWBOOK.JS
// function showRecipes() {
//      /* REMOVE EXISTING ROWS */
//      let table = document.querySelector('tbody');
//      while (table.rows.length > 0) {
//           table.deleteRow(0);
//      }

//      /* LOAD BOOKS FROM LOCAL STORAGE */
//      if (localStorage.getItem("recipes")) {
//           recipes = JSON.parse(localStorage.getItem("recipes"));
//           console.table(recipes);
//      } else {
//           loadRecipes();
//      }



//      recipes.forEach(recipe => {
//           addRow(recipe);
//      });
// }

// function addRow(recipe) {
//      let tr = document.createElement('tr');
//      let tdTitle = document.createElement('td');
//      let tdAuthor = document.createElement('td');
//      let tdDateFinished = document.createElement('td');
//      let tdRating = document.createElement('td');
//      let tdLink = document.createElement('td');
//      let tdEdit = document.createElement('td');
//      let link = document.querySelectorAll('input[type="url"]');

//      tdTitle.innerText = recipe.title;
//      tdAuthor.innerText = recipe.author;
//      tdDateFinished.innerText = recipe.dateFinished;
//      tdRating.innerText = recipe.rating;
//      ///////////////////////////////////////////////////////////
//      if (recipe.link == 'https://www.') {
//           recipe.link = './link-error.html';
//      }
// tdLink.innerHTML = '<a href="' + recipe.link + '" class="remove-decoration">&#128279;</a>';
// tdEdit.innerHTML = '<a href="./edit-recipe.html" class="edit-pencil">&#9998;</>';
// tdEdit.innerHTML = '<a href="#" class="remove-decoration">&#9998;</a>';
//      // tdEdit.addEventListener('click', editRecipe);


//      // console.log(link);


//      tr.appendChild(tdTitle);
//      tr.appendChild(tdAuthor);
//      tr.appendChild(tdDateFinished);
//      tr.appendChild(tdRating);
//      tr.appendChild(tdLink);
//      tr.appendChild(tdEdit);
//      saveToLocalStorage();

//      // document.querySelector('tbody').appendChild(tr);
// }

// document.getElementsByClassName("save-link").onclick = 

/* TEMP */
console.table(recipes);
