const navLinks = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

close.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const el = e.target;
  let id = el.href.split("#")[el.href.split("#").length - 1];
  const section = document.getElementById(id);
  section.scrollIntoView({
    behavior: "smooth",
  });
  navLinks.classList.toggle("open");
});
