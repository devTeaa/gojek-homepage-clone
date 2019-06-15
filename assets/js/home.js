$(document).ready(function() {
  const sliderTarget = [
    {
      sliderId: 'gojekServiceSlider',
      sliderPrev: 'gojek-slider-prev',
      sliderNext: 'gojek-slider-next'
    },
    {
      sliderId: 'gopayServiceSlider',
      sliderPrev: 'gopay-slider-prev',
      sliderNext: 'gopay-slider-next'
    }
  ];

  sliderTarget.forEach(target => {
    $(`#${target.sliderId}`).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(`#${target.sliderPrev}`),
      nextArrow: $(`#${target.sliderNext}`),
      autoplay: false,
      autoplaySpeed: 3000,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            centerMode: false
          }
        },
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 2,
            centerMode: false
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }
      ]
    });
  });
});
