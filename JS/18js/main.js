window.onload = function (){
    //1
    let colorsEl = document.querySelectorAll('input[name="color"]');
    colorsEl.forEach(function(el){
        el.onchange = function(){
        document.body.style.backgroundColor = el.value;
        }
   });

   //2
   let hobbiesEl = document.querySelectorAll('input[name="hobby"]');
   let resultEl = document.querySelector('#result');
   hobbiesEl.forEach(function(el){
    el.onchange = function(){
        let selected = [];
        hobbiesEl.forEach(function(item){
            if (item.checked){
                selected.push(item.value);
            }
        });
        if (selected.length > 0){
            resultEl.textContent = 'Ви вибрали хобі: ' + selected.join(', ');
        } else{
            resultEl.textContent = 'Ви невибрали хобі'
        }
    };
   });

   //3
   let countryEl = document.querySelector('#country');
   let countryResultEl = document.querySelector('#countryResult');
   let countryData = {
        Ukraine: 
            {capital: 'Київ', population: '37млн'},
        'Czech Republic': 
            {capital: 'Прага', population: '10млн'},
        Greece: 
            {capital: 'Афіни', population: '10млн'}
    };
    countryEl.onchange = function(){
        let selectValue = countryEl.value;
        if(selectValue !== ''){
            let country = countryData[selectValue];
            countryResultEl.innerHTML = `Столиця: ${country.capital} <br> Населення: ${country.population}`;
        }
        else {
            countryResultEl.innerHTML = 'Виберіть країну,і тут буде інформація';
        }
    };

    //4
    let ratingEl = document.querySelectorAll('input[name="rating"]');
    let ratingResultEl = document.querySelector('#ratingResult');
    ratingEl.forEach(function(el){
        el.onchange = function(){
            ratingResultEl.textContent = 'Дякуємо за вашу оцінку: ' + el.value;
        };
    });

    //Додаткове завдання
    let pizzaEl = document.querySelector('#pizza');
    let sizeEl = document.querySelectorAll('input[name="size"]');
    let toppingEl = document.querySelectorAll('input[name="topping"]');
    let pizzaResultEl = document.querySelector('#pizzaResult');
    function calculatePizzaPrice(){
        let total = Number(pizzaEl.value);
        sizeEl.forEach(function(el){
            if (el.checked){
                total = total + Number(el.value);
            }
        });
        toppingEl.forEach(function(el){
            if (el.checked){
                total = total + Number(el.value)
            }
        });
        pizzaResultEl.textContent = 'Всього:' + total + ' грн';
    }
        pizzaEl.onchange = calculatePizzaPrice;
        sizeEl.forEach(function(el){
            el.onchange = calculatePizzaPrice;
        });
        toppingEl.forEach(function(el){
            el.onchange = calculatePizzaPrice;
        });

}