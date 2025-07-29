// Variables
const gridContainer = document.getElementById("grid");
const clearBtn = document.getElementById("clear-btn");
const blackBtn = document.getElementById("black-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const formatButtons = document.querySelectorAll(".format-btn");

let drawMode = "black";

// Create sketch pad
function createGrid(size) {
  gridContainer.innerHTML = "";
  const containerSize = 512;
  const cellSize = `${containerSize / size}px`;
  gridContainer.style.setProperty('--cell-size', cellSize);

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    // Apply hover behavior based on current mode
    cell.addEventListener("mouseenter", () => {
      if (drawMode === "black") {
        cell.style.backgroundColor = "black";
      } else if (drawMode === "rainbow") {
        cell.style.backgroundColor = getRandomColor();
      }
    });

    gridContainer.appendChild(cell);
  }
}

// Random hex color generator
function getRandomColor() {
  return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}

// Clear grid
function clearGrid() {
  document.querySelectorAll(".grid-cell").forEach(cell => {
    cell.style.backgroundColor = "#fefefe";
  });
}
clearBtn.addEventListener("click", clearGrid);

// Mode toggle
blackBtn.addEventListener("click", () => {
  drawMode = "black";
});

rainbowBtn.addEventListener("click", () => {
  drawMode = "rainbow";
});

// Grid size buttons
formatButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const size = parseInt(btn.getAttribute("data-size"));
    createGrid(size);
  });
});

// Initialize grid
createGrid(16);