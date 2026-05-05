window.onload = function(){
    //1.

    let promsNumber = 30;
    Promise.resolve(promsNumber)
    .then((num) => {
        console.log(`Початкове число: ${num}`);
    let result = num + 5;
    console.log(`Додавання: ${result}`);
    return result;
    })
    .then((num) => {
    let result = num * 2;
    console.log(`Множення: ${result}`);
    return result;
    })
    .then((num) => {
    let result = num - 10;
    console.log(`Віднімання: ${result}`);
    return result;
    })
    .then((result) => {
        console.log(`Результат: ${result}`);
    })
    .catch((error) => {
        console.error(`Помилка: ${error}`);
    });

    //2.
    
    function textToUpperCase(text){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
        if (typeof text === 'string'){
        let result = text.toUpperCase();
        resolve(result);
          reject('Це не рядок');
        }
         }, 2000);
        });
    }
    textToUpperCase('привіт')
    .then((transformedText) => {
        console.log(`Результат завдання: ${transformedText}`);
    })
    .catch((error) => {
        console.error(`Помилка ${error}`);
    });

    //3.
    
    function compareNumbers(a, b){
        return new Promise((resolve, reject) => {
        if (a === b){
            reject('Числа рівні');
        }
        else if (a > b){
            resolve(`Число ${a} більше за ${b}`);
        }
        else{
            resolve(`Число ${b} більше за ${a}`);
        }
    });
}
    compareNumbers(5, 10)
    .then(message => console.log(`Завдання 3: ${message}`))
    .catch(error => console.log(`Завдання 3: ${error}`));
    compareNumbers(15, 10)
    .then(message => console.log(`Завдання 3: ${message}`))
    .catch(error => console.log(`Завдання 3: ${error}`));
    compareNumbers(10, 10)
    .then(message => console.log(`Завдання 3: ${message}`))
    .catch(error => console.log(`Завдання 3: ${error}`));
}