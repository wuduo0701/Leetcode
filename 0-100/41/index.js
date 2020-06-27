/**
 * 
 * @param {*} nums 
 */
// 输入: [1,2,0]
// 输出: 3

var arr1 = [1,2,0],
  arr2 = [3,4,-1,1],
  arr3 = [7,8,9,11,12];
var firstMissingPositive = function(nums) {
  // 最小值
  let min = 1;
  // 先排序
  while(nums.includes(min)) {
    min++;
  }
  return min;
};

console.log(firstMissingPositive(arr1));
console.log(firstMissingPositive(arr2));
console.log(firstMissingPositive(arr3));