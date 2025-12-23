console.log("first print statement");

const grid = [];          // 2D array for grid
const grid_energy = [];   // energy cell positions
const Snake_position = []; 

const spawnX = Math.floor(Math.random() * 5);
const spawnY = Math.floor(Math.random() * 5);


// Initialize grid BEFORE placing snake
for (let y = 0; y < 5; y++) {
  const row = [];
  for (let x = 0; x < 5; x++) {
    row.push("O");
  }
  grid.push(row);
}

//  Now safe to place snake
grid[spawnX][spawnY] = "D";
Snake_position.push([spawnX, spawnY]);

/*
//  Generate energy cells
for (let i = 0; i < 4; i++) {
  const randomNumber1 = Math.floor(Math.random() * 5);
  const randomNumber2 = Math.floor(Math.random() * 5);
  grid[randomNumber1][randomNumber2] = "X";
  grid_energy.push([randomNumber1, randomNumber2]);
}
*/
//  Print grid
function printGrid() {
  for (let y = 0; y < 5; y++) {
  let line = "";
  for (let x = 0; x < 5; x++) {
    line += grid[y][x] + " ";
  }
  console.log(line);
}
}
printGrid();
console.log("The snake has been spawned at position:", Snake_position);
  
//  User input
function userInput() {
  const prompt = require("prompt-sync")();
  const direction = prompt("Enter direction (W/A/S/D): ").toUpperCase()
  return direction;
}

let direction;
let correct = true;

function moveSnake(direction) {
  // Movement logic
  if (direction === "W") {
    const oldX = Snake_position[0][0];
    const oldY = Snake_position[0][1];
    grid[oldX][oldY] = "O"; // Clear old position

    const newX = oldX - 1;
    const newY = oldY;
    Snake_position[0][0] = newX;
    Snake_position[0][1] = newY;
    grid[newX][newY] = "D"; // Set new position

    
    console.log("Snake moved up to position:", Snake_position);
    printGrid();
  }else if (direction === "A") {
    const oldX = Snake_position[0][0];
    const oldY = Snake_position[0][1];
    grid[oldX][oldY] = "O"; // Clear old position

    const newX = oldX;
    const newY = oldY - 1;
    Snake_position[0][0] = newX;
    Snake_position[0][1] = newY;
    grid[newX][newY] = "D"; // Set new position
    
    
    console.log("Snake moved left to position:", Snake_position);
    printGrid();
  }else if (direction === "S") {
    const oldX = Snake_position[0][0];
    const oldY = Snake_position[0][1];
    grid[oldX][oldY] = "O"; // Clear old position

    const newX = oldX + 1;
    const newY = oldY;
    Snake_position[0][0] = newX;
    Snake_position[0][1] = newY;
    grid[newX][newY] = "D"; // Set new position

    
    console.log("Snake moved down to position:", Snake_position);
    printGrid();
  }else if (direction === "D") {
    const oldX = Snake_position[0][0];
    const oldY = Snake_position[0][1];
    grid[oldX][oldY] = "O"; // Clear old position

    const newX = oldX;
    const newY = oldY + 1;
    Snake_position[0][0] = newX;
    Snake_position[0][1] = newY;
    grid[newX][newY] = "D"; // Set new position

    
    console.log("Snake moved right to position:", Snake_position);
    printGrid();
}

}

while (correct) {
  direction = userInput();
  if (!["W", "A", "S", "D","END"].includes(direction)) {
    console.log("Invalid input. Please enter W, A, S, or D.");
  } else {
    console.log("You entered:", direction);
    moveSnake(direction);
    if(direction === "end"){
      console.log("Game ended by user.");
    }
    correct = false;
  }
}

