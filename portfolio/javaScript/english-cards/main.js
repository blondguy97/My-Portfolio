"use strict";

import { cards } from "./cardsArr.js";

let currentIndex = 0;

let correctAnswers = 0;

const card = document.querySelector(".card");
const cardImage = card.querySelector(".card__image img");
const cardTitle = card.querySelector(".card__title");
const textForUser = document.querySelector(".text-for-user");
const interactInput = document.querySelector(".interact input");
const interactBtn = document.querySelector(".interact button");
const nextBtn = document.querySelector(".btn-next");
const firstCard = document.querySelector(".firstCard");
const lastCard = document.querySelector(".lastCard");
const progressFill = document.getElementById("progressFill");

function disabledBothBtns() {
  interactBtn.disabled = true;
  nextBtn.disabled = true;
}

disabledBothBtns();

interactInput.addEventListener("input", function (e) {
  if (!e.target.value.trim()) {
    interactBtn.disabled = true;
  } else {
    interactBtn.disabled = false;
  }
});

function updateProcess() {
  const percent = ((currentIndex + 1) / cards.length) * 100;
  progressFill.style.width = `${percent}%`;
  firstCard.textContent = currentIndex + 1;
  lastCard.textContent = cards.length;
}

function renderCard() {
  const card = cards[currentIndex];
  cardTitle.textContent = card.english;
  cardImage.src = card.imageUrl;
  updateProcess();

  interactInput.value = "";
}

renderCard();

function checkAnswer() {
  const card = cards[currentIndex];

  if (
    interactInput.value.trim().toLowerCase() === card.translate.toLowerCase()
  ) {
    textForUser.textContent = "Правильно! ✅";
    correctAnswers = correctAnswers + 1;
  } else {
    textForUser.textContent = "Не правильно... ❌";
  }
  interactInput.value = "";

  interactInput.disabled = true;
  nextBtn.disabled = false;
  interactBtn.disabled = true;
}

interactBtn.addEventListener("click", function (e) {
  checkAnswer();
});

function nextCard() {
  currentIndex = currentIndex + 1;

  nextBtn.disabled = true;
  textForUser.textContent = "";
  interactInput.disabled = false;
  updateProcess();
  renderCard();
}

nextBtn.addEventListener("click", function (e) {
  interactBtn.disabled = true;

  interactInput.addEventListener("input", function (e) {
    if (!e.target.value.trim()) {
      interactBtn.disabled = true;
    } else {
      interactBtn.disabled = false;
    }
  });

  if (cards.length === currentIndex + 1) {
    disabledBothBtns();
    textForUser.textContent = `Конец игры! ${correctAnswers} угаданных карточек из ${cards.length}!`;

    cardImage.src = "images/game-over.gif";
    cardTitle.textContent = '';
  } else {
    nextCard();
  }
});
