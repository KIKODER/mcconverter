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
            alert("Hey dumbass, you can't buy McChickens with that!");
            return;
        }

        const mcchickens = inputValue / mcPrice;

        let subText = "You can buy";
        if (mcchickens < 1) {
            subText = "Sorry, you can only buy";
        } else if (mcchickens >= 1000) {
            subText = "Holy shit, Mr.Moneybags here can buy";
        } else if (mcchickens >= 100) {
            subText = "WOW! You can buy"
        }

        canEl.textContent = subText;
        canEl.classList.remove("hidden");

        resultEl.textContent = `${mcchickens.toLocaleString(undefined, { maximumFractionDigits: 2 })} McChickens!`;
        
        resultEl.style.opacity = 1;
        resultContainer.classList.add("show");
    });
});