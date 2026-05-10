const form = document.querySelector('[data-search-form]');
const input = document.querySelector('[data-search-input]');
const container = document.querySelector('[data-user-info-container]');
const reposContainer = document.querySelector('[data-repos-container]');


const API_GITHUB = 'https://api.github.com/users';


form.addEventListener('submit', async function (e) {
    e.preventDefault();


    let userName = input.value.trim();

    if (!userName) {
        alert('Пожалуйста введите никп пользователя!');
        return;
    }

    container.innerHTML = 'Загрузка...'

    try {
        const userResponce = await fetch(`${API_GITHUB}/${userName}`);

        if (!userResponce.ok) {
            throw new Error('Пользователь не найден!')
        }

        const userData = await userResponce.json();

        container.innerHTML = `
            <div>
                <img src='${userData.avatar_url} alt='${userData.login}'>
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Биография не указана...'}</p>
            </div>
        
        `

        const reposResponse = await fetch(userData.repos_url);

        if (!reposResponse.ok) {
            throw new Error('Не можем получить репозитории')
        }

        const repos = await reposResponse.json();

        if (repos.length) {
            reposContainer.innerHTML = ` <h3>Репозитории: </h3>`;

            repos.forEach(function (repo) {
                reposContainer.innerHTML += `
                <div class='repo'>
                   <a href='${repo.html_url}'>${repo.name}</a>
                </div>
                `
            });
        }
        else {
            reposContainer.innerHTML = 'У пользователя нет репозиториев';
        }
    } catch (error) {
        container.innerHTML = `<b class='not-found'>${error.message}</b>`
        setTimeout(function () {
            container.innerHTML = ``;
        }, 3000)
    }
    finally {
        input.value = '';
    }
}); 