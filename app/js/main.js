
$(document).ready(function() {
  /**
  * подключение слайдера из библиотеки slick
  * расположение: в шапке сайта
  */
  $('.carousel-header').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.carousel-header-nav'
  });
  $('.carousel-header-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.carousel-header',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });
  $('#carousel-header-nav .slick-slide').css({
    marginLeft: '20px',
  });
  $('#carousel-header-nav .draggable').css({
    padding: '0',
  });

  /**
  * выпдающие меню в шапке 
  */
  var nav = document.querySelector('.top-nav');
  if(window.screen.width <= 768){
    nav.style.display = 'none';
  }
  document.querySelector('.toggle-nav').onclick = function () { 
    nav.style.display = (nav.style.display == 'none') ? 'block' : 'none';
  }
});
