
const coin = document.getElementById("coin");
const flipButton = document.getElementById("flipButton");
const flipSound = document.getElementById("flipSound");
const resultMessage = document.getElementById("resultMessage");

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
      ? "0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)"
      : "0 0 10px rgba(255, 140, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5)";
  }, 1500); 
});



