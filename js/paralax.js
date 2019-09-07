var paralaxPhone = document.querySelector('.phone-paralax');
var paralaxItem = document.querySelectorAll('.paralax');


window.addEventListener('mousemove', function (event) {
  var left = event.pageX / 50;
  var top = event.pageY / 33;

  for (var i = 0; i < paralaxItem.length; i++) {
    paralaxItem[i].style.transform = 'translate(-' + left + 'px, -' + top + 'px)';
  };
});
