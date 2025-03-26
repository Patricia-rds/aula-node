let atleta = {
    nome: "Magda Luterno",
    notas: [9.4, 7.8, 6.5, 7.8, 9.3, 8.2, 9.7]
};

function calculoMedia(atleta) {
    const {nome, notas} = atleta;

    const melhorNota = Math.max(...notas);
    const piorNota = Math.min(...notas);
    const notasSeparadas = [];

    notas.forEach(nota => {
        if(nota !== melhorNota && nota !== piorNota)
        {
            notasSeparadas.push(nota);
        }
    });

    let soma = 0;
    notasSeparadas.forEach(nota => {
        soma += nota;
    });

    const media = soma / notasSeparadas.length;

    console.log("Atleta:", nome);
    console.log("Melhor nota:", melhorNota);
    console.log("Pior nota:", piorNota);
    console.log("Média:", media.toFixed(2));
}

calculoMedia(atleta);