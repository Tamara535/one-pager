const coin = document.getElementById("coin");
const flipButton = document.getElementById("flipButton");
const quoteMessage = document.getElementById("quoteMessage");
const headsCountDisplay = document.getElementById("headsCount");
const tailsCountDisplay = document.getElementById("tailsCount");
const modeToggle = document.getElementById("modeToggle");

let headsCount = 0;
let tailsCount = 0;

flipButton.addEventListener("click", flipCoin);
modeToggle.addEventListener("click", toggleMode);

function flipCoin() {
  // Disable button during animation
  flipButton.disabled = true;

  // Randomly decide if it's heads or tails
  const isHeads = Math.random() < 0.5;

  // Generate random rotations for the flip
  const xRotations = Math.floor(Math.random() * 6 + 3) * 360; // 3-8 full rotations
  const yRotations = isHeads
    ? Math.floor(Math.random() * 6 + 3) * 360
    : Math.floor(Math.random() * 6 + 3) * 360 + 180; // Extra 180° for tails

  // Apply the 3D rotation
  coin.style.transform = `rotateX(${xRotations}deg) rotateY(${yRotations}deg)`;

  // Wait for the animation to finish before updating stats and enabling the button
  setTimeout(() => {
    if (isHeads) {
      headsCount++;
      headsCountDisplay.textContent = headsCount;
      quoteMessage.textContent = "Heads: The internet connects us all.";
    } else {
      tailsCount++;
      tailsCountDisplay.textContent = tailsCount;
      quoteMessage.textContent = "Tails: Embrace creativity and collaboration.";
    }

    // Re-enable the button after animation
    flipButton.disabled = false;
  }, 2000); // Match the duration of the flip animation
}

function toggleMode() {
  document.body.classList.toggle("dark");
  document.querySelector(".container").classList.toggle("dark");
}
