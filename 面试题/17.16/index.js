/**
 * 
 * @param {number} nums 
 * @return  {number}
 */
const num1 = [1,2,3,1],
      num2 = [2,7,9,3,1],
      num3 = [2,1,4,5,3,1,1,3];

var massage = function(nums) {
  const len = nums.length;
  if(len == 0)
    return 0;
  if(len == 1)
    return nums[0];
  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0],nums[1]);
  for(let i = 2; i < len; i++){
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
  }
  console.log(dp)
  return dp[len-1];
  
};
massage(num3)
// console.log(massage(num2))