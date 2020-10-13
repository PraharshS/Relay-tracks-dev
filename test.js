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

var collapseBtn = document.querySelectorAll(".titleAndButton span");

for (let i = 0; i < collapseBtn.length; i++) {
  collapseBtn[i].addEventListener("click", () => {
    if (!collapseBtn[i].firstChild.classList.contains("open")) {
      collapseBtn[i].parentElement.parentElement.classList.add("activeRow");
      collapseBtn[i].firstChild.classList.add("open");
      for (let j = 0; j < collapseBtn.length; j++) {
        if (i != j) {
          var element = collapseBtn[j].parentElement.parentElement;
          element.classList.remove("activeRow");
          collapseBtn[j].firstChild.classList.remove("open");
        }
      }
    } else {
      collapseBtn[i].parentElement.parentElement.classList.remove("activeRow");
      collapseBtn[i].firstChild.classList.remove("open");
    }
  });
}
