// const drinks = Array.from({ length: 20 }, (_, i) => `음료${i + 1} <br/>1000원`); // TODO: api get
let isPaySuccess = false // TODO: api get
const code = "123" // TODO: api get
// let x = "12", y = "25";                                                 // (dummy data) api get
const adminId = "a", adminPwd = 1;

const API_URL = 'http://43.202.61.53:9001';

// const getDrinks = async () => {
const getDrinks = () => {
  // try {
  //   const response = await fetch(`${API_URL}/drink`);
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok ' + response.statusText);
  //   }
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error('There was a problem with the fetch operation:', error);
  //   throw error;
  // }

  // 더미데이터
  const dummyData = [
    {
      "id":1,
      "drinkName":"콜라",
      "drinkPrice":1000,
      "drinkNum":10
    },
    {
      "id":2,
      "drinkName":"사이다",
      "drinkPrice":1000,
      "drinkNum":7
    },
    {
      "id":3,
      "drinkName":"녹차",
      "drinkPrice":1000,
      "drinkNum":10
    },
    {
      "id":4,
      "drinkName":"홍차",
      "drinkPrice":1000,
      "drinkNum":10
    },
    {
      "id":5,
      "drinkName":"밀크티",
      "drinkPrice":1000,
      "drinkNum":10
    },
  ];
  return dummyData;
};
/*
const setDrink = async (drink) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(drink)
    };

    const response = await fetch(`${API_URL}/pay/setDrink`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};*/
/*
const setDrinkNum = async (drinkNum) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(drinkNum)
    };

    const response = await fetch(`${API_URL}/pay/setDrinkNum`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};*/
/*
const getIsPayAvaiable = async () => {
  try {
    const response = await fetch(`${API_URL}/pay/isPayAvailable`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};*/
/*
const getPaidDrink = async (card) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    };

    const response = await fetch(`${API_URL}/pay/pay`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};*/
/*
const getCode = async (card) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    };

    const response = await fetch(`${API_URL}/pay/prepay`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};*/
/*
const getIsPrePayAvaiable = async () => {
  try {
    const response = await fetch(`${API_URL}/pay/isPrepayAvailable`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}*/
/*
const getCodeDrink = async (code) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(code)
    };

    const response = await fetch(`${API_URL}/code`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};*/

const drinks = getDrinks();

const formatNumber = (num) => (num < 10 ? '0' : '') + num.toString();

const buttonContainer = document.getElementById('drinksContainer');
const closeBtns = document.querySelectorAll('.closeBtn');

const selectDrinkDialog = document.getElementById('selectDrinkDialog');
const drinkInfo = document.getElementById('selectDrinkDialogInfo');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const drinkCountNum = document.getElementById('drinkCountNum');
let drinkCount = 0;
let drinkId = "";
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

const adminModeBtn = document.getElementById('adminModeBtn');
const adminLoginDialog = document.getElementById('adminLoginDialog');
const id = document.getElementById('id');
const pwd = document.getElementById('pwd');

// drink selection buttons, dialog
drinks.map((drink) => {
  const button = document.createElement('button');
  button.className = 'styledBtn backGreen round textWhite';
  const drinkBtnContent = `${drink.id}: ${drink.drinkName} <br> ${drink.drinkPrice}원`
  button.innerHTML = drinkBtnContent;
  button.addEventListener('click', () => {
    drinkInfo.innerHTML = drinkBtnContent;
    drinkCount = 0;
    drinkCountNum.textContent = drinkCount;
    drinkName = drink.drinkName;
    drinkId = formatNumber(drink.id);
    drinkPrice = drink.drinkPrice;
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
    console.log("count: ",drinkCount);
    console.log("id: ",drinkId);
    console.log("price: ",drinkPrice);
    // setDrink(drinkId); // api
    // setDrinkNum(drinkCount); // api
    // const payInfo = getIsPayAvaiable(); // api
    const payInfo = "12 7"; // api dummy test
    const match = payInfo.match(/^(\d+) (\d+)$/);
    let isPrepay = false;
    let x = '', y = '';

    if (match) {
      isPrepay = true;
      x = match[1];
      y = match[2];
      console.log(`x: ${x}, y: ${y}`);
    } else if (payInfo == "ok") {
      isPrepay = false;
    } else if (payInfo == "no") {
      selectDrinkDialog.close();
      return;
    }

    selectDrinkDialog.close();

    if (isPrepay) {
      // prepay dialog
      const locInfo = document.getElementById('locInfo');
      locInfo.innerHTML = `(${x}, ${y}) 위치에 다른 자판기가 있습니다`;
      prePayDialog.showModal();   
    } else {
      // pay dialog
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
      if (!isPaySuccess) {  // TODO: 결제성공 시 (api 필요) (코드수정필요)
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
      if (isPaySuccess) {  // TODO: 결제성공 시 (api 필요) (코드수정필요)
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
      if (isPaySuccess) { // TODO: 수정 필요 => 인증코드가 맞으면
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

adminModeBtn.addEventListener('click', () => {
  adminLoginDialog.showModal();
  if (id == adminId && pwd == adminPwd) {

  }
})

// Close dialog function
function closeDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  if (dialog) {
    drinkCount = 0;
    drinkId = "";
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