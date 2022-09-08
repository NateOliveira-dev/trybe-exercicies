let cavalo = 'movimento em l';
let torre = 'movimento para frente';
let bispo = 'movimento na diagonal';

let pecaAReceber = 'Torre'.toLowerCase();

if (pecaAReceber === 'cavalo') {
    console.log('movimento em l');
} else if (pecaAReceber === 'torre') {
    console.log('movimento para frente');
} else if (pecaAReceber === 'bispo') {
    console.log('movimento na diagonal');
} else {
    console.log('movimento inválido');
}