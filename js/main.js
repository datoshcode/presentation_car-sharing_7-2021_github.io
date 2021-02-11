$(function(){

// -- Слайдер с изображениями автомобилей Мерседес
  $('.top__slider').slick({
    arrows: false,   // Отключаем стрелки
    dots: true,      // Включаем точки рядом со слайдером
    autoplay: true,  // Автовоспроизведение слайдера
    fade: true,       // Включаем плавность смены слайдов
    responsive: [     // Отключаем дотсы при ширине 1200px для слайдера с автомобилями
      {
        breakpoint: 1200,
        settings: {
          dots: false
        }
      },
    ]
  });

// -- Слайдер с отзывами клиентов
  $('.reviews__slider').slick({
    arrows: false,   // Отключаем стрелки
    dots: true,      // Включаем точки под слайдером
    autoplay: true,  // Автовоспроизведение слайдера  
    slidesToShow: 4, // Показывать по 4 слайда в одном окне
    slidesToScroll: 1,
    responsive: [     // Отключаем дотсы при ширине 1140px для раздела "Отзывы".
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  // -- Действие кнопки Меню для мобильной версии: открыть и показать перечень пунктов Меню
  $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });


});