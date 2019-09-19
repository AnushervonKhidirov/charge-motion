let blur = document.querySelectorAll('.blur');
let imgGallary = document.querySelectorAll('.img-gallary-item');
let setImgGallary = document.querySelector('.set-img-gallary');
let exit = document.querySelector('.exit');
let activeOpacity = document.querySelectorAll('.active-opacity');
let previousImg = document.querySelector('.previous-img');
let nextImg = document.querySelector('.next-img');

let indexImgGalary = 0;

imgGallary.forEach(function (elem, index) {
  elem.onclick = function () {
    document.body.classList.add('view-img-opened');
    indexImgGalary = index;
    setImgGallary.src = elem.src;

    setTimeout(function () {
      for (var i = 0; i < activeOpacity.length; i++) {
        activeOpacity[i].style.opacity = 1;
      };

      blur[0].style.filter = 'blur(.7vw)';
      blur[1].style.filter = 'blur(.7vw)';
    }, 10);
  };
});

exit.onclick = function () {
  for (var i = 0; i < activeOpacity.length; i++) {
    activeOpacity[i].style.opacity = 0;
  };

  blur[0].style.filter = 'blur(0vw)';
  blur[1].style.filter = 'blur(0vw)';
  setTimeout(function () {
    document.body.classList.remove('view-img-opened');
  }, 1000);
};

nextImg.onclick = function () {
  if (indexImgGalary >= imgGallary.length - 1) {
    indexImgGalary = 0;
  } else {
    indexImgGalary++;
  };
  changeIMG();
};

previousImg.onclick = function () {
  if (indexImgGalary <= 0) {
    indexImgGalary = imgGallary.length - 1;
  } else {
    indexImgGalary--;
  };
  changeIMG();
};

function changeIMG() {
  setImgGallary.style.opacity = 0;

  setTimeout(function() {
    setImgGallary.src = imgGallary[indexImgGalary].src;
    setImgGallary.style.opacity = 1;
  }, 250)
};
