const drinks = Array.from({ length: 20 }, (_, i) => `음료${i + 1} <br> 1,000원`); // TODO: api get
const buttonContainer = document.getElementById('drinksContainer');
const selectDrinkDialog = document.getElementById('selectDrinkDialog');

const drinkInfo = document.getElementById('selectDrinkDialogInfo');
const closeDialog = document.getElementById('closeBtn');
const payBtn = document.getElementById('payBtn');

const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const drinkCountNum = document.getElementById('drinkCountNum');
let drinkCount = 0;

decrementBtn.addEventListener('click', () => {
  if (drinkCount > 0) {
    drinkCount--;
    drinkCountNum.textContent = drinkCount;
  }
});

incrementBtn.addEventListener('click', () => {
  drinkCount++;
  drinkCountNum.textContent = drinkCount;
});

closeDialog.addEventListener('click', () => {
  drinkCountNum.textContent = 0;
  drinkCount = 0;
  selectDrinkDialog.close();
});

payBtn.addEventListener('click', () => {
  if (drinkCount) {
    console.log(drinkInfo.innerText); // TOOD: api post
    console.log(drinkCount);    
  }
});

// add drink buttons
drinks.map((drink) => {
  const button = document.createElement('button');
  button.className = 'styledBtn backGreen round textWhite';
  button.innerHTML = drink;
  button.addEventListener('click', () => {
    drinkInfo.innerHTML = drink;
    selectDrinkDialog.showModal();
  });
  buttonContainer.appendChild(button);
});