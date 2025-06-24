const mcprice = 3.10;

function convert(input) {
    return input/mcprice;
}

document.addEventListener("DOMContentLoaded", () => {
    const inputEl = document.getElementById("input");
    const buttonEl = document.getElementById("button");
    const resultEl = document.getElementById("result");
    const canEl = document.getElementById("can");

    buttonEl.addEventListener("click", () => {
        const inputValue = parseFloat(inputEl.value);

        if (isNaN(inputValue) || inputValue <= 0) {
            resultEl.textContent = "Please enter a valid amount.";
            resultEl.style.opacity = 1;
            return;
        }

        const mcchickens = convert(inputValue);
        resultEl.textContent = `${mcchickens.toFixed(2)} McChickens!`;
        resultEl.style.opacity = 1;
        canEl.classList.remove("hidden");
    });
});