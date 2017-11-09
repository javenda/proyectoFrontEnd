
$(document).ready(function () {
    var root = "https://swapi.co/api/people/";
    cargarPersonajes(root);
    var l=0;
    
    function cargarPersonajes(url) {
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (data) {
            console.log(data);
            var content = '';
            var name = '';
            var indice = '';
            var species = ''; 
            
    
            for (var i = 0; i < data.results.length; i++) {
                console.log(l)
                l=l
                l =l+1
                content += '<div id=personaje class="card col-lg-5 col-md-5 col-sm-12  rounded mx-auto d-block">';
                content += '<img src="images/personajes/'+l+'.jpg" alt="Card image" height="500" class="rounded mx-auto d-block" >';
                content += '<br>'
                content += '<h3> <strong>' + data.results[i].name +'</strong></h3>';
                content += '<h5> <strong> Especie / Clasificación </strong></h5>' ;
                content += '<h5>' + nombreEspecie(data.results[i].species) + '</h5>';
                content += '<h5>' + nombrePlaneta(data.results[i].homeworld) + '</h5>';
                content += '<h5> <strong>Peliculas: </strong> </h5>'
                for (var j=0; j< data.results[i].films.length; j++){ 
                    content += 
                    '<p>' +nombrePelicula(data.results[i].films[j])} +'</p>';
                content += '<h5>' +nombreIdioma(data.results[i].especies) + '</h5>';
                content += '<p class="card-text" id=name> </p>';
                content += '</div>';
            }

            console.log(content)
            $("#contenido").html(content);

            $("#prev").on('click', function (e) {
                e.preventDefault();
                if (data.previous != null) {
                    console.log(l);
                    return  l=l-20 ,cargarPersonajes(data.previous), console.log(l);
                    
                }
            });
            $("#next").on('click', function (e) {
                e.preventDefault();
                if (data.next != null) {
                    cargarPersonajes(data.next);
                }
            });
        });
    }

    function nombreEspecie(url) {
        var clasification=""
        var name=""
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function (data){
                name= data.name
                clasification= data.classification
                total = '<h5>' +name + " / "+ clasification + '</h5>'
                
            },
        
        });
        return total
        }

        function nombrePlaneta(url) {
            var name = ""
            $.ajax({
                url: url,
                method: 'GET',
                async: false,
                success: function (data) {
                    name = '<h5><strong> Planeta: </strong>' + data.name + '</h5>'
                },
            });
            return name
        }

        function nombrePelicula(url) {
            var title = ""
            var episode = ""
            var total1=""
            $.ajax({
                url: url,
                method: 'GET',
                async: false,
                success: function (data) {
                    title = data.title
                    episode = data.episode_id
                    total1 = '<li> Episodio' + episode + " : " + title +  '</li>'
                },
            });
            return total1
        }

        function nombreIdioma(url) {
            var idioma = ""
            $.ajax({
                url: url,
                method: 'GET',
                async: false,
                success: function (data) {
                    idioma = data.language
                },
            });
            return idioma
        }
});

    /*
    $.ajax({
        url: '',
        method: '',
    }).then(function(data){


    });
    */


