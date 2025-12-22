console.log("first print statement");

const grid = [];          // 2D array for grid
const grid_energy = [];   // energy cell positions
const Snake_position = []; 

const spawnX = Math.floor(Math.random() * 5);
const spawnY = Math.floor(Math.random() * 5);

function map(spawnX, spawnY) {

  // ✅ Initialize grid BEFORE placing snake
  for (let y = 0; y < 5; y++) {
    const row = [];
    for (let x = 0; x < 5; x++) {
      row.push("O");
    }
    grid.push(row);
  }

  // ✅ Now safe to place snake
  grid[spawnX][spawnY] = "D";
  Snake_position.push([spawnX, spawnY]);

  // ✅ Generate energy cells
  for (let i = 0; i < 4; i++) {
    const randomNumber1 = Math.floor(Math.random() * 5);
    const randomNumber2 = Math.floor(Math.random() * 5);
    grid[randomNumber1][randomNumber2] = "X";
    grid_energy.push([randomNumber1, randomNumber2]);
  }

  // ✅ Print grid
  for (let y = 0; y < 5; y++) {
    let line = "";
    for (let x = 0; x < 5; x++) {
      line += grid[y][x] + " ";
    }
    console.log(line);
  }

  console.log("The snake has been spawned at position:", Snake_position);
}

map(spawnX, spawnY);

// ✅ User input
function userInput() {
  const prompt = require("prompt-sync")();
  const direction = prompt("Enter direction (W/A/S/D): ").toUpperCase().trim();
  return direction;
}

let direction;
let correct = true;

while (correct) {
  direction = userInput();
  if (!["W", "A", "S", "D"].includes(direction)) {
    console.log("Invalid input. Please enter W, A, S, or D.");
  } else {
    console.log("You entered:", direction);
    correct = false;
  }
}

// ✅ Movement logic
if (direction === "W") {
  Snake_position.push([Snake_position[0][0] - 1, Snake_position[0][1]]);
  console.log("Snake moved up to position:", Snake_position);
  map(Snake_position[0][0] - 1, Snake_position[0][1]);
}