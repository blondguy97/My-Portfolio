"use strict";

const API = "https://www.omdbapi.com/?apikey=44aaead1&s=";

const boardPlace = document.querySelector(".board-place span");
const boardBtn = document.querySelector(".board-btn");
const input = document.querySelector(".search-movie-input");

boardPlace.innerHTML =
  "<h3 style='color: #1f212a'>Тут будет информация о&nbsp;фильме</h3>";
checkInput();

input.addEventListener("focus", function (e) {
  if (e.target.value.length) {
    e.target.value = "";
  }
  boardPlace.innerHTML =
    "<h3 style='color: #1f212a'>Тут будет информация о&nbsp;фильме</h3>";
  checkInput();
});

function checkInput() {
  if (!input.value.trim()) {
    boardBtn.disabled = true;
  } else {
    boardBtn.disabled = false;
  }
}

input.addEventListener("input", function (e) {
  checkInput();
});

async function getMovie() {
  try {
    const inputValue = input.value.trim();

    const apiInput = inputValue;

    const responce = await fetch(`${API}/${apiInput}`);

    if (!responce.ok) {
      throw new Error("Такой фильм не найден!");
    }

    const movies = await responce.json();

    const randomMovie = Math.floor(Math.random() * movies.Search.length);
    const randomMovieTitle = movies.Search[randomMovie].Title;
    const randomMovieYear = movies.Search[randomMovie].Year;

    boardPlace.innerHTML = `
      <h1>${randomMovieTitle}</h1>
      <h3>${randomMovieYear}</h3>
    `;
  } catch (error) {
    boardPlace.innerHTML =
      "<h3 style='color: #1f212a'>Вы ввели некорректное название</h3>";
  }
}

boardBtn.addEventListener("click", function () {
  boardPlace.innerHTML = "<h3 style='color: #1f212a'>Загрузка...</h3>";

  getMovie();
});
