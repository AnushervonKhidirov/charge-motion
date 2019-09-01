var dotItem = document.querySelectorAll('.dot-item');
var activeDot = document.querySelectorAll('.active-dot');

// first page
var about = document.querySelector('.about');
var aboutText = document.querySelector('.about-text');
var phone = document.querySelector('.phone-hide');
var firstOpacity = document.querySelector('.first-opacity');
var widthBentLine = document.querySelector('.width');
var firstVerticalLine = document.querySelector('.first-vertical-line');

// second page
var mission = document.querySelector('.mission');
var missionText = document.querySelector('.mission-text');
var table = document.querySelector('.table-img');
var hand = document.querySelector('.hand-img');
var secondOpacity = document.querySelectorAll('.second-opacity');
var secondVerticalLine = document.querySelector('.second-vertical-line');
var secondHorizontalLine = document.querySelector('.second-horizontal-line');

activeDot[0].style.opacity = 1;
window.addEventListener('load', firstSlide(0));



dotItem.forEach(function(elem, index) {
  elem.onclick = window.onmousewheel = window.onswipe = function () {
    for (var i = 0; i < activeDot.length; i++) {
      activeDot[i].style.opacity = 0;
    };
    activeDot[index].style.opacity = 1;

    firstSlide(index);
    secondSlide(index);
  };

  // elem.onclick = function () {
  //   for (var i = 0; i < activeDot.length; i++) {
  //     activeDot[i].style.opacity = 0;
  //   };
  //   activeDot[index].style.opacity = 1;
  //
  //   firstSlide(index);
  //   secondSlide(index);
  // };
});

function firstSlide(index) {
  if (index == 0) {
    about.style.top = '3vw';
    aboutText.style.left = '5vw';
    phone.style.bottom = '-19vw';
    widthBentLine.style.width = '100%';
    firstVerticalLine.style.height = '15vw';
    firstOpacity.style.opacity = 1;
  } else {
    about.style.top = '-5vw';
    aboutText.style.left = '-35vw';
    phone.style.bottom = '-60vw';
    widthBentLine.style.width = '0%';
    firstVerticalLine.style.height = '0vw';
    firstOpacity.style.opacity = 0;
  };
};

function secondSlide(index) {
  if (index == 1) {
    mission.style.top = '3vw';
    missionText.style.left = '5vw';
    table.style.bottom = '-7vw';
    hand.style.right = '-1.5vw';
    secondVerticalLine.style.height = '15vw';
    secondHorizontalLine.style.width = '45vw';

    for (var i = 0; i < secondOpacity.length; i++) {
      secondOpacity[i].style.opacity = 1;
    };
  } else {
    mission.style.top = '-5vw';
    missionText.style.left = '-33vw';
    table.style.bottom = '-42vw';
    hand.style.right = '-41vw';
    secondVerticalLine.style.height = '0vw';
    secondHorizontalLine.style.width = '0vw';

    for (var i = 0; i < secondOpacity.length; i++) {
      secondOpacity[i].style.opacity = 0;
    };
  };
};
