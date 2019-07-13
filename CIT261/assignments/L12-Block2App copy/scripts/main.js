import { Book } from './book.js';
let books = [];
let editMode = false;

function loadBooks() {
     let book1 = new Book('My ABC\'s', 'Author Joe', '11/25/2019', '3', 'http://www.amazon.com');

     books.push(book1);
     saveToLocalStorage();
}
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

function addRow(book) {
     let tr = document.createElement('tr');
     let tdTitle = document.createElement('td');
     let tdAuthor = document.createElement('td');
     let tdDateFinished = document.createElement('td');
     let tdRating = document.createElement('td');
     let tdLink = document.createElement('td');
     let tdEdit = document.createElement('td');

     tdTitle.innerText = book.title;
     tdAuthor.innerText = book.author;
     tdDateFinished.innerText = book.dateFinished;
     tdRating.innerText = book.rating;
     tdLink.innerText = book.link;
     // tdEdit.innerHTML = '<a href="./edit-book.html" class="edit-pencil">&#9998;</>';
     tdEdit.innerHTML = '<a href="#" class="edit-pencil">&#9998;</>';
     // tdEdit.addEventListener('click', editBook);

     tr.appendChild(tdTitle);
     tr.appendChild(tdAuthor);
     tr.appendChild(tdDateFinished);
     tr.appendChild(tdRating);
     tr.appendChild(tdLink);
     tr.appendChild(tdEdit);

     document.querySelector('tbody').appendChild(tr);
}

// document.getElementsByClassName("save-link").onclick = 
function saveBookToList() {
     let newBook = new Book(
          document.getElementById("title").value,
          document.getElementById("author").value,
          document.getElementById("dateFinished").value,
          document.getElementById("rating").value,
          document.getElementById("link").value
     );
     books.push(newBook);
     saveToLocalStorage();
     addRow(newBook);

     document.querySelector('input[type="reset"]').click();
     /* TEMP */
     console.table(books);
}

function saveToLocalStorage() {
     // Save the book to local storage
     localStorage.setItem('books', JSON.stringify(books));
}

function editStudent() {
     editMode = true;
}










document.querySelector('#saveLink').addEventListener('click', saveBookToList);
showBooks();





/* TEMP */
console.table(books);
