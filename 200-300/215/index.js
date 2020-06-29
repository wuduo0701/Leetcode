/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
var arr1 = [3,2,1,5,6,4],
  arr2 = [3,2,3,1,2,4,5,5,6];

var findKthLargest = function(nums, k) {
  nums.sort((a, b) => b-a);
  return nums[k-1]
};

console.log(findKthLargest(arr1, 2));