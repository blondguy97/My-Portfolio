
'use strict';

function generateRandomNumber() {
    return Math.ceil(Math.random() * 6)
}

const gameInfo = document.querySelector('[data-game-info]');
const actionBtn = document.querySelector('[data-action-btn]');
const container = document.querySelector('[data-container]');


actionBtn.addEventListener('click', function () {
    render();
});

function render() {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();

    container.innerHTML = '';

    container.insertAdjacentHTML('afterbegin', `
    <svg class="dice dice-red">
        <use href="sprites.svg#dice-${player1}-icon"></use>
    </svg>

    <svg class="dice dice-blue">
        <use href="sprites.svg#dice-${player2}-icon"></use>
    </svg>
    `
    )

    if (player1 === player2) {
        gameInfo.textContent = 'Ничья!';
        gameInfo.style.color = '#000';
    }
    else if (player1 > player2) {
        gameInfo.textContent = 'Победил игрок номер №1.';
        gameInfo.style.color = '#E98B8B';
    }
    else {
        gameInfo.textContent = 'Победил игрок номер №2.';
        gameInfo.style.color = '#449fcc';
    }
};

