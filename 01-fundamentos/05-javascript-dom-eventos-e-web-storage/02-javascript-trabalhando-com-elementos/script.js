function adicionaCor() {
    let pai = document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "blue";

}
adicionaCor();

function adicionaTexto() {
    document.getElementById('primeiroFilhoDoFilho').innerText = 'Estou escrevendo aqui'
}
adicionaTexto();

function acessaElementoPrimeiroFilho(element) {
    console.log(document.getElementById(element).firstChild);
}
acessaElementoPrimeiroFilho('pai');
acessaElementoPrimeiroFilho('elementoOndeVoceEsta');

function acessaOTexto(element) {
    console.log(document.getElementById(element).nextSibling);
}
acessaOTexto('elementoOndeVoceEsta');

function acessaTerceiroFilho(element) {
    console.log(document.getElementById(element).nextElementSibling);
}
acessaTerceiroFilho('elementoOndeVoceEsta');

function acessaTerceiroDoPai(element) {
    console.log(document.getElementById(element).children[2]);
}
acessaTerceiroDoPai('pai');

//criando html dinamico//
let pai = document.getElementById('pai');
let irmao = document.createElement('section');
irmao.id='irmao-elemento-onde-vc-esta';
pai.appendChild(irmao);
console.log(document.getElementById('pai').children);

//=========================================================//

let filho = document.getElementById('elementoOndeVoceEsta');
let seiLa = document.createElement('p');
seiLa.id='tmb-sei-la';
filho.appendChild(seiLa);
console.log(seiLa);

//==================================================================//

let filhoOndeEstou = document.getElementById('elementoOndeVoceEsta');
let filhinho = document.createElement('div');
filhinho.id='div-filhinho';
filhoOndeEstou.appendChild(filhinho);
console.log(filhinho);

//====================================================================//

let filhoDePrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhote = document.createElement('div');
filhote.id='div-filhote';
filhoDePrimeiroFilhoDoFilho.appendChild(filhote);
console.log(filhote)

//=================================================================================//

console.log(document.getElementById('div-filhote').parentElement.parentElement.nextElementSibling)
// PASSO 1: Capturar o elemento que será pai.


// PASSO 2: Criar o elemento filho. A forma mais comum é com o document.createElement('tag').


// PASSO 3: Adicionando características e/ou conteúdo ao novo elemento. Pode ser texto, classes ou ids estilizadas no CSS, entre outros.


// PASSO 4: Hora de relacionar pai (passo 1) e filho (passo 2).