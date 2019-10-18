let slider = document.querySelector('#slider');

// Navigation
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let startContactSlider;
let endContactSlider;

// Geting size
let imgItem = document.querySelectorAll('.slider-block');
let first = document.querySelector('.first');
let sliderImages = document.querySelector('.slider-images');

// Seting size
let sliderSize = first.clientWidth;
let imgSize = imgItem[0].clientWidth;
let sum = 0;
let createNextSlider = (sliderSize * 2) - imgSize;

// Allow automaticly
let automaticly = true;

sliderImages.style.transform = 'translateX(-' + sliderSize + 'px)';

setInterval(function() {
  isAllowAvtomaticly();
  if (automaticly) move(sum += imgSize);
}, 2500);

function isAllowAvtomaticly() {
  slider.onmouseover = () => automaticly = false;
  slider.onmouseout = () => automaticly = true;
};

// Mobile switch slider
slider.addEventListener('touchstart', function(event) {
  startContactSlider = event.targetTouches[0].pageX;
});

slider.addEventListener('touchmove', function(event) {
  endContactSlider = event.targetTouches[0].pageX;
});

slider.addEventListener('touchstart', function() {
  automaticly = false;
  setTimeout(() => automaticly = true, 1500);

  setTimeout(function() {
    if (startContactSlider > (endContactSlider + 250)) move(sum += imgSize);
    if (startContactSlider < (endContactSlider + 250)) move(sum -= imgSize);

    startContactSlider = undefined;
    endContactSlider = undefined;
  }, 300)
})

right.addEventListener('click', () => move(sum += imgSize));
left.addEventListener('click', () => move(sum -= imgSize));

function move(side) {
  sliderImages.style.transition = '.2s';
  sliderImages.style.transform = 'translateX(-' + (sliderSize + side) + 'px)';

  if (sliderSize + side <= imgSize || sliderSize + side >= createNextSlider) {
    createNewSlide();
  };
};

function createNewSlide() {
  setTimeout(function() {
    sum = 0;
    sliderImages.style.transition = '0s';
    sliderImages.style.transform = 'translateX(-' + (sliderSize) + 'px)';
  }, 200);
};
