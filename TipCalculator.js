'use strict';

const calcBtn = document.getElementById('calcBtn');
const billInput = document.getElementById('billInput');

calcBtn.addEventListener('click', function () {
  const bill = Number(billInput.value);
  const billValue = new Number(bill);

  if (bill == billValue) {
    const tipCalc = function (bill) {
      if (bill <= 50) {
        alert(`Your bill is $${bill}. \nRecommended tip: 10% ($${bill * 0.1})`);
      } else if (() => 51) {
        alert(
          `Your bill is $${bill}. \nRecommended tip: 15% ($${bill * 0.15})`
        );
      } else {
        return;
      }
    };
    tipCalc(bill);
  } else {
    alert('You did not enter a valid number. Try again!');
  }
});
