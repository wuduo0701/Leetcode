let arr1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];
let arr2 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
];

var updateMatrix = function(matrix) {
  const len1 = matrix.length, 
        len2 = matrix[0].length;
        console.log(len1, len2,'-------')
  let space = [];   //存储数字为1的坐标
  for(let i = 0; i < len1; i++){
    for(let j = 0; j < len2; j++){
      if(matrix[i][j] === 1){   //数字为1时
        space.push([i,j]);    
      }
    }
  }
  const n1 = space.length;
  if(n1 === 1){   //只有一个数字1
    return 1;
  }else{
    
  }
  return space;
};
console.log(updateMatrix(arr1))