// expressões indiomaticas

let vetor = ["a", "b", "c"];

vetor.forEach( (item) => console.log(item));

let acordado = null;
let deitado = false;

if (deitado == true)
{
    acordado = false;
} else
{
    acordado = true;
}

// if ternario
acordado = (deitado == true)? false : true;

// Destructuring
let cidades = ["Curitiba", "Colombo", "Pinhais"];
let a = cidades[0];

let [b, c, ...resto] = cidades;
console.log(a. b, c, resto);

// mesclando array
let novo = [...cidades, ...vetor];
console.log(novo);

export let pessoa = {
    nome: "Maria",
    idade: 23,
    peso: 45.3
}

let maria = pessoa.nome;

let {nome, idade} = pessoa;

console.log(nome, idade);

nome = "João";

console.log(pessoa, nome);

