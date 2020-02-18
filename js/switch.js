let preloader = document.querySelector('#preloader');
let content = document.querySelector('#content');
let scrolling = document.querySelector('#slider');
let scrollingMobile = document.querySelector('#slider-mobile');
let startContact, endContact;
let dotItem = document.querySelectorAll('.dot-item');
let activeDot = document.querySelectorAll('.active-dot');
let menuItemSwitch = document.querySelectorAll('.switch-menu');
let isScrolling = true;
let allowed = true;
let isLoad = true;
let prevpos = 0;
let pos = 0;

let logo = document.querySelector('#logo');

logo.onclick = () => itemSwitch(0);

window.addEventListener('load', () => isSwitchingPage(0));

// Mouse wheel scrolling
window.onmousewheel = window.onwheel = window.onMozMousePixelScroll = function () {
  if (isLoad == false) mousewheelSwitch(event);
};

// Mobile switching
document.addEventListener('touchstart', function(event) {
  startContact = event.targetTouches[0].pageY;
});

document.addEventListener('touchmove', function(event) {
  endContact = event.targetTouches[0].pageY;
});

document.addEventListener('touchend', function() {
  setTimeout(function() {
    findeScreenPosition(startContact, endContact, 100);

    startContact = undefined;
    endContact = undefined;
  }, 300)
});

scrolling.onmousemove = scrolling.ontouchmove = scrollingMobile.ontouchmove = () => isAllow(!allowed, false);
content.onmousemove = content.ontouchmove = () => isAllow(allowed, true);

function isAllow(allowing, boolean) {
  if (allowing) return;
  allowed = boolean;
};

function mousewheelSwitch(event) {
  let delta = event.deltaY;

  if (allowed && isScrolling) {
    findeScreenPosition(delta, 0, 0);

    isScrolling = false;
    setTimeout(() => isScrolling = true, 1200);
  };
};

function findeScreenPosition(firstPosition, secondPosition, sum) {
  // if (allowed) {
    if (firstPosition > (secondPosition + sum)) nextPage();
    if (secondPosition > (firstPosition + sum)) previousPage();
  // };
};


function nextPage() {
  prevpos = pos;
  pos >= dotItem.length - 1 ? pos = 0 : pos++;
  isSwitchingPage(pos);
};

function previousPage() {
  prevpos = pos;
  pos <= 0 ? pos = dotItem.length - 1 : pos--;
  isSwitchingPage(pos);
};

// Switch via menu button
menuItemSwitch.forEach(function(elem, index) {
  elem.onclick = function () {
    if (allowed) {
      itemSwitch(index);
    };
  };
});

// Switch via dots buttons
dotItem.forEach(function(elem, index) {
  elem.onclick = function () {
    itemSwitch(index);
  };
});

function itemSwitch(index) {
  if (isLoad == false) {
    prevpos = pos;
    pos = index;

    isSwitchingPage(index);
  };
};

function isSwitchingPage(index) {
  if (isLoad) {
    index = 0;
    preloader.style.display = 'none';
    isLoad = false;
  };

  if (!isLoad) {
    changeBodyClass();
    activity();
  };

  isAutoScrollPage();
};

function changeBodyClass() {
  document.body.classList.remove('pos_' + prevpos);
  document.body.classList.add('pos_' + pos);
  if (document.body.classList.contains('english-page')) {
    document.body.classList.remove('pos_' + prevpos + '_en');
    document.body.classList.add('pos_' + pos + '_en');
  };

  loader()
};

function activity() {
  activeDot[prevpos].style.opacity = 0;
  activeDot[pos].style.opacity = 1;
  menuItemSwitch[prevpos].classList.remove('activeMenu');
  menuItemSwitch[pos].classList.add('activeMenu');
};
