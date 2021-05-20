import $ from "jquery";
import slick from "slick-carousel";
import owlCarousel from "owl.carousel"

let block = $('.advantage__cards--center')
let lBlock = $('.advantage__cards--left')
let rBlock = $('.advantage__cards--right')
console.log(slick);

console.log(owlCarousel);

$(block).owlCarousel({
  loop: false,
  autoWidth: true,
  center: true,
  // items: 12,
  stagePadding: 100,
  margin: 10,
  startPosition: 1,


});

// let sliderInit = function() {
//   let width = $(window)[0].innerWidth
//   if (width >= 750) {
//       block.slick({
//         slidesToShow: 4,
//         infinite: true,
//         slidesToScroll: 1,
//         centerMode: false,
//         centerPadding: '60px',
//         swipeToSlide: 2,
//         initialSlide: 0,
//         rows: 2,
//         swipe: false,
//         dots: true,
//         prevArrow: $('.advantage__slider-arrow--prev'),
//         nextArrow: $('.advantage__slider-arrow--next'),
//         responsive: [
//             {
//               breakpoint: 1000,
//               settings: {
//                 variableWidth: true,
//                 rows: 1,
//                 slidesToScroll: 1,
//                 centerMode: true,
//                 swipeToSlide: 2,
//                 initialSlide:0,
//                 dots: true,
//                 arrows: false,
//                 swipe: true,
//               }
//             },
//             {
//               breakpoint: 1300,
//               settings: {
//                 slidesToShow: 3,
//                 variableWidth: true,
//                 rows: 1,
//                 slidesToScroll: 1,
//                 centerMode: true,
//                 swipeToSlide: 2,
//                 initialSlide:0,
//                 dots: true,
//                 arrows: false,
//                 swipe: true,
//               }
//             }
//         ]
//     })
//   } else {
//     block.slick({
//       variableWidth: true,
//       rows: 1,
//       slidesToScroll: 1,
//       centerMode: true,
//       swipeToSlide: 2,
//       initialSlide:0,
//       dots: true,
//       arrows: false,
//       swipe: true,
//       prevArrow: $('.advantage__slider-arrow--prev'),
//       nextArrow: $('.advantage__slider-arrow--next'),
//   })
//   }
// }
// $( document ).ready(function() {
//   sliderInit()
// });


// lBlock.slick({
//   slidesToShow: 1,
//   infinite: true,
//   swipe: false,
//   slidesToScroll: 1,
//   centerMode: false,
//   centerPadding: '60px',
//   swipeToSlide: 2,
//   initialSlide: -1,
//   rows: 2,
//   dots: false,
//   arrows: false
// })

// rBlock.slick({
//   slidesToShow: 1,
//   infinite: true,
//   slidesToScroll: 1,
//   centerMode: false,
//   swipe: false,
//   centerPadding: '60px',
//   swipeToSlide: 2,
//   initialSlide: 4,
//   rows: 2,
//   dots: false,
//   arrows: false
// })

// let prev = $('.advantage__slider-arrow--prev')
// let next = $('.advantage__slider-arrow--next')

// $(prev).click(function() {
//   lBlock.slick('slickPrev')
//   rBlock.slick('slickPrev')
// })

// $(next).click(function() {
//   lBlock.slick('slickNext')
//   rBlock.slick('slickNext')
// })
