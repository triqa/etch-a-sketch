// CREATE THE STARTER UI

// Get the container
const container = document.querySelector("#container");

// Create the 16 x 16 grid
let grid_size = 16;
for (let i = 0; i < grid_size * grid_size; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile"); // for css styling
  container.appendChild(tile);
  tile.style.width = `${500 / 16}px`;
  tile.style.height = `${500 / 16}px`;

  // Tile changes colour when mouse passes over it, leaving a trail through the grid
  tile.addEventListener("mouseenter", (e) => {
    e.target.classList.add("draw");
  });
}
