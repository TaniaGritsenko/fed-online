// 1. Логічні оператори  порівняння та alert.
let number1 = Number(prompt("Введіть перше число"));
let number2 = Number(prompt("Введіть друге число"));
if (number1 == number2){
alert("Числа рівні");
}
else{
alert("Числа не рівні");
}

//2. Метод вводу інформації та логічні порівняння.
let enteredNumber = Number(prompt("Введіть будь-яке число"));
if (enteredNumber % 2 == 0){
    console.log("Число парне");
}
else{
    console.log("Число непарне");
}

//3. Логічні порівняння та введення-виведення.
let age = Number(prompt("Введіть ваш вік"));
alert(age < 18 ? "Доступ заборонено менше 18 років" : "Доступ дозволено 18+");

//4. Розрахунок вартості товару та console.log.
let price = prompt("Введіть ціну товару");
let quantity = prompt("Введіть кількість товару");
price = Number(price);
quantity = Number(quantity);
let totalCost = price * quantity;
console.log("Загальна вартість товару: "  + totalCost);

//5. Розрахунок знижки на товар та alert.
let productPrice = prompt("Вартість без знижки:");
productPrice = Number(productPrice);
let discount = productPrice * 0.50;
let finalPrice = productPrice - discount;
alert("Вартість без знижки: " + productPrice + "\nЗнижка 50%: -" + discount + "\nВсього зі знижкою до сплати: " + finalPrice + "\nСпосіб оплати: готівка або карта");


