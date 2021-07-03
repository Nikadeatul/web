const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_Two = document.getElementById('currency-Two');
const amountEl_Two = document.getElementById('amount-Two');


const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


function caclulate() {
    console.log('RAN');
}


currencyEl_one.addEventListener('change',caclulate);
amountEl_one.addEventListener('input',caclulate);
currencyEl_Two.addEventListener('change', caclulate);
amountEl_Two.addEventListener('input',caclulate);



caclulate();