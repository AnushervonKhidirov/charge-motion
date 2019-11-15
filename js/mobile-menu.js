let mobileMenu = document.querySelector('#menu');
let menuBlock = document.querySelector('.menu');
let menuButton = document.querySelector('.menu-button');
let mobileMenuItem = document.querySelectorAll('.menu-item');
let isOpen = true;
let timeout = true;

window.addEventListener('resize', isMobileOverflowResize);
window.addEventListener('load', isMobileOverflow);

menuButton.addEventListener('click', function() {
  toggleMenu();
});

for (let i = 0; i < mobileMenuItem.length; i++) {
  mobileMenuItem[i].addEventListener('click', closing);
};

function isMobileOverflow() {
  menuButton.style.display = 'block';
  if (document.body.clientWidth < 992) {
    window.scroll(0, 0);
    isAllowOverflow();
  } else {
    isDenyOverflow();
  };
};

function isMobileOverflowResize() {
  document.body.clientWidth < 992 ? isAllowOverflow() : isDenyOverflow();
};

function isAllowOverflow() {
  setTimeout(() => menuButton.style.opacity = 1, 0);
};

function isDenyOverflow() {
  window.scroll(0, 0);
  closing();
};

function toggleMenu() {
  if (timeout) {
    openClose();
    timeout = false;
  };
  setTimeout(() => timeout = true, 1200);
};

function openClose() {
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
