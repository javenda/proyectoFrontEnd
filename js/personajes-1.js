$(document).ready(function(){

    var root="hhtps://swapi.co/api/people/";


    function cargarPersonajes(url){

        $.ajax({
            url: url,
            method:'GET',
            success: function(data){
                console.log(data);
                $('#listado-personajes').empty();
                var listado = document.getElementById('listado-personajes');
                for (var i =0; i<data.results.length; i++){
                    var texto = document.createTextNode(data.results[i],name);
                    var elemLI = document.createElement("LI");
                    elemLI.appendChild(texto);
                    listado.appendChild(elemLI); 
                }
                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previus!=null){
                        cargarPersonajes(data.previus);
                    }

                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    if(data.next!=null){
                        cargarPersonajes(data.next);
                    }
                });
                
        },
        error: function(e){
            console.log(e);
        },

        });

        }   
    });