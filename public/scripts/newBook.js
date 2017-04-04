$(document).ready(function() {

    const url = "https://my-g-read.herokuapp.com"
    $.get(`${url}/author`).then(myAuthors)

    function myAuthors(authors) {
        authors.forEach(function(author) {
          $('.authorList').append($(`
            <option value="${author.id}">${author.f_name} ${author.l_name}</option>
            `))
          
        })
    }

})
