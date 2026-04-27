window.onload = function(){
    let btnEl = document.querySelector('.btn');
    let textEl = document.querySelector('.text');
     function getRandomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }
    function changeTextColor(){
        textEl.style.color = getRandomColor();
    }
    btnEl.addEventListener('click', changeTextColor);

    let btn2El = document.querySelector('.btn2');
    btn2El.style.width  = '80px';
    btn2El.style.height = '80px';

    btn2El.ondblclick = function (){ 
    let btnWidth = parseInt(btn2El.style.width);
    let btnHeight = parseInt(btn2El.style.height);
    btn2El.style.width = btnWidth * 2 + 'px';
    btn2El.style.height = btnHeight * 2 + 'px';;
    btn2El.style.backgroundColor = getRandomColor();
    }

    let counterBtnEl = document.querySelector('.counter-btn');
    let counterTextEl = document.querySelector('.counter-text');
    let counter = 0;
    function increaseCounter (){
    counter++;
    counterTextEl.textContent = `Лічильник: ${counter}`;
    if (counter > 10){
        counterBtnEl.removeEventListener('click', increaseCounter);
    }
    }
    counterBtnEl.addEventListener('click', increaseCounter);

     let divEl = document.querySelectorAll('.remove-item');
    for (let div of divEl){
    div.onclick = function (){
    div.remove();
         }         
    }   
    
    let btnContainerEl = document.querySelector('.btnContainer');
    btnContainerEl.addEventListener('click', function (event){
        alert(`Натиснута кнопка: ${event.target.textContent}`);
    });
}