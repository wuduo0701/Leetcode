/**
 * @param {number[]} A
 * @return {number}
 */
// （A[i] + A[j] + i - j）
var arr = [8,1,5,2,6];
// var maxScoreSightseeingPair = function(A) {
//   let max = 0
//   for(let i = 0; i < A.length; i++) {
//     for(j = i+1; j < A.length; j++) {
//       sum = A[i] + A[j] + i - j;
//       if(sum > max) {
//         max = sum;
//       }
//     }
//   }
//   return max
// };
// A[j] - j的值是固定的，所以对于（A[i] + A[j] + i - j），只需求出A[i] + i的最大值即可，在挑出A[j] - j的值
var maxScoreSightseeingPair = function(A) {
  let ans = 0, max = A[0] + 0
  for(j = 1; j < A.length; j++) {
    ans = Math.max(ans, max + A[j] - j);
    max = Math.max(max, A[j] + j);
  }
  return ans;
};
console.log(maxScoreSightseeingPair(arr))