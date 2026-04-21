console.log(window);
console.log(document);

window.onload = function (){
let listItems = document.querySelectorAll('ul.nav > li');
console.log(listItems);
let listItem = document.querySelectorAll('li:nth-child(2)');
console.log(listItem);
}
