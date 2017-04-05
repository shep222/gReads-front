$(document).ready(function() {
const url = "https://my-g-read.herokuapp.com"
  $.get(`${url}/book/`+location.search.slice(4)).then(myBook)

  function myBook (book) {
console.log(book);
  $('.deleteBook').append($(`<div class="container" data-id=${book[0].id}>
      <article class="row">
          <div class="col-md-3">
              <img class="booksImg" src="${book[0].coverUrl}">
          </div>
          <div class="col-md-8">
              <div class="bookTitle">
                  <h1 class="mainTitle">${book[0].title}</h1>

              </div>
              <div class="">
                  <h3>Author Info</h3>
                  <h3>${book[0].genre}</h3>
                  <p>${book[0].description}</p>
              </div>
          </div>
      </article>
      <button class="deleteComplete btn btn-primary" type="button" name="button">Delete ${book[0].title}</button>
  </div>
    `))
  }

  $('body').on('click', '.deleteComplete', function() {
          event.preventDefault()
          var deletedBook = $(this).closest('.container').data('id')
          console.log(deletedBook);
          $.ajax({
            url:`${url}/book/${deletedBook}`,
            method: 'DELETE',
            crossDomain: true,
            contentType: "application/json; charset=utf-8"
          })
          .then(response => {
              console.log(response);
              window.location = "/books.html"
          })
          .catch(err => {
              console.log(err);
          })
      });
})
