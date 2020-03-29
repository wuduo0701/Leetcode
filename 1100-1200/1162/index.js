
const grid1 = [
        [1,0,1],
        [0,0,0],
        [1,0,1]
],
      grid2 = [
        [1,0,0],
        [0,0,0],
        [0,0,0]
]
var distance = (a, b) => {    //求两点距离
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

var maxDistance = function(grid) {
  const len1 = grid.length,
        len2 = grid[0].length;
  let Land = [], Ocean = [];    //存储海洋和陆地的坐标
  for(let i = 0; i < len1; i++){
    for(let j =0; j < len2; j++){
      if(grid[i][j] === 1){
        Land.push([i,j]);    //陆地坐标
      }else{
        Ocean.push([i,j]);   //海洋坐标
      }
    }
  }
  // console.log(Land)
  const n1 = Land.length, n2 = Ocean.length;
  let  max = -1;
  if(n1 == 0 || n2 == 0){    //海洋面积为空或者陆地面积为空
    return -1;
  }else{
    for(let i = 0; i < n2; i++){
      let min = 99999;
      for(let j =0; j < n1; j++){
        let dis = distance(Ocean[i], Land[j]);  //计算距离
        if(dis < min){
          min = dis;
        }
        if (min == 1) {
          break;//提前结束，最小可能的距离是1
        }
      }
      if (min > max) {
        max = min;
      }
    }
  }
  return max;
};

console.log(maxDistance(grid2))