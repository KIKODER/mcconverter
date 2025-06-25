const mcPrices = {
    usd: 3.10,
    eur: 2.43,
    jpy: 180
};

function convert(input) {
    return input/mcprice;
}

document.addEventListener("DOMContentLoaded", () => {
    const inputEl = document.getElementById("input");
    const buttonEl = document.getElementById("button");
    const resultEl = document.getElementById("result");
    const canEl = document.getElementById("can");
    const currencyEl = document.getElementById("curr");
    const resultContainer = document.querySelector(".result-container");

    buttonEl.addEventListener("click", () => {
        const inputValue = parseFloat(inputEl.value);
        const selectedCurrency = currencyEl.value;
        const mcPrice = mcPrices[selectedCurrency];

        if (isNaN(inputValue) || inputValue <= 0) {
            //resultEl.textContent = "Please enter a valid amount.";
            //resultEl.style.opacity = 1;
            alert("Hey dumbass, you can't buy McChickens with that!");
            return;
        }

        const mcchickens = inputValue / mcPrice;
        resultEl.textContent = `${mcchickens.toLocaleString(undefined, { maximumFractionDigits: 2 })} McChickens!`;
        
        resultEl.style.opacity = 1;
        canEl.classList.remove("hidden");
        resultContainer.classList.add("show");
    });
});