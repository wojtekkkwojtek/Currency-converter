{
    const calculateResult = (amount, currency) => {
        const rateUSD = 3.1;
        const rateEUR = 4.1;
        const rateGBP = 5.1;

        switch (currency) {
            case "EUR":
                return amount * rateEUR;
            case "GBP":
                return amount * rateGBP;
            case "USD":
                return amount * rateUSD;
        }
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = result.toFixed(2)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(amount, currency);
        updateResultText(result);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}

