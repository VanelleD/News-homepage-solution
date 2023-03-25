const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const overlay = document.getElementById("overlay");

btnMobileNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  overlay.style.display = "block";
});

overlay.addEventListener("click", function () {
  header.classList.remove("nav-open");
  overlay.style.display = "none";
});

const navLinks = document.querySelectorAll(".main-nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    navLinks.forEach((otherLink) => otherLink.classList.remove("active"));
    link.classList.add("active");
  });
});
