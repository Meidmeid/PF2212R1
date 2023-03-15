/**
 * Viết một trang web để quản lý trong một cửa hàng
 * Mỗi quyển sách sẽ gồm có các thông tin : tên, thể loại,
 * giá tiền, số lượng.
 * Trang web sẽ có các chức năng chính như sau: CRUD
 * 1. Thêm sách vào cửa hàng (Create)
 * 2. Tìm kiếm thông tin theo sách (Read)
 * 3. Điều chỉnh số lượng sách (cho phép tăng/ giảm số lượng) (Update)
 * 4. Xoá một loại sách ra khỏi cửa hàng (Delete)
 */

class Book {
  constructor(name, category, price, quantity) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}

let bookList = [];

// Add new book
let btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", () => {
  let bookName = document.getElementById("book-name").value;
  let bookCategory = document.getElementById("book-category").value;
  let bookPrice = parseInt(document.getElementById("book-price").value);
  let bookQuantity = parseInt(document.getElementById("book-quantity").value);

  let newBook = new Book(bookName, bookCategory, bookPrice, bookQuantity);

  bookList.push(newBook);
  console.log(bookList);

  alert(`New book "${bookName}" added successfully !`);
});

// Search book
function searchBook() {
  let searchName = document.getElementById("search-name").value;
  let check = false;

  // loop throught each item in booklist
  for (let i in bookList) {
    if (bookList[i].name.includes(searchName)) {
      check = true;
      document.getElementById("book-name").value = bookList[i].name;
      document.getElementById("book-category").value = bookList[i].category;
      document.getElementById("book-price").value = bookList[i].price;
      document.getElementById("book-quantity").value = bookList[i].quantity;
      console.log(bookList[i]);
      break;
    }
  }

  if (check == false) {
    alert("No book found !");
  }
}

// Delete book
function deleteBook() {
  let searchName = document.getElementById("search-name").value;
  let check = false;

  // loop throught each item in booklist
  for (let i in bookList) {
    if (bookList[i].name.includes(searchName)) {
      check = true;
      console.log(bookList[i]);
      bookList.splice(i, 1); // delete book
      break;
    }
  }

  if (check == false) {
    alert("No book found !");
  }
}

// Update book
function updateBook() {
  let bookName = document.getElementById("book-name").value;
  let bookCategory = document.getElementById("book-category").value;
  let bookPrice = parseInt(document.getElementById("book-price").value);
  let bookQuantity = parseInt(document.getElementById("book-quantity").value);
  let check = false;

  // loop throught each item in booklist
  for (let i in bookList) {
    if (bookList[i].name.includes(bookName)) {
      bookList[i].category = bookCategory;
      bookList[i].price = bookPrice;
      bookList[i].quantity = bookQuantity;
      check = true;
      console.log(bookList[i]);
      alert("Update book successfully !");
      break;
    }
  }

  if (check == false) {
    alert("No book found !");
  }
}
