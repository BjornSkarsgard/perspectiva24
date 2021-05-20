import $ from "jquery"
import slick from "slick-carousel"

let slider = $(".create-agent__blocks--slider")

slider.slick({
    dots: false,
    centerMode: true,
    slidesToShow: 1,
    infinite: false,
    touchThreshold: 10,
    variableWidth: true,
    swipeToSlide: true,
    useCSS: false,
    arrows: false,
})



$('.create-agent__slider-block').click(function() {
    let index = $(this).closest('.slick-slide')[0].dataset.slickIndex
    slider.slick('slickGoTo', index)
})
