let mobileMenu = document.querySelector('#mobile-menu');
let menuBlock = document.querySelector('.mobile-menu');
let menuButton = document.querySelector('.menu-button');
let mobileMenuItem = document.querySelectorAll('.mobile-menu-item');
let isOpen = true;

menuButton.style.opacity = 1;
menuButton.addEventListener('click', qwer);

for (let i = 0; i < mobileMenuItem.length; i++) {
  mobileMenuItem[i].addEventListener('click', qwer);
};

let isClose = true;

function qwer() {
  if (isClose) {
    toggleMenu();
    isClose = false;
  }
  setTimeout(() => isClose = true, 1200)
}


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
  document.body.style.overflow = 'hidden';

  setTimeout(function() {
    menuButton.classList.add('open-mobile-menu-button-transform');
    menuBlock.style.opacity = 1;
  }, 500);

  isOpen = false;
};

function closing() {
  menuBlock.style.opacity = 0;
  menuButton.classList.remove('open-mobile-menu-button-transform');
  document.body.style.overflow = 'auto';

  setTimeout(function() {
    mobileMenu.classList.remove('open-mobile-menu');
    menuButton.classList.remove('open-mobile-menu-button');
  }, 500);

  isOpen = true;
};
