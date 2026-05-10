document.addEventListener('DOMContentLoaded', function () {


    // Hamburger

    const menu = document.querySelector('.header-list_mobile'),
        menuItem = document.querySelectorAll('.header-list__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header-list_mobile_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-list_mobile_active');
        })
    })

    // Modal



    $(document).on('keyup', function (e) {
        if (e.key == "Escape") {
            $('.overlay, #consultation').fadeOut();
        }
    });

    $('[data-modal="consultation"]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation').fadeOut();

    })


    $(document).on('keyup', function (e) {
        if (e.key == "Escape") {
            $('.overlay-slider, #slider-gallery').fadeOut();
        }
    });

    $('[data-slider="slider-gallery"]').on('click', function () {
        $('.overlay-slider, #slider-gallery').fadeIn();
        $('.slider-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
        });

    });
    $('.slider-wrapper__close').on('click', function () {
        $('.overlay-slider, #diploma-gallery').fadeOut();

    })




    $(document).on('keyup', function (e) {
        if (e.key == "Escape") {
            $('.overlay-diploma, #diploma-gallery').fadeOut();
        }
    });

    $('[data-slider="diploma-gallery"]').on('click', function () {
        $('.overlay-diploma, #diploma-gallery').fadeIn();
        $('.diploma-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
        });

    });
    $('.diploma-wrapper__close').on('click', function () {
        $('.overlay-diploma, #diploma-gallery').fadeOut();

    })





    // Slider


    $('.gratefulness-slider__wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 3000,
        // autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    })


    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });






    // Accordion


    $('.program-advices__header').click(function () {
        if ($(this).next('.program-advices__body').hasClass('active')) {
            $(this).next('.program-advices__body').removeClass('active').slideUp()

        } else {
            $('.program-advices__body').removeClass('active').slideUp()
            $(this).next('.program-advices__body').addClass('active').slideDown()
        }

    })


    $('.accordion-card__header').click(function () {
        if ($(this).next('.accordion-card__body').hasClass('active')) {
            $(this).next('.accordion-card__body').removeClass('active').slideUp()

        } else {
            $('.accordion-card__body').removeClass('active').slideUp()
            $(this).next('.accordion-card__body').addClass('active').slideDown()
        }

    })

    // Tabs


    $('body').on('click', '.program-days__link', function () {
        $('.program-days__link').removeClass("program-days__link_active");
        $(this).addClass('program-days__link_active');
        var href = $(this).attr('href');
        $('.program-advices').removeClass('program-advices_active').removeClass('in');
        $(href).addClass('program-advices_active');
        setTimeout(function () {
            $(href).addClass('in');
        }, 300);
        return false;

    });

    $('body').on('click', '.course__tabs-link', function () {
        $('.course__tabs-link').removeClass("course__tabs-link_active");
        $(this).addClass('course__tabs-link_active');
        var href = $(this).attr('href');
        $('.course-item').removeClass('course-item_active').removeClass('in');
        $(href).addClass('course-item_active');
        setTimeout(function () {
            $(href).addClass('in');
        }, 300);
        return false;

    });



    $('body').on('click', '.blog-articles__link', function () {
        $('.blog-articles__link').removeClass("blog-articles__link_active");
        $(this).addClass('blog-articles__link_active');
        var href = $(this).attr('href');
        $('.blog__list').removeClass('blog__list_active').removeClass('in');
        $(href).addClass('blog__list_active');
        setTimeout(function () {
            $(href).addClass('in');
        }, 300);
        return false;

    });


})







// Validate forms