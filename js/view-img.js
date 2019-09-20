let viewImages = document.querySelector('#view-images');
let blur = document.querySelectorAll('.blur');
let imgGallary = document.querySelectorAll('.img-gallary-item');
let setImgGallary = document.querySelector('.set-img-gallary');
let exit = document.querySelector('.exit');
let activeOpacity = document.querySelectorAll('.active-opacity');
let previousImg = document.querySelector('.previous-img');
let nextImg = document.querySelector('.next-img');
let startContactViewIMG;
let endContactViewIMG;
let indexImgGalary = 0;

viewImages.addEventListener('touchstart', function(event) {
  startContactViewIMG = event.targetTouches[0].pageX;
})

viewImages.addEventListener('touchmove', function(event) {
  endContactViewIMG = event.targetTouches[0].pageX;
});

viewImages.addEventListener('touchstart', function() {
  setTimeout(function() {
    if (startContactViewIMG > (endContactViewIMG + 250)) {
      isNextIMG();
    };

    if (startContactViewIMG < (endContactViewIMG + 250)) {
      isPreviousIMG();
    };

    startContactViewIMG = undefined;
    endContactViewIMG = undefined;
  }, 300)
})

imgGallary.forEach(function (elem, index) {
  elem.onclick = function () {
    document.body.classList.add('view-img-opened');
    indexImgGalary = index;
    setImgGallary.src = elem.src;
    allowed = false;
    setTimeout(function () {
      for (var i = 0; i < activeOpacity.length; i++) {
        activeOpacity[i].style.opacity = 1;
      };

      for (var i = 0; i < blur.length; i++) {
        blur[i].style.filter = 'blur(.7vw)';
      }
    }, 10);
  };
});

exit.onclick = function () {
  for (var i = 0; i < activeOpacity.length; i++) {
    activeOpacity[i].style.opacity = 0;
  };

  for (var i = 0; i < blur.length; i++) {
    blur[i].style.filter = 'blur(0vw)';
  }
  setTimeout(function () {
    document.body.classList.remove('view-img-opened');
  }, 1000);
};

nextImg.addEventListener('click', isNextIMG);

function isNextIMG () {
  if (indexImgGalary >= imgGallary.length - 1) {
    indexImgGalary = 0;
  } else {
    indexImgGalary++;
  };
  changeIMG();
};

previousImg.addEventListener('click', isPreviousIMG);

function isPreviousIMG () {
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
