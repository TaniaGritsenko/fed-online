window.onload = function(){
   const menuData = [

    { name: 'Головна', url: '/' },

    { name: 'Про нас', url: '/about' },

    { name: 'Послуги', url: '/services' },
   ]
   let headerEl = document.createElement('header');
       headerEl.style.padding ='50px';
       headerEl.style.backgroundColor ='yellow';
       headerEl.style.textAlign ='center';
     for (let data of menuData){
        const linkEl = document.createElement('a');
        linkEl.textContent = data.name;
        linkEl.href = data.url;
        linkEl.target = '_blank';
        linkEl.style.margin = '0 15px';
        linkEl.style.color = 'black';
        linkEl.style.textDecoration ='none';
        headerEl.appendChild(linkEl);
     }
        document.body.appendChild(headerEl);
     
   function getRandomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }
    function createDivs(){
        const containerEl = document.createElement('div');
        containerEl.classList.add('container');
        containerEl.style.display = 'flex';
        containerEl.style.flexWrap = 'wrap';
        containerEl.style.width = '900px';
        containerEl.style.gap = '15px';
        containerEl.style.margin = '20px auto 0';

        for(let i = 0; i < 50; i++){
            const divEl = document.createElement('div');
            divEl.style.width = '50px';
            divEl.style.height = '50px';
            divEl.style.borderRadius = '100%';
            divEl.style.backgroundColor = getRandomColor();
            containerEl.appendChild(divEl);
        }
        document.body.appendChild(containerEl);
    }
    createDivs();
}