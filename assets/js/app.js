"use strict";

const images = [
  "./assets/img/lake-g01122534f_1920.jpg",
  "./assets/img/mountain-g2dc76fd67_1920.jpg",
  "./assets/img/sunset-g31b5ee10b_1920.jpg",
];
const headerDiv = document.querySelector(".header");
const dots = document.querySelectorAll(".dot");
const linkLogo = document.querySelector(".nav-logo");
const navMenu = document.querySelector(".item");
let position = 0;
const numberImages = images.length;

const displayCarousel = () => {
  dots[position].classList.remove("active");
  position = (position + 1) % numberImages;
  headerDiv.style.backgroundImage = "url('" + images[position] + "')";
  dots[position].classList.add("active");
};

const toggleMenu = (event) => {
  if (navMenu.style.visibility==="visible") {
    navMenu.style.visibility="hidden";
  }
  else {
    navMenu.style.visibility="visible";
  }
};

headerDiv.style.backgroundImage = "url('" + images[position] + "')";
dots[position].classList.add("active");
linkLogo.addEventListener("click", toggleMenu);
setInterval(displayCarousel, 2000);


