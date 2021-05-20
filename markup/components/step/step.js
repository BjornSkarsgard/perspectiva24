import $ from "jquery";
import slick from "slick-carousel";

let block = $('.step__slick')
let mBlock = $('.step__card-desc--slider')
block.slick({
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    dots: false,
    prevArrow: $('.step__slider-arrow--prev'),
    nextArrow: $('.step__slider-arrow--next'),
})

mBlock.slick({
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    dots: false,
    arrows: false
})
