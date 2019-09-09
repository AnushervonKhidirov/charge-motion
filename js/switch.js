var dotItem = document.querySelectorAll('.dot-item');
var lengthItem = dotItem.length - 1;
var activeDot = document.querySelectorAll('.active-dot');
var menuItem = document.querySelectorAll('.menu-item');
var scrolling = document.querySelector('.choose-third-page-menu');
var isScrolling = true;
var permission = true;
var numberIndex = 0;

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

  if (permission) {
    if (isScrolling) {
      if (delta < 0) {
        if (numberIndex <= 0) {
          numberIndex = lengthItem;
        } else {
          numberIndex--;
        };
      };

      if (delta > 0) {
        if (numberIndex >= lengthItem) {
          numberIndex = 0;
        } else {
          numberIndex++;
        };
      };

      switching(numberIndex);

      isScrolling = false;

      setTimeout(function () {
        isScrolling = true;
      }, 1200);
    };
  };
};

menuItem.forEach(function(elem, index) {
  elem.onclick = function () {
    numberIndex = index;

    switching(index);
  };
})

dotItem.forEach(function(elem, index) {
  elem.onclick = function () {
    numberIndex = index;

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
  for (var i = 0; i < activeDot.length; i++) {
    activeDot[i].style.opacity = 0;
  };

  activeDot[index].style.opacity = 1;
};
