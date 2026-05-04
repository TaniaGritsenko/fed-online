window.onload = function(){
    //1
    let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
    let bigLetters = textStr.match(/[A-Z]/g);
    console.log(bigLetters);

    //2
    let operation = "5 плюс 7 = 3";
    let numbers = operation.match(/\d{1,6}/g);
    console.log(numbers);

    //3
    let words = textStr.match(/\b[a-zA-Z]{5}\b/g);
    console.log(words);
}