'use strict';

const createUserForm = document.querySelector('[data-create-user-form]');
const usersContainer = document.querySelector('[data-users-container]');

const MOCK_API_URL = `https://692c6001c829d464006f6522.mockapi.io/users`;

let users = [];


/* Удаление существующего пользователя */

async function removeUserAsync(userID) {
    try {
        const response = await fetch(`${MOCK_API_URL}/${userID}`, {
            method: 'DELETE'
        });

        if(response.status === 404) {
            throw new Error(`${userID} не найден`)
        }
        const removedUser = await response.json();

        users = users.filter(function(user) {
            return user.id !== removedUser.id
        })

        const userName = removedUser.name;

        renderUsers();

        alert(`Пользователь ${userName} удален!`)
    } catch (error) {
        console.error(`Ошибка при удалении пользователя: ${error.message}`)
    }
}


/* Делегирование событий */

usersContainer.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-user-remove-btn')) {

        const isRemoveUser = confirm('Вы уверены что хотите удалить карточку пользователя?');

        if(isRemoveUser) {
            removeUserAsync(e.target.dataset.userId);
        }
    }
})


createUserForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(createUserForm);
    const formUserData = Object.fromEntries(formData);

    const newUserData = {
        name: formUserData.userName,
        city: formUserData.userCity,
        email: formUserData.userEmail,
        avatar: formUserData.userImageUrl,
    }

    createNewUserAsync(newUserData);
});


/* Получение всех пользователей */

async function getUsersAsync() {
    try {
        const response = await fetch(MOCK_API_URL);
        users = await response.json();

        renderUsers();
    } catch (error) {
        console.error(`Пойманная ошибка ${error.message}`)
    }

}

getUsersAsync();


/* Создание нового пользователя */

async function createNewUserAsync(newUserData) {
    try {
        const response = await fetch(MOCK_API_URL, {
            method: 'POST',
            body: JSON.stringify(newUserData),
            headers: {
                'Content-type': "application/json"
            }
        });

        const newCreatedUser = await response.json();

        users.unshift(newCreatedUser);
        renderUsers();

        createUserForm.reset();

        alert('Новый пользователь создан!')
    } catch (error) {
        console.error(`Ошибка при создании пользователя: ${error.message}`)
    }
}


/* Отрисовка пользователей */

function renderUsers() {
    usersContainer.innerHTML = '';

    users.forEach(function (user) {
        usersContainer.insertAdjacentHTML('beforeend',
            `
                <div class='user-card'>
                    <h3>${user.name}</h3>
                    <p>City: ${user.city}</p>
                    <span>Email: ${user.email}</span>
                    <img src='${user.avatar}' alt='user-image'>
                    <button data-user-id=${user.id} class='user-remove-btn' data-user-remove-btn>❌</button>
                </div>
            `)
    })
}

