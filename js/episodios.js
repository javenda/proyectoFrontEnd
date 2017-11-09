$(document).ready(function () {
    var root = "https://swapi.co/api/films/";
    cargarEpisodios1(root);

    function cargarEpisodios1(url) {
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (data) {
            console.log(data);
            var contentep = '';
            var name = '';
            var indice = '';
            var personajes = '';
    
            for (var i = 0; i < data.results.length; i++) {
                contentep += '<div id="episodios" class="card col-md-8 col-sm-12 col-8 col-lg-8 rounded mx-auto d-block">';
                contentep += '<img src="images/episodios/'+i+'.jpg" alt="Card image" height="500" class="rounded mx-auto d-block" >';
                contentep += '<br>'
                contentep += '<h3> <strong> Episodio '+data.results[i].episode_id+' : ' + data.results[i].title + '</strong></h3>';

                contentep += '<h4 id="crawl"><i> ' + data.results[i].opening_crawl + '</i></h4>';
                contentep += '<br>';
                contentep += '<h6><strong> Fecha de estreno: </strong>'+ data.results[i].release_date + '</h6>';
                contentep += '<h6><strong> Director: </strong>' + data.results[i].director +'</h6>';
                contentep += '<h6><strong> Productor: </strong>' + data.results[i].producer +'</h6>';
                contentep += '<h6><strong> Personajes: </strong> </h6>';
                
                for (var j=0; j< data.results[i].characters.length; j++){ 
                    contentep += 
                    '<p>' +nombrePersonaje(data.results[i].characters[j])} +'</p>';
                contentep += '<p class="card-text" id=name> </p>';
                contentep += '</div>';
            }

            console.log(contentep)
            $("#contenido").html(contentep);  
        });
    }

   
        function nombrePersonaje(url) {
            var personaje = ""
            $.ajax({
                url: url,
                method: 'GET',
                async: false,
                success: function (data) {
                    personaje = '<li>' + data.name+ '</li>'
                },
            });
            return personaje
        }


});


