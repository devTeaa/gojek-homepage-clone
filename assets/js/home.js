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
      prevArrow: $(`#${target.sliderPrev}`),
      nextArrow: $(`#${target.sliderNext}`),
      autoplay: false,
      autoplaySpeed: 3000,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        }
      ]
    });
  });

  $(`#articleSlider`).slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    infinite: false,
    prevArrow: $(`#article-prev`),
    nextArrow: $(`#article-next`),
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
