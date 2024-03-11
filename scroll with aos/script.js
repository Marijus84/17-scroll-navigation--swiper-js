"use strict";

//! get elements from DOM
const burger = document.querySelector("#burger");
const links = document.querySelector(".links");
const anchors = links.querySelectorAll("a");
const sections = document.querySelectorAll("section");

//! show/hide mobile navigation using classes
burger.addEventListener("click", function () {
  burger.classList.toggle("rotate");
  links.classList.toggle("show-nav");
});

//! on mobile navigation anchor click, hide navigation
for (const a of anchors) {
  a.addEventListener("click", function () {
    burger.classList.remove("rotate");
    links.classList.remove("show-nav");
  });
}

//! add styling class to nav button according to scroll position
window.addEventListener("scroll", function () {
  let activeSectionId;

  for (const section of sections) {
    if (window.scrollY > section.offsetTop - 300) {
      activeSectionId = section.id;

      // section.style.opacity = 1;
    }

    for (const a of anchors) {
      a.classList.remove("active");
      if ("#" + activeSectionId === a.getAttribute("href")) {
        a.classList.add("active");
      }
    }
  }
});

//! initial script
// for (const section of sections) {
//   section.style.opacity = 0;
//   section.style.transition = "0.5s";
// }

// setTimeout(() => {
//   anchors[0].classList.add("active");
//   sections[0].style.opacity = 1;
// }, 0);

AOS.init();
