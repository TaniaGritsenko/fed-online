window.onload = function(){
let box = document.querySelector('.box');
box.onmouseover = function (){
    box.style.backgroundColor = 'red';
};
box.onmouseout = function (){
    box.style.backgroundColor = 'aqua';
};

let customMenuEl = document.querySelector('.customMenu');
let textBlock = document.querySelector('.textBlock');
textBlock.addEventListener('contextmenu', function (e){
    e.preventDefault();
    customMenuEl.style.top = e.clientY + 'px';
    customMenuEl.style.left = e.clientX + 'px';
    customMenuEl.style.display = 'block';
});
document.addEventListener('click', function(){
    customMenuEl.style.display = 'none';
});
customMenuEl.addEventListener('click', function (e){
let action = e.target.dataset.action;
 if (action === 'right') textBlock.style.textAlign = 'right';
 if (action === 'left') textBlock.style.textAlign = 'left';
 if (action === 'center') textBlock.style.textAlign = 'center';
 if (action === 'hide') textBlock.style.display = 'none';
   customMenuEl.style.display = 'none';
});

let card = document.querySelector('.card');
card.addEventListener('mouseover', function (){
    card.style.width = '400px';
    card.style.border = '5px solid black'
});
card.addEventListener('mouseout', function (){
    card.style.width = '200px';
    card.style.border = 'none'
});

  let player = document.querySelector('.player');
   let menu = document.querySelector('.menu');
   let items = document.querySelectorAll('.menu li');
   let x = 250;
   let y = 600;
   let speed = 5;
   let keys = {};
   let current = 0;
    player.style.width = '100px';
   player.style.height = '100px';
   player.style.background = 'pink';
   player.style.position = 'absolute';
   player.style.left = x + 'px';
   player.style.top = y + 'px';
   items[current].classList.add('active');
      document.addEventListener('keydown', function (e) {
      keys[e.key] = true;
      if (e.key === 'm' || e.key === 'M') {
         menu.style.display = 'block';
      }

      if (e.key === 'c' || e.key === 'C') {
         menu.style.display = 'none';
      }
      if (menu.style.display == 'block') {
         if (e.key === 'ArrowDown') {
            items[current].classList.remove('active');
            current = (current + 1) % items.length;
            items[current].classList.add('active');
         }
         if (e.key === 'ArrowUp') {
            items[current].classList.remove('active');
            current = (current - 1 + items.length) % items.length;
            items[current].classList.add('active');
         }
      }
   });
   document.addEventListener('keyup', function (e) {
      keys[e.key] = false;
   })
   setInterval(function (){ 
      if (keys['ArrowRight']) x += speed;
      if (keys['ArrowLeft']) x -= speed;
      if (keys['ArrowDown']) y += speed;
      if (keys['ArrowUp']) y -= speed;
      player.style.left = x + 'px';
      player.style.top = y + 'px';
   }, 10);

   let areaEl = document.querySelector('.drag-area');
   let boxEl = document.querySelector('.drag-box');
   let isDragging = false;
   let shiftX = 0;
   let shiftY = 0;
   boxEl.addEventListener('mousedown', function (e){
      isDragging = true;
      shiftX = e.clientX - boxEl.offsetLeft;
      shiftY = e.clientY - boxEl.offsetTop;
      boxEl.style.cursor = 'grabbing';
   });
   document.addEventListener('mousemove', function (e){
      if (isDragging === true){
         let x = e.clientX - shiftX;
         let y = e.clientY - shiftY;
         let maxX = areaEl.clientWidth - boxEl.offsetHeight - boxEl.offsetHeight;
         let maxY = areaEl.clientWidth - boxEl.offsetHeight - boxEl.offsetHeight;
         if (x < 0){
            x=0;
         }
         if (y < 0){
            y=0;
         }
         if (x > maxX){
            x=maxX;
         }
         if (y > maxY){
            y = maxY;
         }
         boxEl.style.left = x + 'px';
         boxEl.style.top = y + 'px';
      }
   });
   document.addEventListener('mouseup', function(){
      isDragging = false;
      boxEl.style.cursor = 'grab';
   });
}
