'use strict';
const navLinks = document.querySelector('.nav--links__container');
const navLink = document.querySelectorAll('.nav--link');
const hamBurger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const arrLeft = document.querySelector('.arrow--left');
const arrRight = document.querySelector('.arrow--right');
const proImages = document.querySelectorAll('.project--img');
const logo = document.querySelector('.logo');
const allSections = document.querySelectorAll('.section');
const btn = document.querySelector('.btn');

// FUNCTIONS

const navFunction = function () {
  navLinks.classList.toggle('active');
  hamBurger.classList.toggle('ham--active');
  overlay.classList.toggle('overlay--active');
};
// EVEMT LISTENER
btn.addEventListener('click', function (e) {
  e.preventDefault();
  const scrollSec = document.querySelector(`${this.getAttribute('href')}`);
  const cords = scrollSec.getBoundingClientRect();
  console.log(cords.top);
  window.scrollTo({
    top: cords.top + window.pageYOffset,
    left: cords.left + window.pageXOffset,
    behavior: 'smooth',
  });
});
hamBurger.addEventListener('click', navFunction);
overlay.addEventListener('click', navFunction);
let currentSlide = 100;

// SLIDE LISTENERS
arrRight.addEventListener('click', function (e) {
  currentSlide -= 100;
  if (currentSlide === -400) {
    currentSlide = 100;
    proImages.forEach((img) => {
      const sr = img.getAttribute('data-slide');
      img.style.transform = `translateX(${currentSlide - 100}%)`;
    });
  } else {
    proImages.forEach((img) => {
      const sr = img.getAttribute('data-slide');
      img.style.transform = `translateX(${currentSlide - 100}%)`;
    });
  }
});

arrLeft.addEventListener('click', function (e) {
  currentSlide += 100;
  console.log(currentSlide);
  if (currentSlide === 200) {
    currentSlide -= 500;
    proImages.forEach((img) => {
      const sr = img.getAttribute('data-slide');
      img.style.transform = `translateX(${currentSlide - 100}%)`;
    });
  }
  proImages.forEach((img) => {
    const sr = img.getAttribute('data-slide');
    img.style.transform = `translateX(${currentSlide - 100}%)`;
  });
});
logo.addEventListener('click', function () {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
});
// NAV LINKS LISTENTER
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.classList.contains('link')) return;

  const val = e.target.getAttribute('href');
  const cords = document.querySelector(`${val}`).getBoundingClientRect();
  window.scrollTo({
    top: cords.top + window.pageYOffset,
    left: cords.left + window.pageXOffset,
    behavior: 'smooth',
  });
  navFunction();
});

// OBSERVIR
const obsFun = function (entries, obs) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.toggle('show');
    obs.unobserve(entry.target);
  }
};
const obs = new IntersectionObserver(obsFun, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((sec) => {
  obs.observe(sec);
  sec.classList.add('show');
});
