window.onload = function(){
    console.log('Завдання 1');
    async function getUser(){
        let response = await fetch('https://jsonplaceholder.typicode.com/users/5');
        let user = await response.json();
        console.log(`Ім'я: ${user.name}`);
        console.log(`Електронна адреса: ${user.email}`);
    }
    getUser();

    console.log('Завдання 2');
    async function getFilm(){
        let response = await fetch('https://swapi.py4e.com/api/films/1/');
        let film = await response.json();
        console.log(`Назва фільму: ${film.title}`);
        console.log(`Дата виходу: ${film.release_date}`);
    }
    getFilm();

    console.log('Завдання 3');
    async function getPlanet(){
        let response = await fetch('https://swapi.py4e.com/api/planets/1/');
        let planet = await response.json();
        console.log(`Назва планети: ${planet.name}`);
        console.log(`Клімат цієї планети: ${planet.climate}`);
    }
    getPlanet();
}