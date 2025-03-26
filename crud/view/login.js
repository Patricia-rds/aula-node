$(document).ready(function() {

    $(".bt-logar").click(() =>  {

        let dados = {
            usuario: $("#usuario").val(),
            senha: $("#senha").val()
        }

        $.post("http://localhost:3000/login", dados, function(retorno){

            if(retorno != "false"){
                
                let valor = JSON.stringify(retorno);
                sessionStorage.setItem("logado", valor);
                location.assign("/");
            } else
            {
                $("#msg-erro").removeClass("d-none");
            }
        });

    }); // fim do bt-logar

});