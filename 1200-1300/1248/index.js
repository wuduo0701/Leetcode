/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let nums1 = [1,1,2,1,1], k1 =3;
let nums2 = [2,4,6], k2 = 1;
let nums3 = [2,2,2,1,2,2,1,2,2,2], k3 = 2;


var numberOfSubarrays = function(nums, k) {
  const len = nums.length;  //数组长度
  // console.log(len)
  let add = [len + 2], ans = 0, cnt = 0;
  for(let i = 0; i < len; ++i){
    if(nums[i] % 2 === 1){
      add[++cnt] = i; //找出奇数的下标，存储到add数组
    }
  }
  add[0] = -1, add[++cnt] = len;  //数组第一个为-1，最后一个为数组长度
  for(let i = 1; i + k <= cnt; ++i){
    ans += (add[i] - add[i-1]) * (add[i+k] - add[i+k-1])
  }
  
  return ans;
};

console.log(numberOfSubarrays(nums1, k1))
console.log(numberOfSubarrays(nums2, k2))
console.log(numberOfSubarrays(nums3, k3))