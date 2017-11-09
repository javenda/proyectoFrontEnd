$(document).ready(function () {
    var root = "https://swapi.co/api/films/";
    cargarIndex(root);
  
    
    function cargarIndex(url) {
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (data) {
            console.log(data);
            var contenti = '';
            
    
            for (var i = 0; i < data.results.length; i++) {
                contenti += '<div class="card col-md-5 col-sm-12 col-5 col-lg-5 rounded mx-auto d-block">';
                contenti += '<img src="images/episodios/'+i+'.jpg" alt="Card image" height="500" class="rounded mx-auto d-block" >';
                contenti += '<br>'
                contenti += '<h3> <strong> Episodio '+data.results[i].episode_id+' : ' + data.results[i].title + '</strong></h3>';

                contenti += '<p>' + data.results[i].opening_crawl + '</p>';
                contenti += '<h6><strong> Fecha de estreno: </strong>'+ data.results[i].release_date + '</h6>';
                contenti += '<h6><strong> Director: </strong>' + data.results[i].director +'</h6>';
                contenti += '<h6><strong> Productor: </strong>' + data.results[i].producer +'</h6>';
                contenti += '<p class="card-text" id=name> </p>';
                contenti += '</div>';
            }

            console.log(contenti)
            $("#contenido").html(contenti);


        });
    }



});


    