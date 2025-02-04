function countIsland(grid: number[][]): number {
  const col = grid.length;
  const row = grid[0].length;

  // 가로 세로 대각선 체크용 좌표
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
  //방문체크용 boolean배열
  const visited: boolean[][] = Array.from({ length: col }, () =>
    Array.from({ length: row }, () => false)
  );

  function isIsland(x: number, y: number) {
    let arr: Array<[number, number]> = [];
    arr.push([x, y]);
    visited[x][y] = true;

    while (arr.length > 0) {
      const [ex, ey] = arr.shift()!;
      for (const [dx, dy] of destination) {
        const nx = ex + dx;
        const ny = ey + dy;

        //범위 안이고 + 방문 =false + 아일랜드인지
        if (nx >= 0 && nx < col && ny >= 0 && ny < row) {
          if (grid[nx][ny] === 1 && !visited[nx][ny]) {
            visited[nx][ny] = true;
            arr.push([nx, ny]);
          }
        }
      }
    }
  }

  //일단 땅이 1,0인지 구분하기
  let count = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        isIsland(i, j);
        count += 1;
      }
    }
  }
  return count;
}

const map: number[][] = [
  [1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0],
];
console.time("z");
const returnValue = countIsland(map);
console.log(returnValue);
console.timeEnd("z");
