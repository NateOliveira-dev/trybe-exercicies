let nota1 = 78;
let nota2 = 84;
let nota3 = 36;
let nota4 = 98;

let resultado = (nota1 + nota2 + nota3 +nota4) / 4;

if (resultado >= 90 && resultado <= 100) {
    console.log('A');
} else if (resultado >= 80 && resultado <= 89) {
    console.log('B');
} else if (resultado >= 70 && resultado <= 79) {
    console.log('C');
} else if (resultado >= 60 && resultado <= 69) {
    console.log('D');
} else if (resultado >= 50 && resultado <= 59) {
    console.log('E');
} else if (resultado >= 1 && resultado <= 49) {
    console.log('F');
} else {
    console.log('erro');
};