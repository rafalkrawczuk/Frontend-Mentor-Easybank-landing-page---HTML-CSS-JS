const navClose = document.querySelector("#nav-close");
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const overlay = document.querySelector(".overlay");

const toggleMenu = () => {
  navToggle.classList.toggle("display-none");
  navMenu.classList.toggle("show-menu");
  navClose.classList.toggle("display-none");

  if (navMenu.classList.contains("show-menu")) {
    overlay.style.opacity = "1";
  } else {
    overlay.style.opacity = "0";
  }
};

window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    overlay.style.opacity = "0";
  }
});

navToggle.addEventListener("click", () => toggleMenu());
navClose.addEventListener("click", () => toggleMenu());
