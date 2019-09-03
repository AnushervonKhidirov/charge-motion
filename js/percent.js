var percent = document.querySelector('.percent-accumulator');
var percentItem = 0;
var charging = document.querySelector('.background-accumulator-green');
var chargingEnd = document.querySelector('.background-end-accumulator-green');

window.addEventListener('load', start);

function start() {
  charging.style.left = '0%';
  charging.style.background = '#4EFF01';

  var start = setInterval(function () {
    percentItem++;
    percent.innerHTML = percentItem;

    if (percentItem == 80) {
      clearInterval(start);
      firstPartChrage();
    };
  }, 25);
};

function firstPartChrage() {
  var width = 88;
  var start = setInterval(function () {
    percentItem++;
    width++;
    percent.innerHTML = percentItem;
    charging.style.width = width + '%';

    if (percentItem == 90) {
      clearInterval(start);
      secondPartChrage();
    };
  }, 2000);
}

function secondPartChrage() {
  var width = 98;
  var start = setInterval(function () {
    percentItem++;
    width += 0.5;
    percent.innerHTML = percentItem;
    charging.style.width = width + '%';

    if (percentItem == 94) {
      clearInterval(start);
      thirdPartChrage()
    };
  }, 5000);
}

function thirdPartChrage() {
  var width = 16.5;
  var start = setInterval(function () {
    percentItem++;
    width += 16.5;
    percent.innerHTML = percentItem;
    chargingEnd.style.width = width + '%';

    if (percentItem == 100) {
      clearInterval(start);
    };
  }, 1000);
}
