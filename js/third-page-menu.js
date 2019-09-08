var li = document.querySelectorAll('.our-partners-menu-item')
var underline = document.querySelector('.underline-active')

var bankItem = document.querySelectorAll('.bank-item')
var background = document.querySelectorAll('.background')

var menuWidth = document.querySelector('.our-partners-menu')
var movePlace = document.querySelector('.move-place')

movePlace.style.width = menuWidth.clientWidth + 'px';

li.forEach(function (elem, index) {
  elem.onclick = function () {
    underline.style.width = elem.clientWidth + 'px';
    underline.style.left = elem.offsetLeft + 'px';
  }
})

bankItem.forEach(function (elem, index) {
  return elem.onclick = () => toggle(index);
})

function toggle(index) {
  bankItem[index].classList.toggle('active')

  var active = document.querySelectorAll('.active')

  for (var i = 0; i < bankItem.length; i++) {
    background[i].style.opacity = 0;
  }

  background[index].style.opacity = 1;


  if (active.length == 0) {
    for (var i = 0; i < bankItem.length; i++) {
      background[i].style.opacity = 0;
    }
  }

  if (active.length > 1) {
    for (var i = 0; i < bankItem.length; i++) {
      bankItem[i].classList.remove('active')
    }
    bankItem[index].classList.toggle('active')
  }
}
