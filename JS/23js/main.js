window.onload = function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.group('Список користувачів');
            //Вивід у консоль:
            console.log(`name:${user.name}, username: ${user.username}, email: ${user.email}`);
            //Вивід на сторінку:
            usersList.innerHTML += `
            <div class="card">
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
            </div>
            `;
        });
        console.groupEnd();
    })
    .catch(error => {
        console.log('Помилка:', error);
    });


    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(user => {
        console.group('Інфо.про одного користувача');
            //Вивід у консоль:
            console.log(`name: ${user.name}, username: ${user.username}, email: ${user.email}`);
            console.groupEnd();
            //Вивід на сторінку:
            userInfo.innerHTML += `
            <div class="card">
                <h3> Ім'я: ${user.name}</h3>
                <p>Нікнейм: ${user.username}</p>
                <p>Email: ${user.email}</p>
            </div>
            `;
        })
    .catch(error => {
        console.log('Помилка:', error);
    });

    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(response => response.json())
    .then(posts => {
        console.group('Пости конкретного користувача');
            //Вивід у консоль:
            posts.forEach(post => {
            console.log(`Заголовок: ${post.title}`);
            //Вивід на сторінку:
            userPosts.innerHTML += `
            <div class="card">
                <h3> ${post.title}</h3>
            </div>
            `;
        });
    console.groupEnd();
    })
    .catch(error => {
        console.log('Помилка:', error);
    });

    planetBtn.addEventListener('click', function(){
    fetch("https://swapi.info/api/planets/1/")
    .then(response => response.json())
    .then(planet =>{
        //Вивід у консоль:
        console.group('Планета');
        console.log(`Назва: ${planet.name}`);
        console.groupEnd();
        //Вивід на сторінку:
        planetCard.innerHTML = `
        <div class="card">
        <h3>Планета: ${planet.name}</h3>
        <h4>Посилання з масиву:</h4>
        <div id=planetLinks></div>
        </div>
        `;
        const planetLinks = document.querySelector('#planetLinks');
        planet.films.forEach(link => {
            console.log(`лінк: ${link}`);

            planetLinks.innerHTML += `
            <a href="${link}" target="_blank">${link}</a> 
            `;
        });
    })
    .catch(error => {
        console.log('Помилка:', error);
    });
})
}