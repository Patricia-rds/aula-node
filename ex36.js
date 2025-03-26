console.log("Digite uma data no formato: dd/mm/aaaa");

process.stdin.on("data", function(valor){

    let data = valor.toString().trim();
    let dia = data.slice(0,1);

    if (data.length != 10)
    {
        console.log("A data esta em um formato inválido");
    }

    if (data.charAt(2) != "/" || data.charAt(5) != "/")
    {
        console.log("A data esta em um formato inválido");
    }

    if (dia > 31)
    {
        console.log("O dia é inválido");
    }

    console.log("Digite uma data no formato: dd/mm/aaaa");
});