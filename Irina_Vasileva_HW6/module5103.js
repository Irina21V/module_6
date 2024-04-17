//5.10.3
let userName = prompt("Введите ваше имя:");

let birthYearString = prompt("Введите ваш год рождения:");

let birthYear = + birthYearString;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

alert(`${userName}: ${age}`);