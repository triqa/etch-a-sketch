// CREATE THE STARTER UI

// Get the container
const container = document.querySelector("#container");

// Create the 16 x 16 grid
const grid_size = 16 * 16;
for (let i = 0; i < grid_size; i++) {
  const div = document.createElement("div");
  div.classList.add("tile"); // for css styling
  container.appendChild(div);
  div.style.width = `${500 / 16}px`;
  div.style.height = `${500 / 16}px`;
}
