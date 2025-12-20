console.log("first print statement");

const grid=[];
const grid_energy=[];
for(let y=0; y<10;y++){
    const row=[];
    for(let x=0; x<10;x++){
        row.push("O");
    }
    grid.push(row);
    
}
for (let i = 0; i < 5; i++) {
    const randomNumber1 = Math.floor(Math.random() * (10 - 0)) + 0;
    const randomNumber2 = Math.floor(Math.random() * (10 - 0)) + 0;
    (grid[randomNumber1][randomNumber2]="X");
    grid_energy.push([randomNumber1, randomNumber2]);
}

for (let y = 0; y < 10; y++) {
    let line = "";
    for (let x = 0; x < 10; x++) {
        line += grid[y][x] + " ";
    }
    console.log(line);
}

console.log("Energy cells at positions: ", grid_energy);