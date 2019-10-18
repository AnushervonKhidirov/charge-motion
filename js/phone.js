let percent = document.querySelectorAll('.percent-accumulator');
let percentItem = 0;
let charging = document.querySelectorAll('.background-accumulator-green');
let chargingEnd = document.querySelectorAll('.background-end-accumulator-green');
let img = document.querySelectorAll('.phone');
let random = Math.round(Math.random() * 3);
let src = `images/phone_${random}.png`;

img[0].src = src;
img[1].src = src;

window.addEventListener('load', start);


// Shorten code

function start() {
  charging[0].style.left = '0%';
  charging[0].style.background = '#4EFF01';
  charging[1].style.left = '0%';
  charging[1].style.background = '#4EFF01';

  let start = setInterval(function () {
    percentItem++;
    percent[0].innerHTML = percentItem;
    percent[1].innerHTML = percentItem;

    if (percentItem == 80) {
      clearInterval(start);
      firstPartChrage();
    };
  }, 25);
};

function firstPartChrage() {
  let width = 88;
  let start = setInterval(function () {
    percentItem++;
    width++;
    percent[0].innerHTML = percentItem;
    charging[0].style.width = width + '%';
    percent[1].innerHTML = percentItem;
    charging[1].style.width = width + '%';

    if (percentItem == 90) {
      clearInterval(start);
      secondPartChrage();
    };
  }, 2000);
};

function secondPartChrage() {
  let width = 98;
  let start = setInterval(function () {
    percentItem++;
    width += 0.5;
    percent[0].innerHTML = percentItem;
    charging[0].style.width = width + '%';
    percent[1].innerHTML = percentItem;
    charging[1].style.width = width + '%';

    if (percentItem == 94) {
      clearInterval(start);
      thirdPartChrage();
    };
  }, 5000);
};

function thirdPartChrage() {
  let width = 16.5;
  let start = setInterval(function () {
    percentItem++;
    width += 16.5;
    percent[0].innerHTML = percentItem;
    chargingEnd[0].style.width = width + '%';
    percent[1].innerHTML = percentItem;
    chargingEnd[1].style.width = width + '%';

    if (percentItem == 100) {
      clearInterval(start);
    };
  }, 1000);
};
