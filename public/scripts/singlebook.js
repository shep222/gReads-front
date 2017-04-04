$(document).ready(function() {
const url = "https://my-g-read.herokuapp.com"
  $.get(`${url}/book/`+location.search.slice(4)).then(myBook)

  function myBook (book) {

  $('.myBook').append($(`<div class="container">
      <article class="row">
          <div class="col-md-3">
              <img class="booksImg" src="${book[0].coverUrl}">
          </div>
          <div class="col-md-8">
              <div class="bookTitle">
                  <h1 class="mainTitle">${book[0].title}</h1>
                  <div class="myButtons">
                      <button class="myBtn btn btn-primary" type="button" name="button">Edit</button>
                      <button class="myBtn btn btn-primary" type="button" name="button">Remove</button>
                  </div>
              </div>
              <div class="">
                  <h3>Author Info</h3>
                  <h3>${book[0].genre}</h3>
                  <p>${book[0].description}</p>
              </div>
          </div>
      </article>
  </div>
    `))
  }










})
