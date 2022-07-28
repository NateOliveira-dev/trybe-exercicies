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

let filho = document.getElementById('elementoOndeVoceEsta')
let seiLa = document.createElement('p')
seiLa.id='tmb-sei-la'
filho.appendChild(seiLa);
console.log(seiLa);