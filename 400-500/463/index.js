/**
 * 463. 岛屿的周长 (https://leetcode-cn.com/problems/island-perimeter/)
 */
var grid = [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0]
          ];
// 相邻岛屿块一旦接壤会相互损失一条边，而每一块又存在四条边，这就可以计算除岛屿块的数量为 岛屿块数*4 - 接壤的数量 * 2
// var islandPerimeter = function(grid) {
//   const len1 = grid.length, len2 = grid[0].length;
//   let land = 0, border = 0;
//   for(let i = 0; i < len1; i++) {
//     for(let j = 0; j < len2; j++) {
//       if(grid[i][j] === 1) {
//         land++;
//         if(i < grid.length - 1 && grid[i+1][j] === 1) {
//           border++;
//         }
//         if(j < grid[0].length - 1 && grid[i][j+1] === 1) {
//           border++;
//         }
//       }
//     }
//   }
//   return land * 4 - border * 2;
// };

var islandPerimeter = function(grid) {
  return dfs(grid, 0, 0)
}

const len1 = grid.length, len2 = grid[0].length;
let sum = 0;
const dfs = (grid, i , j) => {
  if(grid[i][j] === 1) {
    sum++;
    if(i < len1 - 1) {
      dfs(grid, i + 1, j);
    }
    if(j < len2 -1) {
      dfs(grid, i, j+1);
    }
  }
  return sum;
}
console.log(islandPerimeter(grid));