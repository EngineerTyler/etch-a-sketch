const gridContainer = document.getElementById("grid");

function createGrid(rows, cols) {
  const totalCells = rows * cols;
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    gridContainer.appendChild(cell);
  }
}

createGrid(16, 16);
