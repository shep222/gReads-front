$(document).ready(function() {
    const url = "https://my-g-read.herokuapp.com"
    $.get(`${url}/author/` + location.search.slice(4)).then(myAuthor)

    function myAuthor(author) {
        $('.singleAuthor').append($(`<div class="container" data-id=${author[0].id}>
      <article class="row">
          <div class="col-md-3">
              <img class="authorImg" src="${author[0].photoUrl}">
          </div>
          <div class="col-md-8">
              <div class="authorTitle">
                  <h1 class="mainTitle">${author[0].f_name} ${author[0].l_name}</h1>
                  <div class="myButtons">
                      <button class="editAuthBtn myBtn btn btn-primary" type="button" name="button">Edit</button>
                      <button class="deleteAuthorBtn myBtn btn btn-primary" type="button" name="button">Remove</button>
                  </div>
              </div>
              <div class="">
                  <p>${author[0].bio}</p>
              </div>
          </div>
      </article>
  </div>
    `))
    }

    $('body').on('click', '.editAuthBtn', function() {
        var editAuthor = $(this).closest('.container').data('id')
        console.log(editAuthor);
        window.location = "/editAuthor.html?id=" + editAuthor
    })

    $('body').on('click', '.deleteAuthorBtn', function() {
        var deleteThisONe = $(this).closest('.container').data('id')
        window.location = "/deleteAuthor.html?id=" + deleteThisONe
    })


})
