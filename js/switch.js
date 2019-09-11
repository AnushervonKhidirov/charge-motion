var dotItem = document.querySelectorAll('.dot-item');
var lengthItem = dotItem.length - 1;
var activeDot = document.querySelectorAll('.active-dot');
var menuItem = document.querySelectorAll('.menu-item');
var scrolling = document.querySelector('.choose-third-page-menu');
var isScrolling = true;
var permission = true;
var prevpos = 0;
var pos = 0;

window.addEventListener('load', switching(0));

window.onmousewheel = window.onwheel = window.onMozMousePixelScroll = function () {
  mousewheelSwitch(event);
};

isPermission()

function isPermission() {
  scrolling.onmouseover = function () {
    permission = false;
    console.log(permission);
  };

  scrolling.onmouseout = function () {
    permission = true;
    console.log(permission);
  };
};

function mousewheelSwitch(event) {
  isPermission()

  var delta = event.deltaY;

  prevpos = pos

  if (permission) {
    if (isScrolling) {
      if (delta < 0) {
        if (pos <= 0) {
          pos = lengthItem;
        } else {
          pos--;
        };
      };

      if (delta > 0) {
        if (pos >= lengthItem) {
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

menuItem.forEach(function(elem, index) {
  elem.onclick = function () {
    prevpos = pos;
    pos = index;

    switching(index);
  };
})

dotItem.forEach(function(elem, index) {
  elem.onclick = function () {
    prevpos = pos;
    pos = index;

    switching(index);
  };
});

function switching(index) {
  closing();
  changeBodyClass(index);
  activingDot(index);
};

function changeBodyClass(index) {
  document.body.setAttribute('class', 'pos_' + index);
}

function activingDot(index) {
  activeDot[prevpos].style.opacity = 0;
  activeDot[pos].style.opacity = 1;
};
