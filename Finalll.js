const coin = document.getElementById("coin");
const flipButton = document.getElementById("flipButton");
const flipSound = document.getElementById("flipSound");
const resultMessage = document.getElementById("resultMessage");
const totalFlips = document.getElementById("totalFlips");
const headsCount = document.getElementById("headsCount");
const tailsCount = document.getElementById("tailsCount");
const headsPercentage = document.getElementById("headsPercentage");
const tailsPercentage = document.getElementById("tailsPercentage");

// Initialize counters
let total = 0;
let heads = 0;
let tails = 0;

flipButton.addEventListener("click", () => {
  flipSound.play();

  const isHeads = Math.random() < 0.5;
  const randomSpins = Math.floor(Math.random() * 5 + 3) * 360;

  coin.style.transition = "transform 1.5s cubic-bezier(0.42, 0, 0.58, 1)";
  coin.style.transform = `rotateY(${randomSpins + (isHeads ? 0 : 180)}deg)`;

  setTimeout(() => {
    resultMessage.textContent = isHeads ? "It's Heads!" : "It's Tails!";
    resultMessage.style.color = isHeads ? "#ffd700" : "#ffa500";
    resultMessage.style.textShadow = isHeads
      ? "0 0 10px rgba(25, 0, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)"
      : "0 0 10px rgba(25, 0, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)";

    // Update statistics
    total++;
    if (isHeads) {
      heads++;
    } else {
      tails++;
    }

    const headsProb = ((heads / total) * 100).toFixed(2);
    const tailsProb = ((tails / total) * 100).toFixed(2);

    totalFlips.textContent = total;
    headsCount.textContent = heads;
    tailsCount.textContent = tails;
    headsPercentage.textContent = headsProb;
    tailsPercentage.textContent = tailsProb;
  }, 1500);
});
