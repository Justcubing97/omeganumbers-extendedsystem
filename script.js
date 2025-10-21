// Start number
let number = 0

// ---- DOM Elements ----
const numberDisplay = document.getElementById("number");
const gainBtn = document.getElementById("gain");
const prestigeBtn = document.getElementById("prestige");

// ---- Update display ----
function updateDisplay() {
  numberDisplay.textContent = number.toString();
}

// ---- Button actions ----
gainBtn.onclick = () => {
  number.inc();
  updateDisplay();
};

prestigeBtn.onclick = () => {
  // Example: reset number, increase layer
  number += 1
  updateDisplay();
};

// ---- Initial display ----
updateDisplay();