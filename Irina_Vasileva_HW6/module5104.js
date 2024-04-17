//5.10.4
let userName = prompt("Введите ваше имя:");

let birthYearString = prompt("Введите ваш год рождения:");

let birthYear = + birthYearString;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

let yearsRemain = age % 10;

let outputMessage;

if (yearsRemain === 1) {
    outputMessage = "_год";
} else if (yearsRemain >= 2 && yearsRemain <= 4) {
    outputMessage = "_года";
} else {
    outputMessage = "_лет";
}

alert(`${userName}: ${age} ${outputMessage}`);