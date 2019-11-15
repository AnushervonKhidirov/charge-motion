let firstBlock = document.querySelectorAll('.first-block');
let secondBlock = document.querySelectorAll('.second-block');
let thirdBlock = document.querySelectorAll('.third-block');
let imgGallaryItem = document.querySelectorAll('.img-gallary-item');
let firstProduct = document.querySelectorAll('.first-product-load');
let secondProduct = document.querySelectorAll('.second-product-load');

let sliderArr = [
  'images/slide_1.jpg',
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg',
  'images/slide_5.jpg',
  'images/slide_6.jpg',
  'images/slide_7.jpg'
];

let gallaryArr = [
  'images/gallary_1.png',
  'images/gallary_3.png',
  'images/gallary_6.jpg',
  'images/gallary_2.png',
  'images/gallary_4.png',
  'images/gallary_5.jpg',
  'images/gallary_7.jpg',
  'images/gallary_8.jpg',
  'images/gallary_12.jpg',
  'images/gallary_10.jpg',
  'images/gallary_11.jpg',
  'images/gallary_9.jpg'
];

let productsArr = [
  'images/gallary_3.png',
  'images/gallary_11.jpg'
];


function loader() {
  loadMobileSlider();
  loadSlider();
  loadGallary();
  loadProductIMG();
};

function loadMobileSlider() {
  if (document.body.classList.contains('pos_2') && !slideIMG[0].classList.contains('loaded')) {
    for (let i = 0; i < slideIMG.length; i++) {
      slideIMG[i].classList.add('loaded');
    }

    slideIMG[0].src = objData[0];
    slideIMG[1].src = objData[1];
    slideIMG[2].src = objData[2];
  };
};

function loadSlider() {
  if (document.body.classList.contains('pos_2') && !firstBlock[0].classList.contains('loaded')) {
    for (let i = 0; i < firstBlock.length; i++) {
      firstBlock[i].classList.add('loaded');
      secondBlock[i].classList.add('loaded');
      thirdBlock[i].classList.add('loaded');

      firstBlock[i].src = sliderArr[i];
      secondBlock[i].src = sliderArr[i];
      thirdBlock[i].src = sliderArr[i];
    };
  };
};

function loadGallary() {
  if (document.body.classList.contains('pos_3') && !imgGallaryItem[0].classList.contains('loaded')) {
    for (let i = 0; i < imgGallaryItem.length; i++) {
      imgGallaryItem[i].classList.add('loaded');
      imgGallaryItem[i].src = gallaryArr[i];
    };
  };
};

function loadProductIMG() {
  if (document.body.classList.contains('pos_4') && !firstProduct[0].classList.contains('loaded')) {
    for (let i = 0; i < firstProduct.length; i++) {
      firstProduct[i].classList.add('loaded');
      firstProduct[i].src = productsArr[0];
      secondProduct[i].src = productsArr[1];
    };
  };
};
