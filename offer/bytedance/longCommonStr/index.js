/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

var arr1 = ["flower","flow","flight"],
  arr2 = ["dog","racecar","car"];

var longestCommonPrefix = function(strs) {
  let comStr = "";
  if(!strs.length) return comStr;
  for(let i = 0; i < strs[0].length; i++) {
    for(let j = 1; j < strs.length; j++) {
      if(strs[0][i] !== strs[j][i]){
        return comStr;
      }
    }
    comStr += strs[0][i];
  }
  return comStr;
};

console.log(longestCommonPrefix(arr1));