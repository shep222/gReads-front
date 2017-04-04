$(document).ready(function() {
    const url = "https://my-g-read.herokuapp.com"
    $.get(`${url}/book`).then(myBooks)

    function myBooks(books) {
        books.forEach(function(book) {

            $('.allBooks').append($(`<div class="container" data-id=${book.id}>
          <article class="row">
          <div class="col-md-3">
          <img class="booksImg" src="${book.coverUrl}">
          </div>
          <div class="col-md-8">
          <div class="bookTitle">
          <a class="showMe"><h1 class="mainTitle">${book.title}</h1></a>
          <div class="myButtons">
          <button class="editBtn myBtn btn btn-primary" type="button" name="button">Edit</button>
          <button class="deleteBookBtn myBtn btn btn-primary" type="button" name="button">Remove</button>
          </div>
          </div>
          <div class="">
          <h3 class="myAuthors"></h3>
          <h3>${book.genre}</h3>
          <p>${book.description}</p>
          </div>
          </div>
          </article>
          </div>
        `))
        })
        $.get(`${url}/author_book`).then(myauthorBooks)

        function myauthorBooks(authors) {
            authors.forEach(function(author) {
                $(`[data-id="${author.book_id}"] .myAuthors`).append(`<span>${author.f_name} ${author.l_name}</span>`)
            })
        }
    }

    var myNewBook = {}
    $('.addBook').on('click', function(event) {
            event.preventDefault()
            myNewBook.title = $('.newTitle').val()
            myNewBook.genre = $('.newGenre').val()
            myNewBook.coverUrl = $('.newURL').val()
            myNewBook.description = $('.newDescription').val()

            $.ajax({
                    url: `${url}/book`,
                    method: 'POST',
                    crossDomain: true,
                    data: JSON.stringify(myNewBook),
                    contentType: "application/json; charset=utf-8"
                })
                .then(response => {

                    var whoWroteIt = {}
                    var answer = $('.authorList').val()
                    console.log(answer);
                    answer.forEach(function(author){
                      whoWroteIt.author_id = author
                      whoWroteIt.book_id = response[0]
                    $.ajax({
                            url: `${url}/author_book`,
                            method: 'POST',
                            crossDomain: true,
                            data: JSON.stringify(whoWroteIt),
                            contentType: "application/json; charset=utf-8"
                        })
                        .then(response => {

                            console.log(response);


                        })
                        .catch(err => {
                            console.log(err);
                        })

                      })
            console.log(response[0]);

            
        })
        .catch(err => {
            console.log(err);
        })
})



$('body').on('click', '.editBtn', function() {
    var editBook = $(this).closest('.container').data('id')
    window.location = "/editBook.html?id=" + editBook
})

$('body').on('click', '.showMe', function() {
    var thisONe = $(this).closest('.container').data('id')
    window.location = "/singleBook.html?id=" + thisONe
})


$('body').on('click', '.deleteBookBtn', function() {
var deleteThisONe = $(this).closest('.container').data('id')
window.location = "/deleteBook.html?id=" + deleteThisONe
})



})
