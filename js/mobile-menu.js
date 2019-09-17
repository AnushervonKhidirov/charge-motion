let mobileMenu = document.querySelector('#mobile-menu');
let menuBlock = document.querySelector('.mobile-menu');
let menuButton = document.querySelector('.menu-button');
let mobileMenuItem = document.querySelectorAll('.mobile-menu-item');
let isOpen = true;

menuButton.style.opacity = 1;
menuButton.addEventListener('click', toggleMenu);

for (let i = 0; i < mobileMenuItem.length; i++) {
  mobileMenuItem[i].addEventListener('click', toggleMenu);
};

function toggleMenu() {
  if (isOpen) {
    opening();
  } else {
    closing();
  };
};

function opening() {
  mobileMenu.classList.add('open-mobile-menu');
  menuButton.classList.add('open-mobile-menu-button');

  setTimeout(function() {
    menuButton.classList.add('open-mobile-menu-button-transform');
    menuBlock.style.opacity = 1;
  }, 500);

  isOpen = false;
};

function closing() {
  menuBlock.style.opacity = 0;
  menuButton.classList.remove('open-mobile-menu-button-transform');

  setTimeout(function() {
    mobileMenu.classList.remove('open-mobile-menu');
    menuButton.classList.remove('open-mobile-menu-button');
  }, 500);

  isOpen = true;
};
