//caneta cib

class Caneta
{
    // atributos -> adjetivos
    cor;
    quantTinta = 100;

    constructor(cor = "Azul")
    {
        this.cor = cor;
    }
    
    // metodo -> função -> ação -> verbo
    escrever(palavra)
    {
        if(this.quantTinta > 0)
        {
            console.log("Escreveu: " + palavra);
        this.quantTinta = this.quantTinta - palavra.length;
        } else
        {
            console.log("Acabou a tinta");
        }
    }
}

// herança
class CanetaQuadro extends Caneta
{
    // sobreescrita
    quantTinta = 1000;
}

class CanetaLaser extends Caneta
{
    laserLigado = false;
}

// instância
let cib1 = new Caneta("Verde");
let cib2 = new Caneta("Preto");
let cib3 = new Caneta();

let caneta1 = new CanetaQuadro();
let caneta2 = new CanetaLaser();

console.log(caneta1);
console.log(caneta2);

// cib1.cor = "Preto"

cib1.escrever("Oi turma! Boa noite");

console.log(cib1);
console.log(cib2);
console.log(cib3);

if (cib1 == cib2)
{
    console.log("true");
} else
{
    console.log("false");
}