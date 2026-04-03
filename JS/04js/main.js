//1. Порівняння трьох чисел.
let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let num3 = Number(prompt("Введіть третє число:"));
let maxNumber;
if (num1 >= num2 && num1 >= num3){
    maxNumber = num1;
} else if (num2 >= num1 && num2 >= num3){
    maxNumber = num2;
}    
 else{
    maxNumber = num3;
}
console.log("Введені числа: " + num1 + ", " + num2 + ", " + num3);
console.log("Найбільше число: " + maxNumber);

//2. Визначення сезону.
let month = Number(prompt("Введіть номер місяця і побачите до якого сезону він відноситься:"));
let season;
if (month === 12 || month === 1 || month === 2){
    season = "Зима";
}
else if (month >= 3 && month <= 5){
    season = "Весна";
}
else if (month >= 6 && month <= 8){
    season = "Літо";
}    
else if (month >= 9 && month <= 11){
    season = "Осінь";
}
else{
    season = "Невірний номер місяця!";
}
console.log("Місяць: " + month);
console.log("Сезон: " + season);

//3. Визначення розміру числа.
let number = Number(prompt("Введіть число:"));
let result ;
if (number > 0){
    result = "Число є додатнім";
}
else if (number < 0){
    result = "Число є від'ємним";
}
else{
    result = "Число дорівнює нулю";
}
console.log("Введене число: " + number);
console.log(result);

//4. Перевірка величини кута.
let angle = Number(prompt("Введіть велечину кута в градусах:"));
let angleType =(angle < 90 ? "Кут гострий" : angle > 90 ? "Кут тупий" : "Кут прямий");
console.log("Величина кута: " + angle);
console.log(angleType);

//5. Оцінка студента.
let score = Number(prompt("Введіть оцінку від 0 до 100:"));
let grade;
if (score >= 90 && score <= 100){
    grade = "A";
}
else if (score >= 80 && score <= 89){
    grade = "B";
}
else if (score >= 70 && score <= 79){
    grade = "C";
}
else if (score >= 60 && score <= 69){
    grade = "D";
}
else if (score >= 0 && score < 60){
    grade = "F";
}
else{
    grade = "Невірна оцінка";
}
console.log("Оцінка до інкремента: " + score);
console.log("Літерна оцінка: " + grade);
score++;
console.log("Оцінка після інкремента: " + score);
let studentStatus = score >= 60 ? "Студент зарахований" : "Студент не зарахований";
console.log(studentStatus);