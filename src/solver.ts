
const isValid = (puzzle:number[][], x:number, y:number, n:number):boolean => {
  // check the row
  for(const val of puzzle[y]) {
    if(val === n)
      return false;
  }
  // check the column
  for(const row of puzzle) {
    if(row[x] === n)
      return false;
  }
  // check the grid square
  const gridX = Math.floor(x/3);
  const gridY = Math.floor(y/3);
  for(let i = gridY; i < gridY+3; i++) {
    for(let j = gridX; j < gridX+3; j++) {
      if(puzzle[gridY+i][gridX+j] === n)
      return false;
    }
  }
  return true;
}

export const solve = (puzzle:number[][]):boolean => {
  for(let y = 0; y < 9; y++) {
    for(let x = 0; x < 9; x++) {
      if(puzzle[y][x] !== 0)
        continue;
      for(let n = 1; n < 10; n++) {
        if(isValid(puzzle, x, y, n)) {
          puzzle[y][x] = n;
          if(!solve(puzzle))
            puzzle[y][x] = 0;
        }
      }
    }
  }
  return true;
}