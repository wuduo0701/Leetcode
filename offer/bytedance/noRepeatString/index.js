/**
 * 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */
var str1 = "abcabcbb",
  str2 = "bbbbb",
  str3 = "pwwkew",
  str4 = "dvdf";

var lengthOfLongestSubstring = function(s) {
  // 记录最大的字串
  let max = 0;
  // 转化为数组
  s = s.split('');
  // 记录数组
  let arr = [];
  for(let i = 0; i < s.length; i++) {
    // 是否找到该值，返回该值的下标
    let index = arr.indexOf(s[i]);
    // 找到了就减去之前的值，用接下来的字串
    if(index !== -1) {
      arr.splice(0, index+1);
    }
    // 没有就一直增加
    arr.push(s[i]);
    max = max > arr.length ? max : arr.length;
  }
  return max;
};

console.log(lengthOfLongestSubstring(str4));