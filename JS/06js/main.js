//1. Калькулятор.
console.log("1.Калькулятор");
function sumTwoNumbers(a,b){
    return a+b;
}
function minusTwoNumbers(a,b){
    return a-b;
}
function divisionTwoNumbers(a,b){
    if (b === 0){
        return "На нуль ділити не можна"
    }
    return a/b;
}
function multiplicationTwoNumbers(a,b){
    return a*b;
}   
let operator = prompt("Введіть знак операції: +, -, /, *");
let num1 = Number(prompt("Введіть перше число"));
let num2 = Number(prompt("Введіть друге число"));
let result;
switch (operator){
    case "+":
        result = sumTwoNumbers(num1, num2);
        break;

    case "-":
        result = minusTwoNumbers(num1, num2);
        break;

    case "/":
        result = divisionTwoNumbers(num1, num2);
        break;

    case "*":
        result = multiplicationTwoNumbers(num1, num2);
        break;
     default:
        console.log("Невірна операція");
}
console.log(`Результат: ${num1} ${operator} ${num2} = ${result}`);
//2. Параметри та колбеки
console.log("2.Параметри та колбеки");
let users = ["Таня", "Злата", "Юля"];
function hiUser(user){
    console.log(`Вітаю ${user}`);
}
function wellcomUser(users, callback){
    for (let i = 0; i < users.length; i++){
        callback(users[i]);
    }
}
wellcomUser(users, hiUser);
//3. Стрілкові функції.
console.log("3.Стрілкові функції.")
let hiUser2 = (user) =>{
    console.log(`Вітаю ${user}`);
}
wellcomUser(users, hiUser2);

//4. Параметри за замовчуванням.
console.log("4. Параметри за замовчуванням.");
function userName(name = "Таня"){
    console.log(name);
}
userName();

//5. Задача з колбеком.
console.log("5.Задача з колбеком.");
function sendString(text, callback){
  callback(text);
}
function showText(str){
   console.log(str);
}
sendString("Привіт", showText);

//6. Перепишіть стрілкову функцію в звичайну.
console.log("6. Перепишіть стрілкову функцію в звичайну.");
function multiplyValues(a, b, c) {
  return  a * b * c;
}
console.log(multiplyValues(1, 2, 3));
