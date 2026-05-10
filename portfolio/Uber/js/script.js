window.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('.menu');
    let hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
});