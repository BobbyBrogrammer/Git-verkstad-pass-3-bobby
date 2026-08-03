const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const title = card.querySelector("h3").textContent;

        alert(`Du valde artikeln: ${title}`);
    });
});