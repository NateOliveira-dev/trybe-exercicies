let arr = [];

let count = 0;

for (let i = 0; i < 25; i += 1) {
    count += 1;
    arr.push(count);
}

let newArr = [];
let divisao = 0;

for (let j = 0; j < arr.length; j += 1) {
    divisao = arr[j] / 2;
    newArr.push(divisao)
}
console.log(newArr);