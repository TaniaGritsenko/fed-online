//push:
console.log("push. Завдання 1");
let numbers = [];
numbers.push(1, 2, 3);
//console.log(numbers);
console.log([...numbers]);

console.log("push. Завдання 2");
function addElement(array, element){
    array.push(element);
    return array;
}
console.log(addElement(numbers, 4,));

//pop:
console.log("pop. Завдання 1");
let numbersPop = [1, 2, 3];
numbersPop.pop();
console.log([...numbersPop]);

console.log("pop. Завдання 2");
function lastElement(array){
array.pop();
return array;
}
let numsPop = [1, 2, 3, 4];
console.log(lastElement(numsPop));

//unshift:
console.log("unshift. Завдання 1");
let numbers1 = [1, 2, 3,];
numbers1.unshift(0);
console.log(numbers1);

console.log("unshift. Завдання 2");
function addFirstElement(array, element){
array.unshift(element);
return array;
}
console.log(addFirstElement([4, 5, 6], 1));

//fill:
console.log("fill. Завдання 1");
let fillArray = new Array(10);
fillArray.fill (3);
console.log(fillArray);

console.log("fill. Завдання 2");
function addFill(array, value, start, end){
array.fill(value, start, end);
return array;
}
console.log(addFill([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 4, 7));

//splice:
console.log("splice. Завдання 1");
let numbersSplice = [1, 2, 3, 4, 5, 6];
numbersSplice.splice(2, 2);
console.log(numbersSplice);

console.log("splice. Завдання 2");
function addSplice(array, start, end) {
    array.splice(start, end);
    return array;
}
console.log(addSplice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 4));

//reverse:
console.log("reverse. Завдання 1");
let numbersReverse = [1, 2, 3, 4, 5, 6, 7];
numbersReverse.reverse();
console.log(numbersReverse);
console.log("reverse. Завдання 2");
function addReverse(array){
    array.reverse();
    return array;
}
console.log(addReverse([2,3,5,5,7,7]));

//concat:
console.log("concat. Завдання 1");
let numbersConcat1 = [1, 2, 3, 4, 5];
let numbersConcat2 = [6, 7, 8, 9, 10];
numbersConcat1 = numbersConcat1.concat(numbersConcat2);
console.log(numbersConcat1);
console.log("console. Завдання 2");
function addConcat(array1, array2) {
    return array1.concat(array2);
}
console.log(addConcat([2,3,7,7,8],[3,4,5,6,7]));

//includes:
console.log("includes. Завдання 1");
let numbersIncludes = [1, 2, 3, 4, 5, 6, 7];
console.log(numbersIncludes.includes(5));

console.log("includes. Завдання 2");
function addIncludes(array, element){
    return array.includes(element);
}
console.log(addIncludes([2, 3, 6, 6, 7],1));

//filter:
console.log("filter. Завдання 1");
let arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterNum = arrFilter.filter(num => num % 2 === 0);
console.log(filterNum);

console.log("filter. Завдання 2");
function filterFn(array, condition) {
   return array.filter(condition);
}
function isEven(num){
    return num % 2 === 0;
}
console.log(filterFn(arrFilter, isEven));

//map:
console.log("map. Завдання 1");
let arrMap = [1, 2, 3, 4, 5, 6, 7, 8];
let newArrMap = arrMap.map(value => value ** 2);
console.log(newArrMap);

console.log("map. Завдання 2");
function mapFn(array, fun){
    return array.map(fun);
}
function addString(value){
    return `Value ${value}`;
}
console.log(mapFn([1, 2, 3, 4], addString));
