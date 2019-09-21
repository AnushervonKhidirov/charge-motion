// Others variable
let allowAutoscrollingPage = confirm('Включить автопрокрутку страниц?');
let timerLine = document.querySelector('#timer-line');

// Setting items
let setting = document.querySelector('#setting');
let settingOpacity = document.querySelector('.setting-items');
let getSettingValueButton = document.querySelector('.set')
let toggleSetting = document.querySelector('.setting-button');
let previousTimer = false;
let fillLine;

// Value
let toggleAutoscroll = document.querySelector('.toggle-autoscroll');
let timer = document.querySelector('.timer');
let isOpened = true;
let isNumber;
let interval;
let startTimer;

toggleAutoscrollValue();
getSettingValue();


toggleAutoscroll.addEventListener('click', istoggleAutoscroll);
toggleSetting.addEventListener('click', isToggleSetting);
getSettingValueButton.addEventListener('click', getSettingValue);

function isToggleSetting() {
  if (isOpened) {
    openSetting();
  } else {
    closeSetting();
  };
};

function openSetting() {
  setting.classList.add('open-setting');

  setTimeout(function() {
    settingOpacity.style.opacity = 1;
  }, 200);
  isOpened = false;
};

function closeSetting() {
  settingOpacity.style.opacity = 0;

  setTimeout(function() {
    setting.classList.remove('open-setting');
  }, 200);
  isOpened = true;
};

function istoggleAutoscroll() {
  allowAutoscrollingPage = !allowAutoscrollingPage;
  toggleAutoscrollValue();
};

function toggleAutoscrollValue() {
  if (allowAutoscrollingPage) {
    toggleAutoscroll.innerHTML = 'on';
  } else {
    toggleAutoscroll.innerHTML = 'off';
  };
};

function getSettingValue() {
  interval = timer.value * 1000;
  verify();

  if (isNumber) {
    closeSetting();
  }

  isSetInterval();
};

function verify() {
  if (parseInt(interval) || !allowAutoscrollingPage) {
    isNumber = true;
  } else if (timer.value < 1 || timer.value > 600) {
    isNumber = false;
    alert('Число должно быть больше 0 и меньше 600')
  } else {
    isNumber = false;
    alert('Введите число.')
  };
};

function isSetInterval() {
  if (allowAutoscrollingPage && isNumber) {
    removeFillLine()
    fillTimerLine();
    clearPreviousTimer();

    startTimer = setInterval(nextPage, interval);
    previousTimer = true;
  }

  if (!allowAutoscrollingPage) {
    clearPreviousTimer()
    removeFillLine();
    previousTimer = false;
  };
};

function clearPreviousTimer() {
  if (previousTimer) {
    clearInterval(startTimer);
  };
};


function fillTimerLine() {
  fillLine = document.createElement('div');
  fillLine.classList.add('moving')
  fillLine.style.webkitAnimationDuration = `${timer.value}s`
  fillLine.style.mozAnimationDuration = `${timer.value}s`
  fillLine.style.msAnimationDuration = `${timer.value}s`
  fillLine.style.oAnimationDuration = `${timer.value}s`
  fillLine.style.animationDuration = `${timer.value}s`
  timerLine.appendChild(fillLine)

  timerLine.classList.add('hasLine')
};

function removeFillLine() {
  if (timerLine.classList.contains('hasLine')) {
    fillLine.remove();
  }
}
