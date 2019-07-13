// import './main.js';
// export 
function showBooks() {
     /* REMOVE EXISTING ROWS */
     let table = document.querySelector('tbody');
     while (table.rows.length > 0) {
          table.deleteRow(0);
     }

     /* LOAD BOOKS FROM LOCAL STORAGE */
     if (localStorage.getItem("books")) {
          books = JSON.parse(localStorage.getItem("books"));
          console.table(books);
     } else {
          loadBooks();
     }



     books.forEach(book => {
          addRow(book);
     });
}
showBooks();