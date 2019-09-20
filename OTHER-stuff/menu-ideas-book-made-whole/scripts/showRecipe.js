import './main.js';
// export 
function showRecipes() {
     /* REMOVE EXISTING ROWS */
     let table = document.querySelector('tbody');
     while (table.rows.length > 0) {
          table.deleteRow(0);
     }

     /* LOAD RECIPES FROM LOCAL STORAGE */
     if (localStorage.getItem("recipes")) {
          recipes = JSON.parse(localStorage.getItem("recipes"));
          console.table(recipes);
     } else {
          loadRecipes();
     }



     recipes.forEach(recipe => {
          addRow(recipe);
     });
}
showRecipes();