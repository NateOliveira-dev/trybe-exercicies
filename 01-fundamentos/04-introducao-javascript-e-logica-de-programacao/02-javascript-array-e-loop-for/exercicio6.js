//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 11];
let numbers = [2, 6, 44, 22, 78]

let count = 0;


for (let i = 0; i < numbers.length; i += 1) {
    isEven = numbers[i] % 2;
    if (isEven !== 0) {
        count += 1;
    }
}

if (count === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log('valores ímpares '+ count);
}
