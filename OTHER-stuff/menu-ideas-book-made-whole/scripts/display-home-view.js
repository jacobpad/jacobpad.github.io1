import { Recipe } from './recipe.js';

let recipes = [];
let editMode = false;

function loadRecipes() {
     let exampleRecipe = new Recipe('Example Recipe', 'Author', 'yyyy/mm/dd', '3', 'https://www.jacobpad.com');
     recipes.push(exampleRecipe);
}

function showRecipes() {
     /* REMOVE EXISTING ROWS */
     let table = document.querySelector('tbody');
     while (table.rows.length > 0) {
          table.deleteRow(0);
     }
     /* LOAD BOOKS FROM LOCAL STORAGE */
     if (localStorage.getItem("recipes")) {
          recipes = JSON.parse(localStorage.getItem("recipes"));
          //          console.table(recipes);
     } else {
          loadRecipes();
     }
     recipes.forEach(recipe => {
          addRow(recipe);
     });
}

function addRow(recipe) {
     let tr = document.createElement('tr');
     let tdTitle = document.createElement('td');
     let tdAuthor = document.createElement('td');
     let tdDateFinished = document.createElement('td');
     let tdRating = document.createElement('td');
     let tdLink = document.createElement('td');
     let tdEdit = document.createElement('td');
     let link = document.querySelectorAll('input[type="url"]');

     tdTitle.innerText = recipe.title;
     tdAuthor.innerText = recipe.author;
     tdDateFinished.innerText = recipe.dateFinished;
     tdRating.innerText = recipe.rating;

     if (recipe.link == 'https://www.') {
          recipe.link = './link-error.html';
     }
     tdLink.innerHTML = '<a href="' + recipe.link + '" class="remove-decoration">&#128279;</a>';
     tdEdit.innerHTML = '<a href="#" class="remove-decoration">&#9998;</a>';
     // tdEdit.innerHTML = '<a href="./edit-recipe.html" class="edit-pencil">&#9998;</>';
     // tdEdit.addEventListener('click', editRecipe);

     tr.appendChild(tdTitle);
     tr.appendChild(tdAuthor);
     tr.appendChild(tdDateFinished);
     tr.appendChild(tdRating);
     tr.appendChild(tdLink);
     tr.appendChild(tdEdit);
     document.querySelector('tbody').appendChild(tr);
}

function editRecipe() {
     editMode = true;
}

showRecipes();

/* TEMP */
console.table(recipes);
