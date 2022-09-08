array = [2, 3, -4, 6, 7, 10, -10, 1, 500, 0];

function retornaPosicao(numeros) {
    let menorNumero = 0;
    for (let key in numeros) {
        if (numeros[menorNumero] > numeros[key]) {
            menorNumero = key
        }
    }
    return menorNumero
}

console.log(retornaPosicao(array));