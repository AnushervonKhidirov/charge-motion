let mobileMenu = document.querySelector('#menu');
let menuBlock = document.querySelector('.menu');
let menuButton = document.querySelector('.menu-button');
let mobileMenuItem = document.querySelectorAll('.menu-item');
let isOpen = true;
let timeout = true;

// ----------------------------------------

window.addEventListener('resize', isMobileOverflowResize);
window.addEventListener('load', isMobileOverflow);

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
  if (document.body.clientWidth < 992) {
    isAllowOverflow();
  } else {
    isDenyOverflow();
  };
};


function isAllowOverflow() {
  setTimeout(function() {menuButton.style.opacity = 1;}, 0);
};

function isDenyOverflow() {
  window.scroll(0, 0);
  closing();
};

// ----------------------------------------

menuButton.addEventListener('click', function() {
  toggleMenu();
});

for (let i = 0; i < mobileMenuItem.length; i++) {
  mobileMenuItem[i].addEventListener('click', closing);
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




// ---------------------------------------------

// let mobileMenu = document.querySelector('#mobile-menu');
// let menuBlock = document.querySelector('.mobile-menu');
// let menuButton = document.querySelector('.menu-button');
// let mobileMenuItem = document.querySelectorAll('.mobile-menu-item');
// let isOpen = true;
// let timeout = true;
//
// window.addEventListener('resize', isMobileOverflowResize);
// window.addEventListener('load', isMobileOverflow);
//
// function isMobileOverflow() {
//   menuButton.style.display = 'block';
//   if (document.body.clientWidth < 850) {
//     window.scroll(0, 0);
//     isAllowOverflow();
//   } else {
//     isDenyOverflow();
//   };
// };
//
// function isMobileOverflowResize() {
//   if (document.body.clientWidth < 850) {
//     isAllowOverflow();
//   } else {
//     isDenyOverflow();
//   };
// };
//
// function isAllowOverflow() {
//   setTimeout(function() {menuButton.style.opacity = 1;}, 0);
//   document.body.style.overflow = 'auto';
// };
//
// function isDenyOverflow() {
//   window.scroll(0, 0);
//   document.body.style.overflow = 'hidden';
//   closing();
// };
//
// menuButton.addEventListener('click', function() {
//   toggleMenu();
// });
//
// for (let i = 0; i < mobileMenuItem.length; i++) {
//   mobileMenuItem[i].addEventListener('click', toggleMenu);
// };
//
// function toggleMenu() {
//   if (timeout) {
//     openClose();
//     timeout = false;
//   };
//   setTimeout(() => timeout = true, 1200);
// };
//
// function openClose() {
//   if (isOpen) {
//     opening();
//   } else {
//     closing();
//   };
// };
//
// function opening() {
//   mobileMenu.classList.add('open-mobile-menu');
//   menuButton.classList.add('open-mobile-menu-button');
//   document.body.style.overflow = 'hidden';
//
//   setTimeout(function() {
//     menuButton.classList.add('open-mobile-menu-button-transform');
//     menuBlock.style.opacity = 1;
//   }, 500);
//
//   isOpen = false;
// };
//
// function closing() {
//   menuBlock.style.opacity = 0;
//   menuButton.classList.remove('open-mobile-menu-button-transform');
//   document.body.style.overflow = 'auto';
//
//   setTimeout(function() {
//     mobileMenu.classList.remove('open-mobile-menu');
//     menuButton.classList.remove('open-mobile-menu-button');
//   }, 500);
//
//   isOpen = true;
// };
