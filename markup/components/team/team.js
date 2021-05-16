import select2 from "select2"
import $ from "jquery"
import slick from "slick-carousel"

let slider = $(".team__slider ul")

$(document).ready(function() {
    $('.team__select').select2();
});

slider.slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    initialSlide: 1,
    dots: false,
    prevArrow: $('.team__slider-arrow--prev'),
    nextArrow: $('.team__slider-arrow--next')
})


