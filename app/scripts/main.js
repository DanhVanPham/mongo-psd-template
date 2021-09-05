// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const btnTop = document.querySelector(".btn-top");
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".header-menu");
  const expandClass = "is-expand";
  console.log(menuToggle);
  menuToggle.addEventListener("click", toggleMenu);

  window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
      menu.classList.remove(expandClass);
    }
  });
  function toggleMenu() {
    menu.classList.toggle(expandClass);
    console.log(menu.classList);
  }

  const wedoList = document.querySelectorAll(".wedo-item-header");
  if (wedoList) {
    [...wedoList].forEach((item) =>
      item.addEventListener("click", function (e) {
        const content = e.target.nextElementSibling;
        [...wedoList].forEach((item) => {
          if (item !== e.target) {
            item.nextElementSibling.classList.remove("is-active");
            item.lastElementChild.classList.remove("fa-angle-down");
            item.lastElementChild.classList.add("fa-angle-up");
          }
        });
        content.classList.toggle("is-active");
        const icon = e.target.querySelector(".wedo-item-arrow");
        icon.classList.toggle("fa-angle-down");
        icon.classList.toggle("fa-angle-up");
      })
    );
  }

  window.addEventListener("scroll", function () {
    const windowScrollTop = this.window.pageYOffset;
    if (
      windowScrollTop > header.clientHeight / 2 &&
      !btnTop.classList.contains("visible")
    ) {
      btnTop.classList.add("visible");
    } else if (windowScrollTop < header.clientHeight / 2) {
      btnTop.classList.remove("visible");
    }
  });

  $(document).ready(function () {
    $(".quotes-container").slick({
      autoplay: true,
      arrows: true,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  });
});
