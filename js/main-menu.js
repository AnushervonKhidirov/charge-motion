var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('#menu');
var topMenu = document.querySelector('#top-menu');
var menuBlock = document.querySelector('.menu');
var menuItem = document.querySelectorAll('.menu-item');
var menuLine = document.querySelectorAll('.menu-line');
var isOpen = true;

menuButton.style.opacity = 1;
menuButton.addEventListener('click', toggleMenu);

for (var i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', toggleMenu);
};

function toggleMenu() {
  if (isOpen) {
    opening();
  } else {
    closing();
  };
};

function opening() {
  topMenu.classList.add('openMenu');

  setTimeout(function() {
    menuBlock.style.opacity = 1;
  }, 500);

  isOpen = false;
};

function closing() {
  menuBlock.style.opacity = 0;

  setTimeout(function() {
    topMenu.classList.remove('openMenu');
  }, 500);

  isOpen = true;
};
