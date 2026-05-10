'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu__overlay');
    const close = document.querySelector('.menu__close');
    const commonWrapper = document.querySelector('.common-wrapper');
    const myAge = document.querySelector('.about__text span');

    const portfolioItems = document.querySelectorAll('.portfolio__item');

    portfolioItems.forEach(function (item) {
        const portfolioLink = item.querySelector('.portfolio-descr__link');

        item.addEventListener('click', function () {
            if(portfolioLink) {
                window.location.href = portfolioLink.href;
            }
        })
    })




    let currentYear = new Date().getFullYear() - 1997;

    myAge.textContent = currentYear;


    const menuLink = document.querySelectorAll('.menu__link');



    menu.addEventListener('click', function (event) {
        if (event.target === menuOverlay) {
            menuClose()
        }
    });




    function menuOpen() {
        menu.classList.add('menu_active');
        commonWrapper.classList.add('common-wrapper_active');
        body.classList.add('body-fixed');
    }

    function menuClose() {
        menu.classList.remove('menu_active')
        commonWrapper.classList.remove('common-wrapper_active');
        body.classList.remove('body-fixed');
    }


    hamburger.addEventListener('click', function () {
        menuOpen();
    });

    close.addEventListener('click', function () {
        menuClose()
    });


    menuLink.forEach(function (item) {
        item.addEventListener('click', function () {
            menu.classList.remove('menu_active');
            commonWrapper.classList.remove('common-wrapper_active');
            body.classList.remove('body-fixed');

        })
    });





})