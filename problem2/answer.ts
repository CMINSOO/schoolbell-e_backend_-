const map: number[][] = [
  [1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0],
];
const destination: number[][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
function countIsland(grid: number[][]): number {
  const col = grid.length;
  const row = grid[0].length;
  //일단 땅이 1,0인지 구분하기
  let count = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (grid[i][j] == 1) {
        count++;
      }
    }
  }
  return count;
}

const rv = countIsland(map);
console.log(rv);
