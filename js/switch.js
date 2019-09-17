let dotItem = document.querySelectorAll('.dot-item');
let activeDot = document.querySelectorAll('.active-dot');
let menuItemSwitch = document.querySelectorAll('.menu-item');
let mobileMenuItemSwitch = document.querySelectorAll('.mobile-menu-item');
let scrolling = document.querySelector('.choose-third-page-menu');
let isScrolling = true;
let permission = true;
let desctopScrolling = true;
let prevpos = 0;
let pos = 0;

let isLoad = false;


if (document.body.clientWidth < 850) {
  desctopScrolling = false;
};

window.addEventListener('resize', scrollingControl);

function scrollingControl() {
  if (document.body.clientWidth < 850) {
    desctopScrolling = false;
  } else {
    desctopScrolling = true;
  };
};


window.addEventListener('load', switching(0));

window.onmousewheel = window.onwheel = window.onMozMousePixelScroll = function () {
  if (desctopScrolling) {
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
    if (desctopScrolling) {
      itemSwitch(index);
    };
  };
});

mobileMenuItemSwitch.forEach(function(elem, index) {
  elem.onclick = function () {
    if (desctopScrolling) {
      itemSwitch(index);
    };
  };
});

dotItem.forEach(function(elem, index) {
  elem.onclick = function () {
    if (desctopScrolling) {
      itemSwitch(index);
    };
  };
});

function switching(index) {
  changeBodyClass(index);
  activingDot(index);
};

function itemSwitch(index) {
  prevpos = pos;
  pos = index;

  switching(index);
}



function changeBodyClass(index) {

  if (isLoad) {
    document.body.setAttribute('class', 'pos_' + index);
  }
  else {
    window.addEventListener('load', function() {
      document.body.setAttribute('class', 'pos_' + index);
      isLoad = true;
    });
  }
};

function activingDot(index) {
  activeDot[prevpos].style.opacity = 0;
  activeDot[pos].style.opacity = 1;
  menuItemSwitch[prevpos].classList.remove('activeMenu');
  menuItemSwitch[pos].classList.add('activeMenu');
};
