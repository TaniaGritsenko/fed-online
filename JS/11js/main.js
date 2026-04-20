//Тема: Spread
console.log("Завдання 1.Spread");
function getNewArr(num1, num2){
    let newArr = [...num1, ...num2];
    return newArr;
}
console.log(getNewArr([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

//Тема: Rest
console.log("Завдання 2.Rest");
function restFn(nam, ...text){
    console.log(nam);
    console.log(text);
}

restFn(1, 2, 3, 4, 5);

function getValue(...numbers){
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

console.log(getValue(2, 2));

//Тема: TypeOf
console.log("Завдання 3.TypeOf");
function showType(value){
    console.log(typeof value);
}
showType(33);
showType("Привіт");
showType(true);

function typeFn(value){
    if (typeof(value) === "number"){
        console.log(`${value} - Це число`);
    } else if (typeof (value) === 'string'){
        console.log(`${value} - Це рядок`);
    } else {
        console.log(`${value} - Це інший тип`);
    }
}
typeFn(33);
typeFn("Привіт");
typeFn(true);