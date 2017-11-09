$(document).ready(function () {
    var root = "https://swapi.co/api/planets/";
    cargarPlanetas(root);
    
    function cargarPlanetas(url) {
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (data) {
            console.log(data);
            var contentpla = '';
            var name = '';
            for (var i = 0; i < data.results.length; i++) {
                contentpla += '<div id="planetas" class="card col-md-5 col-sm-12 col-5 col-lg-5 rounded mx-auto d-block">';
                contentpla += '<h3> <strong>' + data.results[i].name +'</strong></h3>';
                contentpla += '<br>';
                contentpla += '<h5> <strong> Diametro: </strong>'+data.results[i].diameter +'</h5>' ;
                contentpla += '<h5> <strong> Clima: </strong>'+data.results[i].climate+ '</h5>' ;
                contentpla += '<h5> <strong> Terrenos: </strong>'+data.results[i].terrain+ '</h5>' ;
                contentpla += '<h5> <strong> Superficie de agua: </strong>'+data.results[i].surface_water +' %</h5>' ;
                contentpla += '<h5> <strong> Población: </strong>'+data.results[i].population +'</h5>' ;
                contentpla += '<p class="card-text" id=name> </p>';
                contentpla += '</div>';
                var q = parseFloat(data.results[i].diameter)
                console.log(q);
            }

            console.log(contentpla)
            $("#contenido").html(contentpla);

            $("#prev").on('click', function (e) {
                e.preventDefault();
                if (data.previous != null) {
                    cargarPlanetas(data.previous);
                }
            });
            $("#next").on('click', function (e) {
                e.preventDefault();
                if (data.next != null) {
                    cargarPlanetas(data.next);
                }
            });
        });
    }
});
