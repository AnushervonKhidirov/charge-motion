let percent = document.querySelector('.percent-accumulator');
let percentItem = 0;
let charging = document.querySelector('.background-accumulator-green');
let chargingEnd = document.querySelector('.background-end-accumulator-green');

let img = document.querySelector('.phone');
let random = Math.round(Math.random() * 3);
let src = `images/phone_${random}.png`;

img.src = src


window.addEventListener('load', start);

function start() {
  charging.style.left = '0%';
  charging.style.background = '#4EFF01';

  let start = setInterval(function () {
    percentItem++;
    percent.innerHTML = percentItem;

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
    percent.innerHTML = percentItem;
    charging.style.width = width + '%';

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
    percent.innerHTML = percentItem;
    charging.style.width = width + '%';

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
    percent.innerHTML = percentItem;
    chargingEnd.style.width = width + '%';

    if (percentItem == 100) {
      clearInterval(start);
    };
  }, 1000);
};
