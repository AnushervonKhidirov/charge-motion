let obj = {
  chargeMotionSRC: 'images/charge motion.png',
  handSRC: 'images/hand.png',
  tableSRC: 'images/table.png'
};

let srcChargeMotion = document.querySelector('.create-src-chargeMotion');
let srcHand = document.querySelector('.create-src-hand');
let srcTable = document.querySelector('.create-src-table');

createIMG()

window.addEventListener('resize', createIMG)

function createIMG() {
  if (document.body.clientWidth > 850) {
    srcChargeMotion.src = obj.chargeMotionSRC;
    srcHand.src = obj.handSRC;
    srcTable.src = obj.tableSRC;
  } else {
    srcChargeMotion.src = '';
    srcHand.src = '';
    srcTable.src = '';
  }
}
