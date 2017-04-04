$(document).ready(function() {
    const url = "https://my-g-read.herokuapp.com"
    $.get(`${url}/author`).then(myAuthors)

    function myAuthors(authors) {
        authors.forEach(function(author) {
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
          <button class="deleteAuthorBtn myBtn btn btn-primary" type="button" name="button">Remove</button>
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

    var myNewAuthor = {}
    $('.addAuthor').on('click', function(event) {
        event.preventDefault()
        myNewAuthor.f_name = $('.newFirstName').val()
        myNewAuthor.l_name = $('.newLastName').val()
        myNewAuthor.photoUrl = $('.newAuthorImgURL').val()
        myNewAuthor.bio = $('.newBio').val()

        $.ajax({
                url: `${url}/author`,
                method: 'POST',
                crossDomain: true,
                data: JSON.stringify(myNewAuthor),
                contentType: "application/json; charset=utf-8"
            })
            .then(response => {
                console.log(response);
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            })
    })


    $('body').on('click', '.editAuthBtn', function() {
        var editAuthor = $(this).closest('.container').data('id')
        console.log(editAuthor);
        window.location = "/editAuthor.html?id=" + editAuthor
    })

    $('body').on('click', '.showMeAuthor', function() {
        var thisAuthor = $(this).closest('.container').data('id')
        console.log(thisAuthor);
        window.location = "/singleAuthors.html?id=" + thisAuthor
    })


    $('body').on('click', '.deleteAuthorBtn', function() {
        var deleteThisONe = $(this).closest('.container').data('id')
        window.location = "/deleteAuthor.html?id=" + deleteThisONe
    })







})
