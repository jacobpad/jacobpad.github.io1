import { Book } from './book.js';
let books = [];

let book1 = new Book('My ABC\'s', 'Author Joe', '11/25/2019', '3.0', 'http://www.amazon.com');

books.push(book1);

function showBooks() {
     /* REMOVE EXISTING ROWS */
     let table = document.querySelector('tbody');
     while (table.rows.length > 0) {
          table.deleteRow(0);
     }

     books.forEach(book => {
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
          tdEdit.innerHTML = '<a href="./edit-book.html" class="edit-pencil">&#9998;</>';
          // tdEdit.addEventListener('click', editBook);

          tr.appendChild(tdTitle);
          tr.appendChild(tdAuthor);
          tr.appendChild(tdDateFinished);
          tr.appendChild(tdRating);
          tr.appendChild(tdLink);
          tr.appendChild(tdEdit);

          document.querySelector('tbody').appendChild(tr);
     });
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
     showBooks();

     /* TEMP */
     console.log(book);
}
// document.querySelector('.save-link').addEventListener('click', saveBookToList);

showBooks();