
const coin = document.getElementById("coin");
const flipButton = document.getElementById("flipButton");
const resultMessage = document.getElementById("resultMessage");
const statsDisplay = document.getElementById("statsDisplay");


const shapes = [
  { name: "circle", style: "border-radius: 50%;" },
  { name: "square", style: "border-radius: 0;" },
  { name: "rounded square", style: "border-radius: 20%;" },
  { name: "oval", style: "border-radius: 50% / 25%;" },
  { name: "triangle", style: "clip-path: polygon(50% 0%, 0% 100%, 100% 100%);" },
];


const stats = {
  circle: { heads: 0, tails: 0 },
  square: { heads: 0, tails: 0 },
  "rounded square": { heads: 0, tails: 0 },
  oval: { heads: 0, tails: 0 },
  triangle: { heads: 0, tails: 0 },
};


flipButton.addEventListener("click", () => {
 
  const isHeads = Math.random() < 0.5;

  
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  coin.style.cssText += randomShape.style; 

  
  const randomSpins = Math.floor(Math.random() * 5 + 3) * 360; 
  coin.style.transform = `rotateY(${randomSpins + (isHeads ? 0 : 180)}deg)`; // Heads or tails

  const shapeName = randomShape.name;
  if (isHeads) {
    stats[shapeName].heads++;
  } else {
    stats[shapeName].tails++;
  }

  
  setTimeout(() => {
    resultMessage.textContent = isHeads ? "It's Heads!" : "It's Tails!";
    resultMessage.style.color = isHeads ? "#FFD700" : "#FF4500"; 

   
    updateStatsDisplay();
  }, 1500); 
});


function updateStatsDisplay() {
  statsDisplay.innerHTML = ""; 
  for (const shape in stats) {
    const { heads, tails } = stats[shape];
    const statElement = document.createElement("p");
    statElement.textContent = `${shape.toUpperCase()}: Heads: ${heads}, Tails: ${tails}`;
    statsDisplay.appendChild(statElement);
  }
}
