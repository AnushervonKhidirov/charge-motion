var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('#menu');
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
  menuLine[0].style.transform = 'translate(0vw, .8vw) rotate(45deg)';
  menuLine[1].style.opacity = 0;
  menuLine[2].style.transform = 'translate(0vw, -.8vw) rotate(-45deg)';
  menu.style.width = '100%';

  setTimeout(function() {
    menuBlock.style.opacity = 1;
  }, 500);

  isOpen = false;
};

function closing() {
  menuLine[0].style.transform = 'translate(0%, 0%) rotate(0deg)';
  menuLine[1].style.opacity = 1;
  menuLine[2].style.transform = 'translate(0%, 0%) rotate(0deg)';
  menuBlock.style.opacity = 0;

  setTimeout(function() {
    menu.style.width = '0%';
  }, 500);

  isOpen = true;
};
