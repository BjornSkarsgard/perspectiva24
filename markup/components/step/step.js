import $ from "jquery";
import slick from "slick-carousel";

let block = $('.step__slick')
block.slick({
    infinite: false,
    variableWidth: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    dots: false,
    prevArrow: $('.step__slider-arrow--prev'),
    nextArrow: $('.step__slider-arrow--next')
})
