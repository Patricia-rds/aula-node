// criar um arquivo

//modulo node
const fs = require("fs");

//modulo interno
const soma = require("./funcao");

console.log(soma);

let conteudo = "arquivo criado pelo nodejs.\n";
let options = {flag: "a"};

/*fs.writeFile("texto.txt", conteudo, options, function(erro){
    console.log(erro);
    console.log("gravou");
})

fs.readFile("texto.txt", "utf8", function(erro, dados){
    console.log(erro);
    console.log(dados);
});*/

process.stdin.on('data', function(dados){
    console.log(dados.toString());
    process.exit();
});