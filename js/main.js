$(".animationText").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 1500,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
});

$(".shortSlider").not(".slick-initialized").slick({
  autoplay: false,
  autoplaySpeed: 4000,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // centerMode: true,
});
$(".sliderImagesBig").slick({
  autoplay: false,

  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

$(".relayCardWrapper0")
  .not(".slick-initialized")
  .slick({
    arrows: false,
    // dots: true,
    // prevArrow: ` <button class="leftArrow">
    //   <i class="fas fa-chevron-left"></i>
    //   </button>`,
    // nextArrow: '<i class="fas fa-chevron-right"></i>',
    autoplay: false,
    autoplaySpeed: 3000,
    // centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          // centerMode: true,
          centerPadding: "1rem",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          // centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

$(".relayers .relayArrows .leftArrow").click(function () {
  $(".relayCardWrapper0").slick("slickPrev");
});
$(".relayers .relayArrows .rightArrow").click(function () {
  $(".relayCardWrapper0").slick("slickNext");
});

$(".relayCardWrapper1")
  .not(".slick-initialized")
  .slick({
    autoplay: false,
    autoplaySpeed: 3000,
    // centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          // centerMode: true,
          centerPadding: "1rem",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          // centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
    dots: false,
    // prevArrow: $(".leftArrow"),
    // nextArrow: $(".rightArrow"),
  });
$(".mentors .relayArrows .leftArrow").click(function () {
  $(".relayCardWrapper1").slick("slickPrev");
});
$(".mentors .relayArrows .rightArrow").click(function () {
  $(".relayCardWrapper1").slick("slickNext");
});

// $(".relayCardWrapper2")
//   .not(".slick-initialized")
//   .slick({
//     autoplay: true,
//     autoplaySpeed: 3000,
//     // centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: {
//           arrows: true,
//           // centerMode: true,
//           centerPadding: "1rem",
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           // centerMode: true,
//           centerPadding: "60px",
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           centerMode: true,
//           centerPadding: "0px",
//           slidesToShow: 1,
//         },
//       },
//     ],
//     arrows: false,
//     dots: false,
//     // prevArrow: $(".leftArrow"),
//     // nextArrow: $(".rightArrow"),
//   });
$(".meetTeam")
  .not(".slick-initialized")
  .slick({
    autoplay: false,
    // autoplaySpeed: 3000,
    // centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          // centerMode: true,
          centerPadding: "1rem",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          // centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
    arrows: false,
    dots: false,
    // prevArrow: $(".leftArrow"),
    // nextArrow: $(".rightArrow"),
  });

var collapseBtn = document.querySelectorAll(".titleAndButton .fas");
// console.log(collapseBtn);

for (let i = 0; i < collapseBtn.length; i++) {
  collapseBtn[i].parentElement.addEventListener("click", () => {
    // console.log("1");
    if (!collapseBtn[i].classList.contains("open")) {
      // collapseBtn[i].parentElement.parentElement.classList.add("activeRow");
      collapseBtn[i].classList.add("open");
      for (let j = 0; j < collapseBtn.length; j++) {
        if (i != j) {
          // var element = collapseBtn[j].parentElement.parentElement;
          // element.classList.remove("activeRow");

          collapseBtn[j].classList.remove("open");
        }
      }
    } else {
      // collapseBtn[i].parentElement.parentElement.classList.remove("activeRow");
      collapseBtn[i].classList.remove("open");
      // if (i) {
      // collapseBtn[0].classList.add("open");
      console.log(
        collapseBtn[0].parentElement.parentElement.parentElement
          .nextElementSibling.firstElementChild
      );
      // collapseBtn[0].parentElement.parentElement.classList.add("show");
      // }
    }
  });
}
