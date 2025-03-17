console.log("Digite o valor de saque (entre 10 e 600):");

process.stdin.on("data", function(saque) {
    
    let cem = 0;
    let cinq = 0;
    let dez = 0;
    let cinco = 0;
    let um = 0;

    let resto = 0;

    let valor = saque.toString().trim();

    cem = parseInt(valor / 100);
    resto = valor % 100;

    if (resto > 0)
    {
        valor = resto

        cinq = parseInt(valor / 50)
        resto = valor % 50

        valor = resto

        dez = parseInt(valor / 10)
        resto = valor % 10

        valor = resto

        cinco = parseInt(valor / 5)
        resto = valor % 5

        valor = resto

        um = parseInt(valor / 1)
    }

    console.log("notas de cem: " + cem);
    console.log("notas de cinquenta: " + cinq);
    console.log("notas de dez: " + dez);
    console.log("notas de cinco: " + cinco);
    console.log("notas de um: " + um)
});