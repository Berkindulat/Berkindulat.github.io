$('.header-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  draggable: false,
  asNavFor: '.header-slider-nav',
  prevArrow: '.header-slider-arrow-left',
  nextArrow: '.header-slider-arrow-right',
});
$('.header-slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.header-slider-for',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  draggable: false,
});