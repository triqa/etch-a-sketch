// CREATE THE STARTER UI

// Get the container & buttons container
const buttons = document.querySelector("#buttons");
const container = document.querySelector("#container");

// Create button that sends user a popup askign for the no. squares per side for the new grid
const numTilesBtn = document.createElement("button");
numTilesBtn.textContent = "Change number of squares";
buttons.appendChild(numTilesBtn);
numTilesBtn.addEventListener("click", () => {
  gridSize = parseInt(prompt("Num of tiles per side?"));
  container.replaceChildren(); // remove previous grid from container all tiles at once
  changeGridSize(gridSize);
});

function changeGridSize(gridSize) {
  // Create the gridSize * gridSize grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile"); // for css styling
    container.appendChild(tile);
    tile.style.width = `${500 / gridSize}px`;
    tile.style.height = `${500 / gridSize}px`;

    // Tile changes colour when mouse passes over it, leaving a trail through the grid
    tile.addEventListener("mouseenter", (e) => {
      e.target.classList.add("draw");
    });
  }
}

// Starting side
changeGridSize(16);
