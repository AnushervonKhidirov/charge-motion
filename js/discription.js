let showAll = document.querySelector('.show-all');
let hideAll = document.querySelector('.hide-all');
let qwer = document.querySelector('.qwer')

showAll.addEventListener('click', openDiscription);
hideAll.addEventListener('click', closeDiscription);

function openDiscription() {
  document.body.classList.add('open-full-discription');
  setTimeout(function () {
    document.body.classList.add('opacity-full-discription');
  }, 0);

  allowed = false;
};

function closeDiscription() {
  document.body.classList.remove('opacity-full-discription');
  setTimeout(function () {
    document.body.classList.remove('open-full-discription');
  }, 300);
};
