let viewImages = document.querySelector('#view-images');
let blur = document.querySelectorAll('.blur');
let imgGallary = document.querySelectorAll('.img-gallary-item');
let setImgGallary = document.querySelector('.set-img-gallary');
let exit = document.querySelector('.exit');
let activeOpacity = document.querySelectorAll('.active-opacity');
let previousImg = document.querySelector('.previous-img');
let nextImg = document.querySelector('.next-img');
let gallaryItem = document.querySelectorAll('.border-gallary');
let startContactViewIMG, endContactViewIMG, indexImgGalary;

// Events
nextImg.addEventListener('click', () => isNextIMG(imgGallary.length, 0, indexImgGalary++));
previousImg.addEventListener('click', () => isNextIMG (-1, imgGallary.length - 1, indexImgGalary--));
viewImages.addEventListener('touchstart', event => startContactViewIMG = event.targetTouches[0].pageX);
viewImages.addEventListener('touchmove', event => endContactViewIMG = event.targetTouches[0].pageX);
viewImages.addEventListener('touchstart', controlSide);
exit.addEventListener('click', exitImgView);

gallaryItem.forEach(function (elem, index) {
  elem.onclick = () => openImgView(index);
});

function openImgView(index) {
  addOpenClass(index);
  setTimeout(() => opacityAndBlur(1, .7), 10);
  autoscroll(false);
};

function exitImgView() {
  opacityAndBlur(0, 0);
  setTimeout(() => document.body.classList.remove('view-img-opened'), 1000);
  if (toggleAutoscroll.innerHTML == 'on') autoscroll(true);
};

function opacityAndBlur(first, second) {
  for (var i = 0; i < activeOpacity.length; i++) {
    activeOpacity[i].style.opacity = first;
  };

  for (var i = 0; i < blur.length; i++) {
    blur[i].style.filter = `blur(${second}vw)`;
  };
};

function addOpenClass(index) {
  document.body.classList.add('view-img-opened');
  indexImgGalary = index;
  setImgGallary.src = imgGallary[index].src;
  allowed = false;
};

function autoscroll(boolean) {
  allowAutoscrollingPage = boolean;
  isAutoScrollPage();
};

function controlSide() {
  setTimeout(function() {
    if (startContactViewIMG > (endContactViewIMG + 250)) isNextIMG(imgGallary.length, 0, indexImgGalary++);
    if (startContactViewIMG < (endContactViewIMG + 250)) isNextIMG (-1, imgGallary.length - 1, indexImgGalary--);

    startContactViewIMG = undefined;
    endContactViewIMG = undefined;
  }, 300);
};

function isNextIMG (firstNum, secondNum, switchingIMG) {
  indexImgGalary == firstNum ? indexImgGalary = secondNum : switchingIMG;
  changeIMG();
};

function changeIMG() {
  setImgGallary.style.opacity = 0;

  setTimeout(function() {
    setImgGallary.src = imgGallary[indexImgGalary].src;
    setImgGallary.style.opacity = 1;
  }, 250);
};
