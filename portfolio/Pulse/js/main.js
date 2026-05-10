$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev_arrow.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next_arrow.svg"</button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
      });

      // Modal 
        
      $('[data-modal=consultation]').on('click', function(){
          $('.overlay, #consultation').fadeIn('fast');
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('fast');
      });


 
    $('#consultation-form').validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        },
        messages: {
          name: "Пожалуйста, введите свое имя",
          phone: 'Пожалуйста, введите свой телефон',
          email: {
            required: "Пожалуйста, введите свой почтовый адрес",
            email: "Неправильно введен адрес почты",
          }
        }
      }
    });

    $('#order form').validate();

    $('input[name=phone').mask('+7(999)999-99-99', {placeholder: '*'});
});

