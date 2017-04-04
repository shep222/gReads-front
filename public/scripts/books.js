$(document).ready(function() {
const url = "https://my-g-read.herokuapp.com"
  $.get(`${url}/book`).then(myBooks)

  function myBooks(books) {
    books.forEach( function (book){
      $('.allBooks').append($(`<div class="container">
          <article class="row">
              <div class="col-md-3">
                  <img class="booksImg" src="${book.coverUrl}">
              </div>
              <div class="col-md-8">
                  <div class="bookTitle">
                      <h1 class="mainTitle">${book.title}</h1>
                      <div class="myButtons">
                          <button class="editBtn myBtn btn btn-primary" type="button" name="button">Edit</button>
                          <button class="myBtn btn btn-primary" type="button" name="button">Remove</button>
                      </div>
                  </div>
                  <div class="">
                      <h3>Author Info</h3>
                      <h3>${book.genre}</h3>
                      <p>${book.description}</p>
                  </div>
              </div>
          </article>
      </div>
        `))
    })
  }

  $('body').on('click', '.editBtn', function() {
         var editBook = $(this).data('id')
         console.log(editBook);
        //  window.location = "/editBook.html?id="+editBook
      })








})
