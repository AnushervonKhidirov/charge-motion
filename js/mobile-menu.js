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

  setTimeout(function() {
    menuBlock.style.opacity = 1;
  }, 500);

  isOpen = false;
};

function closing() {
  menuBlock.style.opacity = 0;

  setTimeout(function() {
    mobileMenu.classList.remove('open-mobile-menu');
  }, 500);

  isOpen = true;
};
