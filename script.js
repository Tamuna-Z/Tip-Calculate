let tipRate = 0;
let billAmount = 0;
let tipAmount = 0;
let totalAmount = 0;

let calculateButton = document.getElementById('button');
let tipRateInput = document.getElementById('tip-rate');
let billAmountInput = document.getElementById('bill-amount');
let tipResultScreen =document.getElementById('tip-amount');
let totalAmountScreen =document.getElementById('total-amount');

calculateButton.addEventListener('click',function(){
    billAmount = parseInt(billAmountInput.value);
    tipRate = parseInt(tipRateInput.value);
    tipAmount = billAmount * tipRate /100;
    totalAmount = billAmount + tipAmount;

    tipResultScreen.innerHTML = tipAmount;
    totalAmountScreen.innerHTML = totalAmount;
})


