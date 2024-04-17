//5.10.2
let promoCode = prompt("Введите промокод:");

promoCode = promoCode.toLowerCase();

if (promoCode === "скидка") {
    alert("Промокод применён");
} else {
    alert("Промокод не работает");
}