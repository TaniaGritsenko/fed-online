window.onload = function(){
    //1
    function showMessage(message, time){
        setTimeout(function(){
            console.log(message);
        }, time);
    }
    showMessage('Привіт!', 2000);

    //2
    let counter = 0;
    let intervalId;
    document.querySelector('#timerBtn').addEventListener('click',function(){
        if (intervalId) return;
        intervalId = setInterval(function(){
            counter++;
            document.querySelector('#counterText').textContent = counter;
            if (counter >= 10){
                clearInterval(intervalId);
                intervalId = null;
                alert('Таймер зупинено');
            }
        }, 1000);
    });

    //3
    let bgBtn =document.querySelector('#bgBtn');
    let styles = getComputedStyle(document.documentElement);
    let colors = [
        styles.getPropertyValue('--bg-color1'),
        styles.getPropertyValue('--bg-color2'),
        styles.getPropertyValue('--bg-color3'),
        styles.getPropertyValue('--bg-color4'),
        styles.getPropertyValue('--bg-color5')
    ];
    bgBtn.addEventListener('click', function(){
        let randomColor = Math.floor(Math.random() * colors.length);
        document.body.style.background = colors[randomColor];
    });
}