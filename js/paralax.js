let paralaxPhone = document.querySelector('.phone-paralax');
let paralaxItem = document.querySelectorAll('.paralax');
let desctopParalax = true;

if (document.body.clientWidth < 992) {
  desctopParalax = false;
};

window.addEventListener('resize', paralaxControl);

function paralaxControl() {
  if (document.body.clientWidth < 992) {
    desctopParalax = false;
  } else {
    desctopParalax = true;
  };
};

window.addEventListener('mousemove', movingElement);

function movingElement(event) {
  if (desctopParalax) {
    let left = event.pageX / 50;
    let top = event.pageY / 33;

    for (let i = 0; i < paralaxItem.length; i++) {
      paralaxItem[i].style.transform = 'translate(-' + left + 'px, -' + top + 'px)';
    };
  };
};
