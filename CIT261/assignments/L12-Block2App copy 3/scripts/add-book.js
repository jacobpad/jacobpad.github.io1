import { Book } from './book.js';
// import { showBooks } from './showBook';

let books = [];
let editMode = false;
console.log(books);

function loadBooks() {
     if (localStorage.getItem("books")) {
          books = JSON.parse(localStorage.getItem("books"));
          console.table(books);
     }
}

function saveToLocalStorage() {
     localStorage.setItem('books', JSON.stringify(books));
}
function saveBookToList() {
     let newBook = new Book(
          document.getElementById("title").value,
          document.getElementById("author").value,
          document.getElementById("dateFinished").value,
          document.getElementById("rating").value,
          document.getElementById("link").value
     );

     books.push(newBook);
     console.log(books);
     saveToLocalStorage();

     document.querySelector('input[type="reset"]').click();
     /* TEMP */
     console.table(books);

}


function navToHome() {
     window.location.href = './index.html';
}
loadBooks();
document.querySelector('input[type="button"]').addEventListener('click', saveBookToList);
document.querySelector('input[type="button"]').addEventListener('click', saveToLocalStorage);
document.querySelector('input[type="button"]').addEventListener('click', navToHome);




// un-MOVED TO SHOWBOOK.JS
// function showBooks() {
//      /* REMOVE EXISTING ROWS */
//      let table = document.querySelector('tbody');
//      while (table.rows.length > 0) {
//           table.deleteRow(0);
//      }

//      /* LOAD BOOKS FROM LOCAL STORAGE */
//      if (localStorage.getItem("books")) {
//           books = JSON.parse(localStorage.getItem("books"));
//           console.table(books);
//      } else {
//           loadBooks();
//      }



//      books.forEach(book => {
//           addRow(book);
//      });
// }

// function addRow(book) {
//      let tr = document.createElement('tr');
//      let tdTitle = document.createElement('td');
//      let tdAuthor = document.createElement('td');
//      let tdDateFinished = document.createElement('td');
//      let tdRating = document.createElement('td');
//      let tdLink = document.createElement('td');
//      let tdEdit = document.createElement('td');
//      let link = document.querySelectorAll('input[type="url"]');

//      tdTitle.innerText = book.title;
//      tdAuthor.innerText = book.author;
//      tdDateFinished.innerText = book.dateFinished;
//      tdRating.innerText = book.rating;
//      ///////////////////////////////////////////////////////////
//      if (book.link == 'https://www.') {
//           book.link = './link-error.html';
//      }
// tdLink.innerHTML = '<a href="' + book.link + '" class="remove-decoration">&#128279;</a>';
// tdEdit.innerHTML = '<a href="./edit-book.html" class="edit-pencil">&#9998;</>';
// tdEdit.innerHTML = '<a href="#" class="remove-decoration">&#9998;</a>';
//      // tdEdit.addEventListener('click', editBook);


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
console.table(books);
