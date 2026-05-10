window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__menu--active');
        hamburger.classList.toggle('hamburger--active')
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('header__menu--active');
        })
    })

// $('.slider-wrapper').slick({
//         infinity: true,
//         slidesToShow: 3,
//         centerMode: true, 
//         arrows: false,
//         responsive: [
//             {
//               breakpoint: 993,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true,
//               }
//             },
//             {
//               breakpoint: 577,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//               }
//             },
//         ]})

})