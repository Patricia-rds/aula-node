let usuario = sessionStorage.getItem("logado");

if (!usuario)
{
    location.assign("/login.html");
}

$(document).ready(function(){

    function listarClientes(coluna, ord) {

        let dados = {
            coluna,
            ord
        }

        $.getJSON("http://localhost:3000/clientes", dados, function(dados){
            $("#lista").empty();

            dados.forEach((item) => {

                let html = '<tr>'
                    + '<td>'+ item.id +'</td>'
                    + '<td>'+ item.nome +'</td>'
                    + '<td>'+ item.email +'</td>'
                    + '<td>'+ item.cidade +'</td>'
                    + '<td>'+ item.idade +'</td>'
                    + '<td>'+ item.telefone +'</td>'
                    + '<td><button codigo="'+ item.id +'" class="bt-del btn btn-danger">'
                    + '<i class="bi bi-x-circle-fill"></i>'
                    + '</button></td>'
                    + '</tr>'

                $("#lista").append(html);

            });
        }); // fim getJSON
    };

    listarClientes()

    $("#bt-salvar").click(() => {

        let nome = $("#nome").val();
        let email = $("#email").val();
        let cidade = $("#cidade").val();
        let idade = $("#idade").val();
        let telefone = $("#telefone").val();
        let temErro = false;

        $("input").removeClass('is-invalid');

        if (nome.trim() == '')
        {
            $("#nome").addClass('is-invalid');
            temErro = true;
        }
    
        if (email.trim() == '')
        {
            $("#email").addClass('is-invalid');
            temErro = true;
        }

        if (cidade.trim() == '')
            {
                $("#cidade").addClass('is-invalid');
                temErro = true;
            }
        
        if (idade.trim() == '')
            {
                $("#idade").addClass('is-invalid');
                temErro = true;
            }

        if (telefone.trim() == '')
            {
                $("#telefone").addClass('is-invalid');
                temErro = true;
            }

        if (temErro == false)
        {
            // envia pro servidor
            let dados = {
                nome,
                email,
                cidade,
                idade,
                telefone
            }

            $.post("http://localhost:3000/clientes/novo", dados, (retorno) => {
                console.log(retorno);

                if (retorno == true)
                {
                    $("#form-cadastro").modal("hide");
                    
                    let html = '<tr>'
                        + '<td></td>'
                        + '<td>'+ dados.nome +'</td>'
                        + '<td>'+ dados.email +'</td>'
                        + '<td>'+ dados.cidade +'</td>'
                        +'<td>'+ dados.idade +'</td>'
                        + '<td>'+ dados.telefone +'</td>'
                        + '</tr>'
                    
                    $("#lista").append(html);

                    $("#toast-add").toast("show");

                    $("input").val("");
                }
            }); // fim do post
        }
    }); // fim do click

    $(".ord").click(function(){

        let coluna = $(this).attr("coluna");
        let ord = $(this).attr("ord");

        ord = (ord == "ASC") ? "DESC" : "ASC";
        $(this).attr("ord", ord);

        $(".ord").removeClass("link-secondary");
        $(".ord").addClass("link-primary");

        $(this).removeClass("link-primary");
        $(this).addClass("link-secondary");

        listarClientes(coluna, ord);

    }); // fim do click link

    $("#lista").on('click', '.bt-del', function(){

        let dados = {
            id: $(this).attr("codigo")
        }

        $.post("http://localhost:3000/clientes/delete", dados, (retorno) => {
            if (retorno == true)
            { 
                listarClientes();
            }
        });

    }); // fim do bt-del

});