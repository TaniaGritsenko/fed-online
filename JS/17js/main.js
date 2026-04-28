window.onload = function (){
    //1.
    let amountEl = document.querySelector('.amount');
    let fromCurrencyEl = document.querySelector('.fromCurrency');
    let toCurrencyEl = document.querySelector('.toCurrency');
    let btnEl = document.querySelector('.convertBtn');
    let resultEl = document.querySelector('.result');
    let rates = {
        uah: 1, usd: 43, eur: 55
    };
    btnEl.onclick = function (){
        let amount = Number(amountEl.value);
        let from = fromCurrencyEl.value;
        let to = toCurrencyEl.value;
        if (amount <= 0){
            resultEl.textContent = "ВВедіть суму";
            return;
        }
        let amountInUah = amount * rates[from];
        let result = amountInUah / rates[to];
        resultEl.textContent = `Результат: ${amount} ${from.toUpperCase()
        } = ${result.toFixed(2)} ${to.toUpperCase()}`;
    };

    //2
    let taskEl = document.querySelector('.task');
    let addBtnEl = document.querySelector('.addBtn');
    let taskUlEl = document.querySelector('.taskUl');
    addBtnEl.onclick = function (){
        let taskText = taskEl.value;
        if (taskText === ''){
            alert('Введіть задачу');
            return;
        }
        let liEl = document.createElement('li');
        liEl.textContent = taskText;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.onclick = function (){
            liEl.remove();
        }
        liEl.appendChild(deleteBtn);
        taskUlEl.appendChild(liEl);
        taskEl.value = '';
    };
}