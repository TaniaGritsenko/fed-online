// Завдання 1.
console.log("1. Визначення типу геометричної фігури за допомогою switch:");
let figure = prompt('Введіть назву фігури:Коло,квадрат,трикутник');
switch (figure) {
    case 'коло':
        console.log('Коло має 0 сторін');
        break;
    case 'квадрат':
        console.log('Квадрат має 4 сторони');
        break;
    case 'трикутник':
        console.log('Трикутник має 3 сторони');
        break;
    default:
        console.log('Невідома геометрична фігура');
        break;
}
// Завдання 2.
console.log("2. Підрахунок суми парних чисел від 1 до 20:");
let sum = 0;
let num = 1;
while(num<=20){
    if (num % 2 === 0){
     sum += num;
    }
    num++;  
}      
    console.log(sum);
// Завдання 3.
console.log("3. Таблиця множення");
let number = 5;
for (let i = 1; i <= 10; i++){
    console.log(number + " * " + i + " = " +(number * i));
}
// Завдання 4.
console.log("4.Зворотний лічильник:");
for (let i = 10; i >= 1; i--){
    console.log(i);
}
// Завдання 5.
console.log("5. Визначення чи є число парним чи непарним:");
let numberCheck = Number(prompt("Введіть число:"));
for (let i = 1; i <= 1; i++){
    if (numberCheck % 2 === 0){
        console.log("Число є парним:" + numberCheck);
    }
    else{
        console.log("Число є не парним:" + numberCheck);
    }
}
// Завдання 6.
console.log("6. Знаходження першого числа:");
for (let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        console.log("Перше парне число:" + i);
        break;
    }
}
//Завдання 7.
console.log("7. Виведення парних чисел:");
for (let i = 1; i <= 10; i++){
    if (i % 2 !== 0){
        continue;
    }   
        console.log(i);
    }

   