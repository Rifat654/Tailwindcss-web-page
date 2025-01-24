// nav bar responsive design start
const bar = document.getElementById("btn");
const ul = document.getElementById("nav-box");

bar.addEventListener("click", () => {
  ul.classList.toggle("left-[0%]");
  bar.classList.toggle("ri-close-large-line");
});
// nav bar responsive design end
