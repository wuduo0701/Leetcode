// 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

// 每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

// 请你返回最终形体的表面积。

var surfaceArea = function(grid) {
  const n = grid.length;
  let area = 0;
  for(let i = 0;i < n; i++){
    for(let j = 0; j < n; j++){
      let level = grid[i][j];
      if(level > 0){
        area += (level * 4) + 2;
        // 减掉 i 与 i-1 相贴的两份表面积
        area -= i > 0? Math.min(level, grid[i - 1][j]) *2 : 0; 
        // 减掉 j 与 j-1 相贴的两份表面积
        area -= j > 0? Math.min(level, grid[i][j - 1]) *2: 0;
      }
    }
  }
  return area
};