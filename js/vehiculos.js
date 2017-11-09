$(document).ready(function () {
    var root = "https://swapi.co/api/vehicles/";
    cargarVehiculos(root);
    var l=0
    
    function cargarVehiculos(url) {
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (data) {
            console.log(data);
            var contentve = '';
            
            for (var i = 0; i < data.results.length; i++) {
                contentve += '<div id="vehiculos" class="card col-md-5 col-sm-12 col-5 col-lg-5 rounded mx-auto d-block">';
                contentve += '<h3> <strong>' + data.results[i].name +'</strong></h3>';
                contentve += '<br>';
                contentve += '<h5> <strong> Modelo: </strong>'+data.results[i].model +'</h5>' ;
                contentve += '<h5> <strong> Longitud: </strong>'+data.results[i].length+ '</h5>' ;
                contentve += '<h5> <strong> Tripulación: </strong>'+data.results[i].crew+ '</h5>' ;
                contentve += '<h5> <strong> Pasajeros: </strong>'+data.results[i].passengers +'</h5>' ;
                contentve += '<h5> <strong> Clase de Vehículo: </strong>'+data.results[i].vehicle_class +'</h5>' ;
                contentve += '<p class="card-text" id=name> </p>';
                contentve += '</div>';
                
            }

            console.log(contentve)
            $("#contenido").html(contentve);

            $("#prev").on('click', function (e) {
                e.preventDefault();
                if (data.previous != null) {
                    cargarVehiculos(data.previous);
                }
            });
            $("#next").on('click', function (e) {
                e.preventDefault();
                if (data.next != null) {
                    cargarVehiculos(data.next);
                }
            });
        });
    }
});
