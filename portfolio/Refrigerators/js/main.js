document.addEventListener('DOMContentLoaded', function () {


    // Slider

    const personSlider = document.querySelector('._customer-reviews__slider')
    const clientsSlider = document.querySelector('._customer-clients__slider')


    new Swiper(personSlider, {
        loop: true,
        navigation: {
            nextEl: '._customer-reviews-prev',
            prevEl: '._customer-reviews-next',
        },
        spaceBetween: 30,

        pagination: {
            el: '._customer-reviews__pagination',
            clickable: true
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,

            },
            1200: {
                slidesPerView: 3,
            },

        }
    });


    new Swiper(clientsSlider, {
        loop: true,
        navigation: {
            nextEl: '._customer-clients-prev',
            prevEl: '._customer-clients-next',
        },
        spaceBetween: 30,
        pagination: {
            el: '._customer-clients__pagination',
            clickable: true
        },
        autoplay: {
            delay: 4000,
        },

        mousewheel: {
            sensitivity: 1,
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,

            },
            1200: {
                slidesPerView: 5,
            },

        }
    });


    // Modal window


    const modalTrigger = document.querySelector('[data-modal]');
    const modal = document.querySelector('._customer-modal');
    const modalCloseBtn = document.querySelector('[data-close-modal]');


    function openModal() {
        modal.classList.add('_customer-show');
        modal.classList.remove('_customer-hide');
        document.body.classList.add('_customer-body_fixed');
    }

    modalTrigger.addEventListener('click', openModal);


    function closeModal() {
        modal.classList.remove('_customer-show');
        modal.classList.add('_customer-hide');
        document.body.classList.remove('_customer-body_fixed');
    }

    modalCloseBtn.addEventListener('click', closeModal);


    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal()
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Escape' && modal.classList.contains('_customer-show')) {
            closeModal()
        }
    });









}); // Конец JS кода