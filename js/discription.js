let showAll = document.querySelector('.show-all');
let hideAll = document.querySelector('.hide-all');
let productType = document.querySelectorAll('.product-type');
let fullDiscriptionData = document.querySelectorAll('.full-discription-data');
let toggleProductType = document.querySelectorAll('.toggle-product-type');
let previousProduct = 0;
let presentProduct = 0;

productType[0].classList.remove('hide-product-type');
productType[0].classList.add('opacity-product-type');
fullDiscriptionData[0].classList.remove('hide-product-type');

showAll.addEventListener('click', openDiscription);
hideAll.addEventListener('click', closeDiscription);

toggleProductType.forEach((elem, index) => {
  elem.onclick = () => {
    previousProduct = presentProduct;
    presentProduct = index;

    if (previousProduct == presentProduct) return;

    toggleProductType[previousProduct].classList.remove('active-product');
    toggleProductType[presentProduct].classList.add('active-product');

    setTimeout(function () {
      productType[previousProduct].classList.remove('opacity-product-type');
    }, 0);

    setTimeout(function () {
      productType[presentProduct].classList.remove('hide-product-type');
      productType[presentProduct].classList.add('opacity-product-type');
    }, 250);

    setTimeout(function () {
      productType[previousProduct].classList.add('hide-product-type');
    }, 500);

    fullDiscriptionData[presentProduct].classList.remove('hide-product-type');
    fullDiscriptionData[previousProduct].classList.add('hide-product-type');
  };
});

function openDiscription() {
  document.body.classList.add('open-full-discription');
  setTimeout(function () {
    document.body.classList.add('opacity-full-discription');
  }, 0);

  allowed = false;

  for (let i = 0; i < blur.length; i++) {
    blur[i].style.filter = 'blur(1vw)';
    blur[0].style.filter = 'blur(0vw)';
  };
};

function closeDiscription() {
  document.body.classList.remove('opacity-full-discription');
  setTimeout(function () {
    document.body.classList.remove('open-full-discription');
  }, 300);

  for (let i = 0; i < blur.length; i++) {
    blur[i].style.filter = 'blur(0vw)';
  };
};
