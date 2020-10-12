$(".animationText").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 1500,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,

  // fade: true,
  // centerMode: true,
  // centerMargin: "30px",
  prevArrow: ".site-slider .slider-btn .prev",
  nextArrow: ".site-slider .slider-btn .next",
});

$(".shortSlider").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // centerMode: true,
});
$(".relayCardWrapper")
  .not(".slick-initialized")
  .slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: ".relayArrows .left",
    nextArrow: ".relayArrows .right",
  });
// var collBtn = document.querySelectorAll(".collapse");
// var i = 0;
// for (let i = 0; i < collBtn.length; i++) {
//   collBtn[i].addEventListener("click", () => {
//     collBtn[i].classList.toggle("rotate");
//     collBtn[i].parentElement.parentElement.classList.toggle("activeRow");
//     collBtn[i].parentElement.parentElement.lastElementChild.classList.toggle(
//       "activeP"
//     );
//     for (let j = 0; j < collBtn.length; j++) {
//       if (i != j) {
//         collBtn[j].parentElement.parentElement.classList.remove("activeRow");
//         collBtn[
//           j
//         ].parentElement.parentElement.lastElementChild.classList.remove(
//           "activeP"
//         );
//       }
//     }
//   });
// }
