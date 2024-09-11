const hiddenElements = document.querySelectorAll(".hidden");
const sliders = document.querySelectorAll(".slider-container");
const logo = document.querySelector(".logo");
const navLinks = document.querySelector(".nav-links");
const projectsContainer = document.querySelector(".projects-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    // else entry.target.classList.remove("show");
  });
});

hiddenElements.forEach((el) => observer.observe(el));

let theme = 2;
setInterval(() => {
  document.querySelector("body").classList = `theme--${theme}`;
  theme = (theme % 3) + 1;
}, 4000);

const projectWidth =
  +getComputedStyle(projectsContainer).getPropertyValue("--project-width");
console.log(projectWidth);

const maxTranslate = [...sliders].map(
  (slider) => (slider.querySelectorAll("img").length - 1) * -projectWidth
);

setInterval(() => {
  sliders.forEach((slider, i) => {
    const translate = +getComputedStyle(slider).translate.slice(0, -2);

    slider.style.translate = `${
      translate == maxTranslate[i] ? 0 : translate + -projectWidth
    }px 0`;
  });
}, 2000);

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    logo.style.position = "fixed";
    logo.style.left = "20px";
    logo.style.top = "20px";
  } else if (window.scrollY < 100) {
    logo.style.position = "static";
  }
});

window.addEventListener("load", () => {});
