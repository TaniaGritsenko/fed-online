window.onload = function(){
    //1
    document.querySelector('#saveSessionBtn').addEventListener('click',function(){
      let textValue = document.querySelector('#textInput').value;
      window.sessionStorage.setItem('myText', textValue);
    });
    document.querySelector('#showSessionBtn').addEventListener('click', function(){
        let savedText = window.sessionStorage.getItem('myText');
        document.querySelector('#resultText').textContent = savedText;
    });
 
 //2
 let savedColor = localStorage.getItem('backgroundColor');
 if (savedColor){
    document.body.style.backgroundColor = savedColor;
    document.querySelector('#bgColor').value = savedColor;
 }  
 document.querySelector('#saveSettingsBtn').addEventListener('click', function(){
    let selectedColor = document.querySelector('#bgColor').value;
    localStorage.setItem('backgroundColor', selectedColor);
    document.body.style.backgroundColor = selectedColor;
    localStorage.removeItem('backgroundColor');
 }); 

 //3
   let btnAdd = document.querySelector('.add');
   let input = document.querySelector('#taskInput');
   let ul = document.querySelector('ul');
   let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
   function render(){ 
      ul.innerHTML = '';
      tasks.forEach((task, index) => {
      let li = document.createElement('li');
      li.textContent = task;
      let btnDel = document.createElement('button');
      btnDel.textContent = 'Видалити';
      btnDel.onclick = function (){
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            render();
         };
         li.appendChild(btnDel);
         ul.appendChild(li);
      });
   }
   btnAdd.onclick = function (e){
      e.preventDefault();
      if (input.value.trim() !== ''){
         tasks.push(input.value);
         localStorage.setItem('tasks', JSON.stringify(tasks));
         input.value = '';
         render();
      }
   };
   render();

   //4
   let downloadBtn = document.querySelector('#dowBtn');
   downloadBtn.addEventListener('click',function(){
   let userInfo = {
      name: "Tania",
      age: 33,
      isStudent: true,
      skills: ["HTML", "CSS", "JavaScript"],
      address: {
         country: "Ukraine",
         city: "Nizhyn"
      }
   };
   let jsonData = JSON.stringify(userInfo, null, 2);
   console.log(jsonData);
   let parseData = JSON.parse(jsonData);
   console.log(parseData);
   let link = document.createElement('a');
   let file = new Blob([jsonData], { type:'application/json'
   });
   link.href = URL.createObjectURL(file);
   link.download = 'data.json';
   link.click();
});
   
   }
   

