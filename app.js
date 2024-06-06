const drinks = Array.from({ length: 20 }, (_, i) => `음료${i + 1} <br/>1000원`); // TODO: api get
const isPrepay = true // TODO: api get
const code = "123" // TODO: api get
let x = 12, y = 25;                                                 // (dummy data) api get

const buttonContainer = document.getElementById('drinksContainer');
const closeBtns = document.querySelectorAll('.closeBtn');

const selectDrinkDialog = document.getElementById('selectDrinkDialog');
const drinkInfo = document.getElementById('selectDrinkDialogInfo');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const drinkCountNum = document.getElementById('drinkCountNum');
let drinkCount = 0;
let drinkName = "";
let drinkPrice = 0;
const purchaseBtn = document.getElementById('purchaseBtn');

const payDialog = document.getElementById('payDialog');
const prePayDialog = document.getElementById('prePayDialog');
const payBtn = document.getElementById('payBtn');
const prePayBtn = document.getElementById('prePayBtn');
const enterCardInfoDialog = document.getElementById('enterCardInfoDialog');

const cardInfoEnterBtn = document.getElementById('cardInfoEnterBtn');
const successPayDialog = document.getElementById('successPayDialog');
const failPayDialog = document.getElementById('failPayDialog');
const issueCodeDialog = document.getElementById('issueCodeDialog');

const enterCodeBtn = document.getElementById('enterCodeBtn');
const enterCodeDialog = document.getElementById('enterCodeDialog');

// drink selection buttons, dialog
drinks.map((drink) => {
  const button = document.createElement('button');
  button.className = 'styledBtn backGreen round textWhite';
  button.innerHTML = drink;
  button.addEventListener('click', () => {
    drinkInfo.innerHTML = drink;
    drinkCount = 0;
    drinkCountNum.textContent = drinkCount;
    selectDrinkDialog.showModal();
  });
  buttonContainer.appendChild(button);
});

decrementBtn.addEventListener('click', () => {
  if (drinkCount > 0) {
    drinkCount--;
    drinkCountNum.textContent = drinkCount;
  }
});

incrementBtn.addEventListener('click', () => {
  if (drinkCount <= 99) {
    drinkCount++;
    drinkCountNum.textContent = drinkCount;    
  }
});

purchaseBtn.addEventListener('click', () => {
  if (drinkCount) {
    console.log(drinkInfo.innerText); // TOOD: api
    console.log(drinkCount);
    selectDrinkDialog.close();

    if (isPrepay) {
      // prepay dialog
      const locInfo = document.getElementById('locInfo');
      locInfo.innerHTML = `(${x}, ${y}) 위치에 다른 자판기가 있습니다`;
      prePayDialog.showModal();   
    } else {
      // pay dialog
      drinkPrice = parseInt(drinkInfo.innerText.split(' ')[1].replace('원', ''), 10);
      const priceInfo = document.getElementById('priceInfo');
      priceInfo.innerHTML = `음료 ${drinkCount}개 총액 ${drinkPrice*drinkCount}원`;
      payDialog.showModal();         
    }
  }
});

payBtn.addEventListener('click', () => {
  payDialog.close();
  enterCardInfoDialog.showModal();

  cardInfoEnterBtn.addEventListener('click', () => {
    const cardInfo = document.getElementById('cardInfo').value;
    if (cardInfo) {
      enterCardInfoDialog.close();
      if (!isPrepay) {  // TODO: 결제성공 시 (api 필요) (코드수정필요)
        successPayDialog.showModal();
      } else { // 결제실패 시
        failPayDialog.showModal();
      }
    }
  });
});

prePayBtn.addEventListener('click', () => {
  prePayDialog.close();
  enterCardInfoDialog.showModal();

  cardInfoEnterBtn.addEventListener('click', () => {
    const cardInfo = document.getElementById('cardInfo').value;
    if (cardInfo) {
      enterCardInfoDialog.close();
      if (isPrepay) {  // TODO: 결제성공 시 (api 필요) (코드수정필요)
        const issueCodeContent = document.getElementById('issueCodeContent');
        issueCodeContent.innerHTML = `인증코드는 ${code} 입니다. <br> 음료 ${drinkCount}개를 (${x}, ${y}) 위치의 <br> 자판기에서 수령하세요.`;
        issueCodeDialog.showModal();
      } else { // 결제실패 시
        failPayDialog.showModal();
      }
    }
  });
});

enterCodeBtn.addEventListener('click', () => {
  enterCodeDialog.showModal();

  const codeConfirmBtn = document.getElementById('codeConfirmBtn');
  codeConfirmBtn.addEventListener('click', () => {
    const EnteredCode = document.getElementById('code').value;
    if (EnteredCode) {
      if (isPrepay) { // TODO: 수정 필요 => 인증코드가 맞으면
        const successEnterDialog = document.getElementById('successEnterDialog');
        enterCodeDialog.close();
        successEnterDialog.showModal();
      } else {
        const failEnterDialog = document.getElementById('failEnterDialog');
        enterCodeDialog.close();
        failEnterDialog.showModal();
      }      
    }
  });
});

// Close dialog function
function closeDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  if (dialog) {
    drinkCount = 0;
    drinkName = "";
    drinkPrice = 0;
    dialog.close();
  }
}

// Add event listener to each close button
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const dialogId = btn.closest('dialog').id;
    closeDialog(dialogId);
  });
});