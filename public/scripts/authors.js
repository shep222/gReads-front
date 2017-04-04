$(document).ready(function() {
const url = "https://my-g-read.herokuapp.com"
  $.get(`${url}/author`).then(myAuthors)

  function myAuthors(authors) {
    authors.forEach( function (author){
      console.log(author);
      $('.allAuthors').append($(`<div class="container">
          <article class="row">
              <div class="col-md-3">
                  <img class="authorImg" src="${author.photoUrl}">
              </div>
              <div class="col-md-8">
                  <div class="authorTitle">
                      <h1 class="mainTitle">${author.f_name} ${author.l_name}</h1>
                      <div class="myButtons">
                          <button class="myBtn btn btn-primary" type="button" name="button">Edit</button>
                          <button class="myBtn btn btn-primary" type="button" name="button">Remove</button>
                      </div>
                  </div>
                  <div class="">
                      <p>${author.bio}</p>
                  </div>
              </div>
          </article>
      </div>
        `))
    })
  }











})
