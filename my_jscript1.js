console.log("first print statement");

const grid=[]; //2D array for grid for the game (grid size 10x10)
const grid_energy=[]; //energy cell positions
const spawn_point=[]; //spawan point for snake 

for(let y=0; y<5;y++){            //grid initialization
    const row=[];
    for(let x=0; x<5;x++){
        row.push("O");
    }
    grid.push(row);
    
}
for (let i = 0; i < 4; i++) {                   //grid generation
    const randomNumber1 = Math.floor(Math.random() * (5- 0)) + 0; 
    const randomNumber2 = Math.floor(Math.random() * (5 - 0)) + 0;
    (grid[randomNumber1][randomNumber2]="X");
    grid_energy.push([randomNumber1, randomNumber2]);
}

const spawnX = Math.floor(Math.random() * (5 - 0)) + 0; //snake spawn point
const spawnY = Math.floor(Math.random() * (5 - 0)) + 0;
grid[spawnX][spawnY]="D";
spawn_point.push([spawnX,spawnY]);




for (let y = 0; y < 5; y++) {                //print grid oriantation 
    let line = "";
    for (let x = 0; x < 5; x++) {
        line += grid[y][x] + " ";
    }
    console.log(line);
}
console.log("The snake has been spawned at position: ", spawn_point);


const readline = require('readline');

(async function runGame() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  let question = true;
  while (question) {
    const userInputRaw = await new Promise(resolve => rl.question("Enter direction to move the snake (W/A/S/D): ", resolve));
    const userInput1 = (userInputRaw || "").toUpperCase().trim();
    if (userInput1 !== "W" && userInput1 !== "A" && userInput1 !== "S" && userInput1 !== "D") {
      console.log("Wrong input, please enter W/A/S/D only");
    } else {
      question = false;
      console.log("You entered:", userInput1);
    }
  }
  rl.close();
})();

