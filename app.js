const adminId = "a", adminPwd = 1;

const API_URL = 'http://43.202.249.230:9001';

const getDrinks = async () => {
  try {
    const response = await fetch(`${API_URL}/drink`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.text();

    // data objectification
    const lines = data.trim().split('\n');
    const splitedData = lines.map(line => {
      const [id, drinkName, drinkPrice, drinkNum] = line.split(' ');
      return {
        id: id,
        drinkName: drinkName,
        drinkPrice: parseInt(drinkPrice),
        drinkNum: parseInt(drinkNum)
      };
    });

    return splitedData;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

const setDrink = async (drink) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: drink
    };

    const response = await fetch(`${API_URL}/pay/setDrink`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.text();
    console.log('/pay/setDrink Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

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

    const data = await response.text();
    console.log('/pay/setDrinkNum Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

const getIsPayAvaiable = async () => {
  try {
    const response = await fetch(`${API_URL}/pay/isPayAvailable`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

const getPaidDrink = async (card) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: card
    };

    const response = await fetch(`${API_URL}/pay/pay`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.text();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
/*
const getCode = async (card) => {
  try {
    const requestOptions = {
      method: 'POST',
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
      method: 'POST',
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

const login = async (idPwd) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: idPwd
    };

    const response = await fetch(`${API_URL}/admin/login`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.text();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

const logout = async () => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    const response = await fetch(`${API_URL}/admin/logout`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.text();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

const manageDrink = async (drinkCodeWithNum) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: drinkCodeWithNum
    };

    const response = await fetch(`${API_URL}/admin/manage`, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.text();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

const getMyDrinks = async () => {
  try {
    const response = await fetch(`${API_URL}/admin/amount`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.text();

    // data objectification
    const lines = data.trim().split('\n');
    const splitedData = lines.map(line => {
      const [id, drinkName, drinkPrice, drinkNum] = line.split(' ');
      return {
        id: id,
        drinkName: drinkName,
        drinkPrice: parseInt(drinkPrice),
        drinkNum: parseInt(drinkNum)
      };
    });

    return splitedData;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

// const drinks = getDrinks(); // api
// const myDrink = getMyDrinks(); //
/*
const drinks = [ // api dummy
  {
    "id":"01",
    "drinkName":"콜라",
    "drinkPrice":1000,
    "drinkNum":10
  },
  {
    "id":"02",
    "drinkName":"사이다",
    "drinkPrice":1000,
    "drinkNum":7
  },
  {
    "id":"03",
    "drinkName":"녹차",
    "drinkPrice":1000,
    "drinkNum":10
  },
  {
    "id":"04",
    "drinkName":"홍차",
    "drinkPrice":1000,
    "drinkNum":10
  },
  {
    "id":"05",
    "drinkName":"밀크티",
    "drinkPrice":1000,
    "drinkNum":10
  },
];*/

const drinkPage = document.getElementById('drinkPage');
const adminPage = document.getElementById('adminPage');

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
let drinkNum = 0;
let x = "", y = "";
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

const adminDrinksContainer = document.getElementById('adminDrinksContainer');
const manageDrinkDialog = document.getElementById('manageDrinkDialog');
const manageDrinkDialogInfo = document.getElementById('manageDrinkDialogInfo');
const countDecBtn = document.getElementById('countDecBtn');
const countIncBtn = document.getElementById('countIncBtn');
const manageDrinkCountNum = document.getElementById('manageDrinkCountNum');
const manageDecBtn = document.getElementById('manageDecBtn');
const manageIncBtn = document.getElementById('manageIncBtn');
const adminModeBtn = document.getElementById('adminModeBtn');
const adminLoginDialog = document.getElementById('adminLoginDialog');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const id = document.getElementById('id');
const pwd = document.getElementById('pwd');

const renderDrinkButtons = (drinks) => {
  buttonContainer.innerHTML = ''; // clear existing buttons
  drinks.forEach((drink) => {
    const button = document.createElement('button');
    button.className = 'styledBtn backGreen round textWhite';
    const drinkBtnContent = `${drink.id} - ${drink.drinkName} <br> ${drink.drinkPrice}원`
    button.innerHTML = drinkBtnContent;
    button.addEventListener('click', () => {
      drinkInfo.innerHTML = drinkBtnContent;
      drinkCount = 0;
      drinkCountNum.textContent = drinkCount;
      drinkName = drink.drinkName;
      drinkId = drink.id;
      drinkPrice = drink.drinkPrice;
      setDrink(drinkId); // api
      console.log("setDrink: ", drinkId);
      selectDrinkDialog.showModal();
    });
    buttonContainer.appendChild(button);
  });
};

const renderAdminDrinkButtons = (drinks) => {
  adminDrinksContainer.innerHTML = '' // clear existing buttons
  drinks.forEach((drink) => {
    const button = document.createElement('button');
    button.className = 'styledBtn backGreen round textWhite';
    const drinkBtnContent = `${drink.id} ${drink.drinkName} <br> ${drink.drinkNum}개`
    button.innerHTML = drinkBtnContent;
    button.addEventListener('click', () => {
      manageDrinkDialogInfo.innerHTML = drinkBtnContent;
      drinkCount = 0;
      manageDrinkCountNum.textContent = drinkCount;
      drinkNum = drink.drinkNum;
      drinkId = drink.id;
      manageDrinkDialog.showModal();
    });
    adminDrinksContainer.appendChild(button);
  });  
};

const updateMyDrinkData = async () => {
  const drinks = await getDrinks();
  renderDrinkButtons(drinks);
  // const myDrinks = await getMyDrinks();
  // renderAdminDrinkButtons(myDrinks);
};

document.addEventListener('DOMContentLoaded', () => {
  updateMyDrinkData();



  decrementBtn.addEventListener('click', () => {
    if (drinkCount > 0) {
      drinkCount--;
      drinkCountNum.textContent = drinkCount;
    }
  });

  countDecBtn.addEventListener('click', () => {
    if (drinkCount > 0) {
      drinkCount--;
      manageDrinkCountNum.textContent = drinkCount;
      setDrinkNum(drinkCount); // api
      console.log('setDrinkNum: ',drinkCount);
    }
  });

  incrementBtn.addEventListener('click', () => {
    if (drinkCount <= 99) {
      drinkCount++;
      drinkCountNum.textContent = drinkCount;    
      setDrinkNum(drinkCount); // api
    }
  });

  countIncBtn.addEventListener('click', () => {
    if (drinkCount <= 99) {
      drinkCount++;
      manageDrinkCountNum.textContent = drinkCount;
    }
  });

  manageDecBtn.addEventListener('click', async () => {
    if (drinkCount <= drinkNum && drinkCount != 0) { // 실제 음료개수 이하의 음료를 빼야 함
      const updatedDrinkCount = drinkNum - drinkCount;
      const reqText = `${drinkId} ${updatedDrinkCount}`;
      const isManageSuccess = await manageDrink(reqText); // api
      // const isManageSuccess = "ok" // api dummy

      if (isManageSuccess == "ok") {
        const myDrinks = await getMyDrinks();
        renderAdminDrinkButtons(myDrinks);
        console.log(reqText); // dummy test
        manageDrinkDialog.close();
      }
    }
  });

  manageIncBtn.addEventListener('click', async () => {
    if (drinkCount + drinkNum <= 99 && drinkCount != 0) { // 업데이트된 음료 개수가 99개 이하
      const updatedDrinkCount = drinkNum + drinkCount;
      const reqText = `${drinkId} ${updatedDrinkCount}`;
      const isManageSuccess = await manageDrink(reqText); // api
      // const isManageSuccess = "ok" // api dummy

      if (isManageSuccess == "ok") {
        const myDrinks = await getMyDrinks();
        renderAdminDrinkButtons(myDrinks);
        console.log(reqText); // dummy test
        manageDrinkDialog.close();
      }
    }
  });

  purchaseBtn.addEventListener('click', async () => {
    if (drinkCount) {
      console.log("count: ",drinkCount);
      console.log("id: ",drinkId);
      console.log("price: ",drinkPrice);
      let payInfo;
      try {
        payInfo = await getIsPayAvaiable(); // api
        console.log('Fetch result:', payInfo);
      } catch (error) {
        console.error('isPayAvailable: ', error);
      }
      // const payInfo = "12 7"; // api dummy test
      const match = payInfo.match(/^(\d+) (\d+)$/);
      let isPrepay = false;
      x = "", y = "";

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

    cardInfoEnterBtn.addEventListener('click', async () => {
      const cardInfo = document.getElementById('cardInfo').value;
      const paidDrink = await getPaidDrink(cardInfo); // api
      // const paidDrink = "사이다 1" // api dummy test
      const match = paidDrink.match(/^(\D+) (\d+)$/);
      
      if (cardInfo) {
        enterCardInfoDialog.close();
        if (match) {  // 결제성공 시
          const getDrinkContent = document.getElementById('getDrinkContent');
          getDrinkContent.innerHTML = `${paidDrink}개 수령해주세요.`
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
      // const code = getCode(cardInfo); // api
      const code = "asdf123"; // api dummy
      // const isPrepayAvailable = getIsPrePayAvaiable(); // api
      const isPrepayAvailable = true; // api dummy

      if (cardInfo) {
        enterCardInfoDialog.close();
        if (code != "no" && isPrepayAvailable) {  // 결제성공 시
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
      // const codeDrink = getCodeDrink(EnteredCode); // api
      const codeDrink = "사이다 1" // api dummy

      if (EnteredCode) {
        if (codeDrink != "no") { // TODO: 수정 필요 => 인증코드가 맞으면
          const successEnterDialog = document.getElementById('successEnterDialog');
          const getCodeDrinkContent = document.getElementById('getCodeDrinkContent');
          getCodeDrinkContent.innerHTML = `${codeDrink}개 수령해주세요.`
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
  });

  loginBtn.addEventListener('click', async () => {
    const reqLoginText = `${id.value} ${pwd.value}`;
    const isLoginOk = await login(reqLoginText); // api
    // const isLoginOk = "ok"; // api dummy
    
    console.log("login",isLoginOk);
    if (isLoginOk == "ok") {
      const myDrinks = await getMyDrinks();
      renderAdminDrinkButtons(myDrinks);
      adminLoginDialog.close();
      drinkPage.style.display = 'none';
      adminPage.style.display = 'block';
    }
  });

  logoutBtn.addEventListener('click', async () => {
    console.log('click');
    const isLogoutOk = await logout(); // api
    // const isLogoutOk = "ok"; // api dummy

    console.log("logout",isLogoutOk);
    if (isLogoutOk == "ok") {
      adminPage.style.display = 'none';
      drinkPage.style.display = 'block';
    }
  });

  // Add event listener to each close button
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dialogId = btn.closest('dialog').id;
      closeDialog(dialogId);
    });
  });

});

// Close dialog function
function closeDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  if (dialog) {
    drinkCount = 0;
    drinkId = "";
    drinkName = "";
    drinkPrice = 0;
    drinkNum = 0;
    dialog.close();
  }
};