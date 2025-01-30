// nav bar responsive design start
const bar = document.getElementById("btn");
const ul = document.getElementById("nav");

bar.addEventListener("click", () => {
  ul.classList.toggle("left-[0%]");
  bar.classList.toggle("ri-close-large-line");
  console.log("js working");
});
// nav bar responsive design end

// custom swiper js slider code//
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
