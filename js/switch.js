// Loading
let backgroundLoad = document.querySelector('#background-load');
let isLoad = true;

// Desctop scrolling
let scrolling = document.querySelector('.choose-third-page-menu');
let isScrolling = true;
let permission = true;
let desctopScrolling = true;

// Mobile switching
let startSwitch;
let endSwitch;

// Switch items
let dotItem = document.querySelectorAll('.dot-item');
let activeDot = document.querySelectorAll('.active-dot');
let menuItemSwitch = document.querySelectorAll('.menu-item');

// Swith position
let prevpos = 0;
let pos = 0;


// Page control
if (document.body.clientWidth > 850) {
  desctopScrolling = false;
};

window.addEventListener('resize', function () {
  if (document.body.clientWidth > 850) {
    desctopScrolling = false;
  } else {
    desctopScrolling = true;
  };
});

window.addEventListener('load', () => switching(0));


// Mouse wheel scrolling
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

  if (permission) {
    if (isScrolling) {
      findeScreenPosition(delta, 0);

      isScrolling = false;
      setTimeout(function () {
        isScrolling = true;
      }, 1200);
    };
  };
};


// Mobile switching
document.addEventListener('touchstart', function(event) {
  startSwitch = event.targetTouches[0].pageX;
})

document.addEventListener('touchmove', function(event) {
  endSwitch = event.targetTouches[0].pageX;
});

document.addEventListener('touchstart', function() {
  setTimeout(function() {
    findeScreenPosition(startSwitch, (endSwitch + 250));

    startSwitch = undefined;
    endSwitch = undefined;
  }, 300)
})


//Function of Mobile switching & Mouse wheel scrolling
function findeScreenPosition(firstPosition, secondPosition) {
  prevpos = pos;

  if (firstPosition > (secondPosition)) {
    if (pos >= dotItem.length - 1) {
      pos = 0;
    } else {
      pos++;
    };
  };

  if (firstPosition < (secondPosition)) {
    if (pos <= 0) {
      pos = dotItem.length - 1;
    } else {
      pos--;
    };
  };

  switching(pos);
}


// Switch via menu button
menuItemSwitch.forEach(function(elem, index) {
  elem.onclick = function () {
    itemSwitch(index);
  };
});

// Switch via dots buttons
dotItem.forEach(function(elem, index) {
  elem.onclick = function () {
    itemSwitch(index);
  };
});


// Function of buttons switching
function itemSwitch(index) {
  if (desctopScrolling == false && isLoad == false) {
    prevpos = pos;
    pos = index;

    switching(index);
  };
};


// Main switching
function switching(index) {
  if (isLoad) {
    index = 0;
    backgroundLoad.style.display = 'none';
    isLoad = false;
  }

  if (!isLoad) {
    changeBodyClass(index);
    activity(index);
  }
};

function changeBodyClass(index) {
  document.body.setAttribute('class', 'pos_' + index);
};

function activity(index) {
  activeDot[prevpos].style.opacity = 0;
  activeDot[pos].style.opacity = 1;
  menuItemSwitch[prevpos].classList.remove('activeMenu');
  menuItemSwitch[pos].classList.add('activeMenu');
};
