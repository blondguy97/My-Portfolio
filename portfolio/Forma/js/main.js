document.addEventListener('DOMContentLoaded', function () {
    /* Скрипт бургер меню */
    const menuBtn = document.querySelector('.menu__btn');
    const menu = document.querySelector('.menu__list');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('menu__list_active');
    });



    /* Скрипт слайдера */

    new Swiper('.projects__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        navigation: {
            nextEl: '.projects__arrow-next',
            prevEl: '.projects__arrow-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    /* Скрипт увеличения картинок */

    const images = document.querySelectorAll('.gallery__image');
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.querySelector('.overlay__image img');
    const overlayImageCloseBtn = document.querySelector('.overlay__close');
    const body = document.querySelector('body');


    images.forEach(function (image) {
        image.addEventListener('click', function (event) {
            const bigImage = event.currentTarget.dataset.src;
            overlayImage.src = bigImage;

            openOverlay();
        });
    });


    overlayImageCloseBtn.addEventListener('click', function () {
        closeOverlay();
    })

    function openOverlay() {
        overlay.classList.add('overlay_active');
        body.classList.add('stop-scroll');
    };

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && overlay.classList.contains('overlay_active')) {
            closeOverlay();
        }
    });

    function closeOverlay() {
        overlay.classList.remove('overlay_active');
        body.classList.remove('stop-scroll');
    };


    overlay.addEventListener('click', function (event) {
        if (Boolean(event.target.firstElementChild) == true) {
            closeOverlay();
        }
    })


});