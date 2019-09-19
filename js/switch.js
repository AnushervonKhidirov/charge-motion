// Loading
let backgroundLoad = document.querySelector('#background-load');
let isLoad = true;

// Desctop scrolling
let scrolling = document.querySelector('#slider');
let viewIMG = document.querySelector('#view-images');
let isScrolling = true;
let allowed = true;
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
if (document.body.clientWidth > 992) {
  desctopScrolling = false;
};

window.addEventListener('resize', function () {
  if (document.body.clientWidth > 992) {
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

isAllow();

function isAllow() {
  scrolling.onmouseover = viewIMG.onmouseover = function () {
    allowed = false;
  };

  scrolling.onmouseout = viewIMG.onmouseout = function () {
    allowed = true;
  };
};

function mousewheelSwitch(event) {
  isAllow();

  let delta = event.deltaY;

  if (allowed) {
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
  if (firstPosition > (secondPosition)) {
    nextSlide();
  };

  if (firstPosition < (secondPosition)) {
    previousSlide();
  };
}

// Next & Previous slide
function nextSlide() {
  prevpos = pos;

  if (pos >= dotItem.length - 1) {
    pos = 0;
  } else {
    pos++;
  };

  switching(pos);
}

function previousSlide() {
  prevpos = pos;

  if (pos <= 0) {
    pos = dotItem.length - 1;
  } else {
    pos--;
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
