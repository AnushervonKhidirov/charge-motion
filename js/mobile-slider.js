let sliderMobile = document.querySelector('#slider-mobile');
let slideItem = document.querySelectorAll('.slide-item-mobile');
let slideIMG = document.querySelectorAll('.slide-img');
let dotsBlock = document.querySelector('.dots-block');
let previousSlide = document.querySelector('.previous-slide-item');
let nextSlide = document.querySelector('.next-slide-item');
let movePosition = true;
let dotsItem, newSliderItem, newSlideIMG, startContactSliderMobile, endContactSliderMobile;

let previousPos = 0;
let posMobile = 1;
let nextPos = 2;

let prevDot = 0;
let presDot = 0;

let objData = [
  'images/slide_1.jpg',
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg',
  'images/slide_5.jpg',
  'images/slide_6.jpg',
  'images/slide_7.jpg'
];

// create the dots
for (let i = 0; i < objData.length; i++) {
  let dots = document.createElement('div');
  dots.classList.add('dots-itemt');
  dotsBlock.appendChild(dots);
  dotsItem = document.querySelectorAll('.dots-itemt');
  dotsItem[0].classList.add('active-slider-dot');
};

// switching with dots
dotsItem.forEach(function (elem, index) {
  elem.onclick = function () {
    let toAnySide = objData.length / 2;

    if ((index - presDot) <= toAnySide && ((index - presDot) > 0 || (index - presDot) <= -toAnySide)) {
      let timer = setInterval(() => {

        if (dotsItem[index].classList.contains('active-slider-dot')) clearInterval(timer);

        toRight(index);
      }, 100);
    };

    if ((index - presDot) > toAnySide || (index - presDot) < 0 && (index - presDot) > -toAnySide) {
      let timer = setInterval(() => {
        toLeft(index);

        if (dotsItem[index].classList.contains('active-slider-dot')) clearInterval(timer);
      }, 100);
    };
  };
});

// switching with img
previousSlide.addEventListener('click', toLeft);
nextSlide.addEventListener('click', toRight);

// switching with thouch
sliderMobile.addEventListener('touchstart', function(event) {
  startContactSliderMobile = event.targetTouches[0].pageX;
});

sliderMobile.addEventListener('touchmove', function(event) {
  endContactSliderMobile = event.targetTouches[0].pageX;
});

sliderMobile.addEventListener('touchend', function() {
  if (startContactSliderMobile > (endContactSliderMobile + 50)) toRight();
  if (endContactSliderMobile > (startContactSliderMobile + 50)) toLeft();

  startContactSliderMobile = undefined;
  endContactSliderMobile = undefined;
});

// functions
function toRight() {
  if (movePosition) {
    movePosition = false;

    previousPos = posMobile;
    posMobile = nextPos;
    nextPos++;

    prevDot = presDot;
    presDot++;

    if (nextPos == objData.length) nextPos = 0;
    if (presDot >= objData.length) presDot = 0;

    dotsItem[prevDot].classList.remove('active-slider-dot');
    dotsItem[presDot].classList.add('active-slider-dot');

    sliderMobile.classList.add('to-right');

    returnPosition();
    setTimeout(() => movePosition = true, 110);
  };
};

function toLeft() {
  if (movePosition) {
    movePosition = false;

    nextPos = posMobile;
    posMobile = previousPos;
    previousPos--;

    prevDot = presDot;
    presDot--;

    if (previousPos < 0) previousPos = objData.length - 1;
    if (presDot <= -1) presDot = objData.length - 1;

    dotsItem[prevDot].classList.remove('active-slider-dot');
    dotsItem[presDot].classList.add('active-slider-dot');

    sliderMobile.classList.add('to-left');

    returnPosition();
    setTimeout(() => movePosition = true, 110);
  };
};

function returnPosition() {
  setTimeout(function () {
    for (var i = 0; i < slideItem.length; i++) {
      slideItem[i].style.transition = '0s';
    };

    sliderMobile.classList.remove('to-right');
    sliderMobile.classList.remove('to-left');

    slideIMG[0].src = objData[previousPos];
    slideIMG[1].src = objData[posMobile];
    slideIMG[2].src = objData[nextPos];

    setTimeout(function () {
      for (var i = 0; i < slideItem.length; i++) {
        slideItem[i].style.transition = '.1s';
      };
    }, 50);
  }, 100);
};
