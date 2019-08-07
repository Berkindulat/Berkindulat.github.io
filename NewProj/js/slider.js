$('.header-slider').slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  mobileFirst: true,
  prevArrow: '.header-slider__bg-for-arrow',
  
  responsive: [
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 414,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});