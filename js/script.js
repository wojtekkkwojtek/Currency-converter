let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateUSD = 3;
let rateEUR = 4;
let rateGBP = 5;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let currency = currencyElement.value;
let amount = +amountElement.value;
let result;

switch(currency) {
    case "EUR":
        result = amount * rateEUR;
        break;
    case "GBP":
        result = amount * rateGBP;
        break;
    case "USD":
        result = amount * rateUSD;
        break;
}

resultElement.innerHTML = result.toFixed(2)});