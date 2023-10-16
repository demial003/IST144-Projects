const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, not read yet`;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
  myLibrary.push(Book);
  myLibrary.push(Book);
  myLibrary.push(Book);
}

function displayLibrary() {
  for (let book of myLibrary) {
    console.log(book.info());
  }
}

const btn = document.querySelector(".display");

btn.addEventListener("click", () => {
  const table = document.querySelector("table");
  console.log(table);

  const newRow = document.createElement("tr");
  newRow.textContent = "dddd";
  table.appendChild(newRow);
});

let theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295);
addBookToLibrary(theHobbit);
