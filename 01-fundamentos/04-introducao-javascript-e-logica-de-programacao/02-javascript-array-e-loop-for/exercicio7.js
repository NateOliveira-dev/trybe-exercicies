let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 1];

let menorNumero = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i];
    }
}
console.log(menorNumero);