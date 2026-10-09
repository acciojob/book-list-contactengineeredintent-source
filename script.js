//your JS code here. If required.
let btnSubmit = document.getElementById("submit");
let tableBody = document.getElementById("tbody");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  // element selection
  let form = document.getElementById("form");
  let bookTitle = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookISBN = document.getElementById("isbn").value;
  let row = document.createElement("tr");
  let titleCell = document.createElement("td");
  let authorCell = document.createElement("td");
  let isbnCell = document.createElement("td");
  let deleteCell = document.createElement("td");
  let deleteButton = document.createElement("button");

  // table creation
  titleCell.textContent = bookTitle;
  authorCell.textContent = bookAuthor;
  isbnCell.textContent = bookISBN;
  deleteButton.textContent = "X";
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  deleteCell.appendChild(deleteButton);
  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(isbnCell);
  row.appendChild(deleteCell);
  tableBody.appendChild(row);
  form.reset();
  deleteButton.addEventListener("click",(event) => {
    event.preventDefault();
    row.remove();
  });
});
