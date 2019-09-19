let obj = {
  srcChargeMotion: 'images/charge motion.png',
  handSRC: 'images/hand.png',
  tableSRC: 'images/table.png'
};

let srcChargeMotion = document.querySelector('.create-src-chargeMotion');
let srcHand = document.querySelector('.create-src-hand');
let srcTable = document.querySelector('.create-src-table');
let shine = document.querySelector('.charge-motion-circle-background');

createBackground();

window.addEventListener('resize', function() {
  if (document.body.clientWidth < 992) {
    createBackground();
  }
})

function createBackground() {
  if (document.body.clientWidth < 992) {
    shine.innerHTML = '<img class="" src="images/charge motion.png" draggable="false">'
  } else {
    shine.innerHTML = '';
  };
};

// random shining
// setInterval(function () {
//   if (document.body.clientWidth < 850) {
//     let shiningControl = Math.round(Math.random() * 20);
//     if (shiningControl < 5) {
//       shiningControl = 5;
//     };
//     shine.style.boxShadow = `0 0 ${shiningControl}vw #70BF4C`;
//   }
// }, 1500);

createIMG()

window.addEventListener('resize', createIMG)

function createIMG() {
  if (document.body.clientWidth > 992) {
    srcChargeMotion.src = obj.srcChargeMotion;
    srcHand.src = obj.handSRC;
    srcTable.src = obj.tableSRC;
  } else {
    srcChargeMotion.src = '';
    srcHand.src = '';
    srcTable.src = '';
  }
}
