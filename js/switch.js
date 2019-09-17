let dotItem = document.querySelectorAll('.dot-item');
let activeDot = document.querySelectorAll('.active-dot');
let menuItemSwitch = document.querySelectorAll('.menu-item');
let mobileMenuItemSwitch = document.querySelectorAll('.mobile-menu-item');
let scrolling = document.querySelector('.choose-third-page-menu');
let isLoad = true;
let isScrolling = true;
let permission = true;
let desctopScrolling = true;
let prevpos = 0;
let pos = 0;

let backgroundLoad = document.querySelector('#background-load');
let content = document.querySelector('#content');

if (document.body.clientWidth > 850) {
  desctopScrolling = false;
};


window.addEventListener('resize', function () {
  // window.scroll(0, 0);
  if (document.body.clientWidth > 850) {
    desctopScrolling = false;
  } else {
    desctopScrolling = true;
  };
});

window.addEventListener('load', () => switching(0));

window.onmousewheel = window.onwheel = window.onMozMousePixelScroll = function () {
  if (desctopScrolling == false && isLoad == false) {
    mousewheelSwitch(event);
  };
};

isPermission();

function isPermission() {
  scrolling.onmouseover = function () {
    permission = false;
  };

  scrolling.onmouseout = function () {
    permission = true;
  };
};

function mousewheelSwitch(event) {
  isPermission();

  let delta = event.deltaY;

  prevpos = pos;

  if (permission) {
    if (isScrolling) {
      if (delta < 0) {
        if (pos <= 0) {
          pos = dotItem.length - 1;
        } else {
          pos--;
        };
      };

      if (delta > 0) {
        if (pos >= dotItem.length - 1) {
          pos = 0;
        } else {
          pos++;
        };
      };

      switching(pos);

      isScrolling = false;

      setTimeout(function () {
        isScrolling = true;
      }, 1200);
    };
  };
};

menuItemSwitch.forEach(function(elem, index) {
  elem.onclick = function () {
    itemSwitch(index);
  };
});

dotItem.forEach(function(elem, index) {
  elem.onclick = function () {
    itemSwitch(index);
  };
});

// Удалить
// mobileMenuItemSwitch.forEach(function(elem, index) {
//   elem.onclick = function () {
//     itemSwitch(index);
//   };
// });

function itemSwitch(index) {
  if (desctopScrolling == false && isLoad == false) {
    prevpos = pos;
    pos = index;

    switching(index);
  };
};

function switching(index) {
  if (isLoad) {
    index = 0;
    backgroundLoad.style.display = 'none';
    isLoad = false;
  }

  if (!isLoad) {
    changeBodyClass(index);
    activingDot(index);
  }
};

function changeBodyClass(index) {
  document.body.setAttribute('class', 'pos_' + index);
};

function activingDot(index) {
  activeDot[prevpos].style.opacity = 0;
  activeDot[pos].style.opacity = 1;
  menuItemSwitch[prevpos].classList.remove('activeMenu');
  menuItemSwitch[pos].classList.add('activeMenu');
};
