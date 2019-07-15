import { Book } from './book.js';

let books = [];
let editMode = false;

function loadBooks() {
     let exampleBook = new Book('Example Book', 'Author', 'yyyy/mm/dd', '3', 'https://www.jacobpad.com');
     books.push(exampleBook);
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
          //          console.table(books);
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
     let link = document.querySelectorAll('input[type="url"]');

     tdTitle.innerText = book.title;
     tdAuthor.innerText = book.author;
     tdDateFinished.innerText = book.dateFinished;
     tdRating.innerText = book.rating;

     if (book.link == 'https://www.') {
          book.link = './link-error.html';
     }
     tdLink.innerHTML = '<a href="' + book.link + '" class="remove-decoration">&#128279;</a>';
     tdEdit.innerHTML = '<a href="#" class="remove-decoration">&#9998;</a>';
     // tdEdit.innerHTML = '<a href="./edit-book.html" class="edit-pencil">&#9998;</>';
     // tdEdit.addEventListener('click', editBook);

     tr.appendChild(tdTitle);
     tr.appendChild(tdAuthor);
     tr.appendChild(tdDateFinished);
     tr.appendChild(tdRating);
     tr.appendChild(tdLink);
     tr.appendChild(tdEdit);
     document.querySelector('tbody').appendChild(tr);
}

function editBook() {
     editMode = true;
}

showBooks();

/* TEMP */
console.table(books);
