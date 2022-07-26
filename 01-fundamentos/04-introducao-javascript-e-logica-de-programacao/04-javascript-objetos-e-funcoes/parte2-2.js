array = [2, 3, 6, 7, 10, 1, 500];

function retornaPosicao(arr) {
    let maiorValor = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > maiorValor) {
            maiorValor = i;
        }
    } 
    return maiorValor
}

console.log(retornaPosicao(array)); 