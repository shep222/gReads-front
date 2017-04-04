$(document).ready(function() {
const url = "https://my-g-read.herokuapp.com"
  $.get(`${url}/author`).then(myAuthors)

  function myAuthors(authors) {
    authors.forEach( function (author){
      console.log(author);
      $('.allAuthors').append($(`<div class="container" data-id=${author.id}>
          <article class="row">
          <div class="col-md-3">
          <img class="authorImg" src="${author.photoUrl}">
          </div>
          <div class="col-md-8">
          <div class="authorTitle">
          <a class="showMeAuthor"><h1 class="mainTitle">${author.f_name} ${author.l_name}</h1></a>
          <div class="myButtons">
          <button class="editAuthBtn myBtn btn btn-primary" type="button" name="button">Edit</button>
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


  $('body').on('click', '.editAuthBtn', function() {
         var editAuthor = $(this).closest('.container').data('id')
         console.log(editAuthor);
         window.location = "/editAuthor.html?id="+editAuthor
      })

      $('body').on('click', '.showMeAuthor', function() {
            var thisAuthor = $(this).closest('.container').data('id')
            console.log(thisAuthor);
            window.location = "/singleAuthors.html?id="+thisAuthor
          })










})
