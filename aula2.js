let aluno = "Pedro";

// estrutura de dados
// array -> vetores

let alunos = ["Pedro", "Ana", "João", 123];
alunos.push("Mario");
alunos[3] = "Maria";

let ini = 0;
let fim = alunos.length - 1;

while (ini <= fim)
{
    console.log(alunos[ini] );
    ini = ini + 1;
}


let inic = alunos.length - 1;
let fin = 0;

while (inic >= fin)
{
    console.log(alunos[inic] );

    inic = inic - 1;
}

// ordenação
console.log( "-- sort --" );

alunos.sort();

let fina = alunos.length - 1;

for (let ini = 0; ini <= fina; ini = ini + 1)
{
    console.log(alunos[ini] );
}

// forEach

console.log("-- foreach --");

