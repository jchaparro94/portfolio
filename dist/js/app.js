let navList = document.querySelector('.nav-list');
let timesButton = document.querySelector('.fa-times');
let burger = document.querySelector('.fa-bars');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let navLink = document.querySelectorAll('.nav-link');

// Hamburger Toggler
hamburgerMenu.addEventListener('click', function () {
  navList.classList.toggle('menu-open');
  timesButton.classList.toggle('show');
  burger.classList.toggle('hide');
});

navLink.addEventListener('click', function () {
  navList.classList.toggle('menu-open');
  timesButton.classList.toggle('show');
  burger.classList.toggle('hide');
});