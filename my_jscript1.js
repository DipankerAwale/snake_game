console.log("first print statement");

const grid=[];
for(let y=0; y<10;y++){
    const row=[];
    for(let x=0; x<10;x++){
        row.push("x");
    }
    grid.push(row);
    
}

for (let y = 0; y < 10; y++) {
    let line = "";
    for (let x = 0; x < 10; x++) {
        line += grid[y][x] + " ";
    }
    console.log(line);
}



