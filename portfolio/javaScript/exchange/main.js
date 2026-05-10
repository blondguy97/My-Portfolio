
'use strict';

const firstSelect = document.querySelector('[data-first-select]');
const secondSelect = document.querySelector('[data-second-select]');
const swapBtn = document.querySelector('[data-swap-btn]');
const comparisonInfo = document.querySelector('[data-comparison-info]');

const BASE_URL = 'https://open.er-api.com/v6/latest/';

const FIRST_DEFAULT_CURRENCY = "USD";
const SECOND_DEFAULT_CURRENCY = "RUB";

let currencies = {};

firstSelect.addEventListener('change', function () {
    updateExchangeRates();
});

secondSelect.addEventListener('change', function () {
    renderInfo();
});

swapBtn.addEventListener('click', function () {
    const temp = firstSelect.value;
    firstSelect.value = secondSelect.value;
    secondSelect.value = temp;
    updateExchangeRates();
});

async function updateExchangeRates() {
    try {
        const response = await fetch(`${BASE_URL}/${firstSelect.value}`);
        const data = await response.json();

        currencies = data.rates;
        renderInfo();
    } catch (error) {
        console.log(error.message);
    }
}


function renderInfo() {
    comparisonInfo.textContent = 
    `1 ${firstSelect.value} = ${currencies[secondSelect.value]} ${secondSelect.value}`;
    
}

function populateSelects() {
    firstSelect.innerHTML = '';
    secondSelect.innerHTML = '';

    for (const currency in currencies) {

        if (currency === FIRST_DEFAULT_CURRENCY) {
            firstSelect.innerHTML += `
            <option selected value="${currency}">${currency}</option>
        `
        }
        else {
            firstSelect.innerHTML += `
            <option value="${currency}">${currency}</option>
        `
        }


        if (currency === SECOND_DEFAULT_CURRENCY) {
            secondSelect.innerHTML += `
            <option selected value="${currency}">${currency}</option>
        `
        }
        else {
            secondSelect.innerHTML += `
            <option value="${currency}">${currency}</option>
        `
        }
    }
}



/* Функция чтобы заполнить selects */

async function getInitialRates() {
    try {
        const response = await fetch(`${BASE_URL}/${FIRST_DEFAULT_CURRENCY}`);
        const data = await response.json();

        currencies = data.rates;

        populateSelects();
        renderInfo();
    }

    catch (error) {
        console.log(error.message);
    }

}

getInitialRates();