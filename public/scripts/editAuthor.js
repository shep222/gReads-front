$(document).ready(function() {
    const url = "https://my-g-read.herokuapp.com"
    $.get(`${url}/author/` + location.search.slice(4)).then(editAuthor)


    function editAuthor(author) {
        $('.editFirstName').val(author[0].f_name)
        $('.editLastName').val(author[0].l_name)
        $('.editAuthorImgURL').val(author[0].photoUrl)
        $('.editBio').val(author[0].bio)
    }

    var editedAuthor = {}
    $('.editAuthor').on('click', function(event) {
        event.preventDefault()
        editedAuthor.f_name = $('.editFirstName').val()
        editedAuthor.l_name = $('.editLastName').val()
        editedAuthor.photoUrl = $('.editAuthorImgURL').val()
        editedAuthor.bio = $('.editBio').val()
        $.ajax({
                url: `${url}/author/` + location.search.slice(4),
                method: 'PUT',
                crossDomain: true,
                data: JSON.stringify(editedAuthor),
                contentType: "application/json; charset=utf-8"
            })
            .then(response => {
                console.log(response);
                window.location = "/authors.html"
            })
            .catch(err => {
                console.log(err);
            })
    })
})
