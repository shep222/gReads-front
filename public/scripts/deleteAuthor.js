$(document).ready(function() {
const url = "https://my-g-read.herokuapp.com"
  $.get(`${url}/author/`+location.search.slice(4)).then(myAuthor)

  function myAuthor (author) {
    console.log(author[0]);
  $('.deleteAuthor').append($(`<div class="container" data-id=${author[0].id}>
      <article class="row">
          <div class="col-md-3">
              <img class="authorImg" src="${author[0].photoUrl}">
          </div>
          <div class="col-md-8">
              <div class="bookTitle">
                  <h1 class="mainTitle">${author[0].f_name} ${author[0].l_name} </h1>

              </div>
              <div class="">
                  <p>${author[0].bio}</p>
              </div>
          </div>
      </article>
      <button class="deleteAuthorComplete btn btn-primary" type="button" name="button">Delete ${author[0].f_name} ${author[0].l_name}</button>
  </div>
    `))
  }

  $('body').on('click', '.deleteAuthorComplete', function() {
          var deletedAuthor = $(this).closest('.container').data('id')
          $.ajax({
            url:`${url}/author/${deletedAuthor}`,
            method: 'DELETE',
            crossDomain: true,
            contentType: "application/json; charset=utf-8"
          })
          .then(response => {
              console.log(response);
              window.location = "/authors.html"
          })
          .catch(err => {
              console.log(err);
          })
      });
})
