var li = document.querySelectorAll('.our-partners-menu-item')
var underline = document.querySelector('.underline-active')

var bankItem = document.querySelectorAll('.bank-item')
var background = document.querySelectorAll('.background')

var menuWidth = document.querySelector('.our-partners-menu')
var movePlace = document.querySelector('.move-place')
var previous = 0;
var current = 0;

movePlace.style.width = menuWidth.clientWidth + 'px';

li.forEach(function (elem, index) {
  elem.onclick = function () {
    underline.style.width = elem.clientWidth + 'px';
    underline.style.left = elem.offsetLeft + 'px';
  }
})

bankItem.forEach(function (elem, index) {
  elem.onclick = function () {
    // previous = current;
    // current = index;
    //
    // if (previous == current) {
    //   previous = current - 1;
    // }

    // bankItem[previous].classList.remove('active')
    // bankItem[current].classList.toggle('active')

    bankItem[previous].classList.remove('active')
    this.classList.toggle('active')
    previous = index
  };
});
