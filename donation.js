// Select elements
const amountCards = document.querySelectorAll(".amount-card");
const donationAmount = document.getElementById("donationAmount");
const customAmount = document.getElementById("customAmount");

amountCards.forEach(card => {
  card.addEventListener("click", () => {
    // remove active from all
    amountCards.forEach(c => c.classList.remove("active"));
    // add active to clicked
    card.classList.add("active");

    // get amount
    const amount = card.getAttribute("data-amount");
    donationAmount.textContent = `₹${amount}`;
    customAmount.value = "";
  });
});

// custom input
customAmount.addEventListener("input", () => {
  amountCards.forEach(c => c.classList.remove("active"));
  donationAmount.textContent = customAmount.value ? `₹${customAmount.value}` : "₹0";
});

// Optional form validation
const form = document.getElementById("donationForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`Thank you for donating ${donationAmount.textContent} ❤️`);
});
