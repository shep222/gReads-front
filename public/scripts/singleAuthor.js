$(document).ready(function() {
    const url = "https://my-g-read.herokuapp.com"
    $.get(`${url}/author/` + location.search.slice(4)).then(myAuthor)

    function myAuthor(author) {
        $('.singleAuthor').append($(`<div class="container">
      <article class="row">
          <div class="col-md-3">
              <img class="authorImg" src="${author[0].photoUrl}">
          </div>
          <div class="col-md-8">
              <div class="authorTitle">
                  <h1 class="mainTitle">${author[0].f_name} ${author[0].l_name}</h1>
                  <div class="myButtons">
                      <button class="myBtn btn btn-primary" type="button" name="button">Edit</button>
                      <button class="myBtn btn btn-primary" type="button" name="button">Remove</button>
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





})
