console.log(window);
console.log(document);

window.onload = function (){
    let headId = document.getElementById('headID');
    console.log(headId);
    let headClass = document.getElementsByClassName('header');
    console.log(headClass);

    let sectionTag = document.getElementsByTagName('section');
    console.log(sectionTag);

    let divTag = document.getElementsByTagName('div');
    console.log(divTag);
   
    let firstItem = document.querySelector('ul li');
    console.log(firstItem);
    let lastItem = document.querySelector('ul li:last-child');
    console.log(lastItem);
    let thirdItem = document.querySelector('ul li:nth-child(3)');
    console.log(thirdItem);

    let allItem = document.querySelectorAll('ul li');
    console.log(allItem);

    let [...liElem] = document.querySelectorAll('li');
    console.log(liElem);
}