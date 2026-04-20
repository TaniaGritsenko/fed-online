console.log("Гра");
function computerMove(){
  const num = Math.floor(Math.random()*3) + 1;
    if (num === 1){
      return "камінь";
    } else if (num === 2) {
        return "папір";
    } else {
        return "ножиці";
  }
}

const userChoice = prompt("Давай пограємо введи:камінь, папір, ножиці").toLowerCase();
const computerChoice = computerMove();
alert(`Комп'ютер вибрав  ${computerChoice}`);
 if 
 (userChoice === "камінь" &&
 userChoice === "папір" &&
 userChoice === "ножиці"){
    alert("Ви ввели неправильно");
} else if (userChoice === computerChoice){
    alert("Нічія")
} else if ((userChoice === "камінь" && computerChoice === "ножиці") ||
         (userChoice === "папір" && computerChoice === "камінь") ||
         (userChoice === "ножиці" && computerChoice === "папір"))
{
    alert("Ви виграли");
} else {
    alert("Комп'ютер виграв");
}   

console.log("Завдання 1. для Math.min та Math.max");
function getMinNumber(num1, num2){
    return Math.min(num1, num2);
}
console.log("Менше число:", getMinNumber(5, 3));

function getMaxNumber(num1, num2){
    return Math.max(num1, num2);
}
console.log("Більше число:", getMaxNumber(5, 3));

console.log("Завдання 2. для Math.pow");
 function getPowerNumber(num,powerNum) {
    return Math.pow(num, powerNum);
}
console.log("Результат:", getPowerNumber(2, 3));

console.log("Завдання 3. для Math.floor та Math.ceil");
function floorFun(num) {
    return Math.floor(num);
}
console.log(`Floor number is ${floorFun(3.6443)}`);

function ceilFun(num) {
    return Math.ceil(num);
}
console.log(`Ceil number is ${ceilFun(3.6443)}`);

console.log("Завдання 4. для Date.getYear");
function getBirthYear(age){
    let nowYear = new Date().getFullYear();
    return  nowYear - age;
}
let userAge = Number(prompt("Введіть вік:"));
let birthYear = getBirthYear(userAge);
console.log("Рік народження:", birthYear);

console.log("Завдання 5. для Date.toLocaleString");
let newDate = new Date();
//console.log(newDate);
let localDate =newDate.toLocaleString();
console.log(localDate);

console.log("Завдання 6. для String.split та toUpperCase");
let text = 'Кіно Фільми Мультфільми';
let arr = text.split(' ');
let result = arr.map(word => word.toUpperCase());
console.log(result);