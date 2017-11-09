$(document).ready(function () {
    var root = "https://swapi.co/api/vehicles/";
    cargarCruceros(root);
    
    function cargarCruceros(url) {
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (data) {
            console.log(data);
            var contentcru = '';
            
            for (var i = 0; i < data.results.length; i++) {
                contentcru += '<div id="cruceros" class="card col-md-5 col-sm-12 col-5 col-lg-5 rounded mx-auto d-block">';
                contentcru += '<h3> <strong>' + data.results[i].name +'</strong></h3>';
                contentcru += '<br>';
                contentcru += '<h5> <strong> Modelo: </strong>'+data.results[i].model +'</h5>' ;
                contentcru += '<h5> <strong> Fabricante: </strong>'+data.results[i].manufacturer+ '</h5>' ;
                contentcru += '<h5> <strong> Tripulación: </strong>'+data.results[i].crew+ '</h5>' ;
                contentcru += '<h5> <strong> Pasajeros: </strong>'+data.results[i].passengers +'</h5>' ;
                contentcru += '<p class="card-text" id=name> </p>';
                contentcru += '</div>';
            }

            console.log(contentcru)
            $("#contenido").html(contentcru);

            $("#prev").on('click', function (e) {
                e.preventDefault();
                if (data.previous != null) {
                    cargarCruceros(data.previous);
                }
            });
            $("#next").on('click', function (e) {
                e.preventDefault();
                if (data.next != null) {
                    cargarCruceros(data.next);
                }
            });
        });
    }
});
