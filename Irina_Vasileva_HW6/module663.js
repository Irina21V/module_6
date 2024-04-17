//6.6.3
let anyNumber = prompt("Введите любое число:");

let number = +anyNumber;

let numbersArray = [];
    for (let i = 0; i <= number; i++) {
        numbersArray.push(i);
    }
console.log(numbersArray);