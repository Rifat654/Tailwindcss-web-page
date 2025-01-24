const bar = document.getElementById("btn");
const ul = document.getElementById("nav-box");

bar.addEventListener("click", () => {
  ul.classList.toggle("left-[0%]");
});
