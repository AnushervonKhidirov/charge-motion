let allowAutoscrollingPage = false;
let timerLine = document.querySelector('#timer-line');
let setting = document.querySelector('#setting');
let getSettingValueButton = document.querySelector('.set');
let toggleSetting = document.querySelector('.setting-button');
let lang = document.querySelector('.toggle-language');
// let logo = document.querySelector('#logo');
let toggleAutoscroll = document.querySelector('.toggle-autoscroll');
let timer = document.querySelector('.timer');
let previousTimer = false;
let isOpened = true;
let fillLine, isNumber, interval, startTimer;

if (document.body.clientWidth <= 992) allowAutoscrollingPage = false;

toggleAutoscrollValue();
getSettingValue();

toggleAutoscroll.addEventListener('click', istoggleAutoscroll);
toggleSetting.addEventListener('click', isToggleSetting);
// logo.addEventListener('click', isToggleSetting);
lang.addEventListener('click', changeLanguage);
getSettingValueButton.addEventListener('click', getSettingValue);

function isToggleSetting() {
  isOpened ? togSetting('open-setting', 'add-opacity') : togSetting('add-opacity', 'open-setting');
};

function togSetting(firstClsaa, secondClsaa) {
  setting.classList.toggle(firstClsaa);
  setTimeout(() => setting.classList.toggle(secondClsaa), 200);
  isOpened = !isOpened;
};

function istoggleAutoscroll() {
  allowAutoscrollingPage = !allowAutoscrollingPage;
  toggleAutoscrollValue();
};

function toggleAutoscrollValue() {
  allowAutoscrollingPage ? toggleAutoscroll.innerHTML = 'on' : toggleAutoscroll.innerHTML = 'off';
};

function getSettingValue() {
  interval = timer.value * 1000;
  changeLocationPage();
  verify();
  if (isNumber && !isOpened) togSetting('add-opacity', 'open-setting');
  isAutoScrollPage();
};

function verify() {
  if (parseInt(interval) || !allowAutoscrollingPage) {
    isNumber = true;
  };
  if (!parseInt(interval)) {
    isNumber = false;
    alert('Введите число, Число должно быть больше 0');
  };
};

function isAutoScrollPage() {
  if (allowAutoscrollingPage && isNumber) {
    removeFillLine();
    createFillLine();
    clearPreviousTimer();
    startTimer = setInterval(nextPage, interval);
    previousTimer = true;
  };

  if (!allowAutoscrollingPage) {
    clearPreviousTimer();
    removeFillLine();
    previousTimer = false;
  };
};

function clearPreviousTimer() {
  if (previousTimer) clearInterval(startTimer);
};

function createFillLine() {
  fillLine = document.createElement('div');
  fillLine.classList.add('moving');
  fillLine.style.webkitAnimationDuration = `${timer.value}s`;
  fillLine.style.mozAnimationDuration = `${timer.value}s`;
  fillLine.style.msAnimationDuration = `${timer.value}s`;
  fillLine.style.oAnimationDuration = `${timer.value}s`;
  fillLine.style.animationDuration = `${timer.value}s`;
  timerLine.appendChild(fillLine);
  timerLine.classList.add('hasLine');
};

function removeFillLine() {
  if (timerLine.classList.contains('hasLine')) fillLine.remove();
};

function changeLanguage() {
  lang.innerHTML == 'ru' ? lang.innerHTML = 'en' : lang.innerHTML = 'ru';
};

function changeLocationPage() {
  if (lang.innerHTML == 'ru' && window.location.href == "file:///E:/Denzel%20Hawking/Programming/Works/Charge%20motion/index_en.html") {
    window.location.href = "file:///E:/Denzel%20Hawking/Programming/Works/Charge%20motion/index.html";
  };

  if (lang.innerHTML == 'en' && window.location.href == "file:///E:/Denzel%20Hawking/Programming/Works/Charge%20motion/index.html") {
    window.location.href = "file:///E:/Denzel%20Hawking/Programming/Works/Charge%20motion/index_en.html";
  };
};

// function changeLocationPage() {
//   if (lang.innerHTML == 'ru' && window.location.href == "http://chargemotion.net/en.html") {
//     window.location.href = "http://chargemotion.net";
//   };
//
//   if (lang.innerHTML == 'en' && window.location.href == "http://chargemotion.net/") {
//     window.location.href = "http://chargemotion.net/en.html";
//   };
// };
