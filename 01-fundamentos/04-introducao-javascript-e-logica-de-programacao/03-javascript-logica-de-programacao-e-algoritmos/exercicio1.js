// //O fatorial é representado pelo sinal !
// //! = 4 x 3 x 2 x 1 = 24//
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (let i = 10; i >= 1; i -= 1) {
    fatorial *= i;
}

console.log(fatorial);