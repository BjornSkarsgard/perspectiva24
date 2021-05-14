import $ from "jquery";
import slick from "slick-carousel";

let block = $('.advantage__cards')
console.log(slick);
block.slick({
    infinite: false,
    variableWidth: true,
    // slidesToShow: 4,
    rows: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    swipeToSlide: 2,
    initialSlide: 2,
    dots: true,
    
    responsive: [
        {
          breakpoint: 1500,
          settings: {
            infinite: false,
            slidesToShow: 4,
            rows: 2,
            slidesToScroll: 1,
            // centerMode: true,
            swipeToSlide: 2,
            // initialSlide: 2,
            dots: true,
          }
        }
    ]
})
