function adicionaCor() {
    let pai = document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "blue";
    //console.log(pai);
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

//function acessarElemento

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