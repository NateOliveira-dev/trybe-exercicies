// 1 - Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.
// Dica: use spread operator

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

// 2 - Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
// Dica: use parâmetro rest.

sum = (...args) => {
    return args.reduce((acc, param) => acc + param, 0);
};
// console.log(sum(4,5,6));