"use strict";

const images = [
  "./assets/img/lake-g01122534f_1920.jpg",
  "./assets/img/mountain-g2dc76fd67_1920.jpg",
  "./assets/img/sunset-g31b5ee10b_1920.jpg",
];
const headerDiv = document.querySelector(".header");
const dots = document.querySelectorAll(".dot");
const linkLogo = document.querySelector(".nav-logo a");
const linkMenu = document.querySelectorAll('.navbar li:nth-child(n):not(:first-child)');
const navMenu = document.querySelector(".navbar");
let position = 0;
const numberImages = images.length;

const displayCarousel = () => {
  dots[position].classList.remove("active");
  position = (position + 1) % numberImages;
  headerDiv.style.backgroundImage = "url('" + images[position] + "')";
  dots[position].classList.add("active");
};

const toggleMenu = (event) => {
  if (window.matchMedia("(max-width: 720px)").matches) {
    navMenu.style.backgroundColor = "transparent";
    if (linkMenu[0].style.visibility === "visible") {
      linkMenu.forEach(element => {
        element.style.visibility = "hidden";
      });
    }
    else {
      linkMenu.forEach(element => {
        element.style.visibility = "visible";
      });
    }
  }
  else {
    if (navMenu.style.backgroundColor === "transparent") {
      navMenu.style.backgroundColor = "white";
      linkMenu.forEach(element => {
        element.style.visibility = "visible";
      });
    }
    else {
      navMenu.style.backgroundColor = "transparent";
      linkMenu.forEach(element => {
        element.style.visibility = "hidden";
      });
    }
  }
};

headerDiv.style.backgroundImage = "url('" + images[position] + "')";
dots[position].classList.add("active");
navMenu.style.backgroundColor = "white";
linkLogo.addEventListener("click", toggleMenu);
setInterval(displayCarousel, 2000);


