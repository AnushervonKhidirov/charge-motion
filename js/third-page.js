let li = document.querySelectorAll('.our-partners-menu-item');
let underline = document.querySelector('.underline-active');

let bankItem = document.querySelectorAll('.bank-item');
let background = document.querySelectorAll('.background');

let menuWidth = document.querySelector('.our-partners-menu');
let movePlace = document.querySelector('.move-place');
let indexElem = 0;
let previous = 0;
let current = 0;

movePlace.style.width = menuWidth.clientWidth + 'px';

window.addEventListener('resize', () => movingUnderline(indexElem))
window.addEventListener('load', () => movingUnderline(indexElem))

li.forEach(function (elem, index) {
  elem.onclick = () => movingUnderline(index)
});

function movingUnderline(index) {
  indexElem = index;
  movePlace.style.width = menuWidth.clientWidth + 'px';
  underline.style.width = li[index].clientWidth + 'px';
  underline.style.left = li[index].offsetLeft + 'px';
}

bankItem.forEach(function (elem, index) {
  elem.onclick = function () {
    bankItem[index].classList.toggle('active')
    if(previous == index) return;
    bankItem[previous].classList.remove('active')
    previous = index;
  };
});
