$(document).ready(function() {
    const url = "https://my-g-read.herokuapp.com"
    $.get(`${url}/book/` + location.search.slice(4)).then(editBook)


    function editBook(book) {
        $('.editTitle').val(book[0].title)
        $('.editGenre').val(book[0].genre)
        $('.editURL').val(book[0].coverUrl)
        $('.editDescription').val(book[0].description)
      }


        var editedBook = {}
        $('.editBook').on('click', function(event) {
          event.preventDefault()
          editedBook.title = $('.editTitle').val()
          editedBook.genre = $('.editGenre').val()
          editedBook.coverUrl = $('.editURL').val()
          editedBook.description = $('.editDescription').val()
          console.log(editedBook);
          $.ajax({
              url: `${url}/book/`+ location.search.slice(4),
              method: 'PUT',
              crossDomain: true,
              data: JSON.stringify(editedBook),
              contentType: "application/json; charset=utf-8"
          })
          .then(response => {
              console.log(response);
              window.location = "/books.html"
          })
          .catch(err => {
              console.log(err);
          })




        })



})
