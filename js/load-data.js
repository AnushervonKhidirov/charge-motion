let firstBlock = document.querySelectorAll('.first-block');
let secondBlock = document.querySelectorAll('.second-block');
let thirdBlock = document.querySelectorAll('.third-block');
let imgGallaryItem = document.querySelectorAll('.img-gallary-item');
let firstProduct = document.querySelectorAll('.first-product-load');
let secondProduct = document.querySelectorAll('.second-product-load');
// let map = document.querySelector('.map');

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

// let mapURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1854.838294203212!2d68.79573968997434!3d38.569397691289744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d177a0402b97%3A0x615b5cd6560fe650!2sRegus%20-%20Dushanbe%2C%20Opera%20%26%20Ballet!5e0!3m2!1sru!2s!4v1573454411797!5m2!1sru!2s';

function loader() {
  loadMobileSlider();
  loadSlider();
  loadGallary();
  loadProductIMG();
  // loadMap();
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

// function loadMap() {
//   if (document.body.classList.contains('pos_5') && !map.classList.contains('loaded')) {
//     map.classList.add('loaded');
//     map.src = mapURL;
//   };
// };
