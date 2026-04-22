window.onload = function(){
    let firstLi = document.querySelectorAll('#tree > li');
    console.log(firstLi);
    console.log('Елемент перший:', firstLi.length);
    let secondLi = document.querySelectorAll('#tree > li > ul > li');
     console.log(secondLi);
    console.log('Елемент другий:', secondLi.length);

    const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];
let tbody = document.querySelector('#booksTabletbody');
    for (let book of booksArray){
    let tr = document.createElement('tr');
    let tdTitle = document.createElement('td')
    tdTitle.textContent = book.title;
    let tdYear = document.createElement('td');
    tdYear.textContent = book.year;
    let tdRating = document.createElement('td');
    tdRating.textContent = book.rating;
    tr.append(tdTitle, tdYear, tdRating);
     tbody.append(tr);
    console.log(book.title, book.year, book.rating);
    }

    const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];
function createElementObject(obj){
    let element = document.createElement(obj.tag);
    element.textContent = obj.text;
    return element;
}
let container = document.querySelector('#container');
for (let item of elementsArray){
    let newElement = createElementObject(item);
    container.append(newElement);
}

 const elements1Array = [
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true }
]
let container2 = document.getElementById('container2');
    for (let item of elements1Array){
        let p = document.createElement('p');
        p.textContent = item.text;
        if (item.usePrepend === true){
            container2.before(p);
            console.log(item.text + ' Елемент перед контейнером');
        } else {
            container2.after(p);
            console.log(item.text +' Елемент після контейнера');
        }
    }
}



