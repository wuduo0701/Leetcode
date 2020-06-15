/**
 * @param {string[]} strs
 * @return {string}
 */
var str1 = ["flower","flow","flight"],
    str2 = ["dog","racecar","car"];

var longestCommonPrefix = function(strs) {
  var commonStr = ''
  if(!strs.length) {
    return commonStr;
  }
  for(let i = 0; i < strs[0].length; i++) {
    for(let j = 1; j < strs.length; j++) {
      if(strs[0][i] !== strs[j][i]) {
        return commonStr;
      }
    }
    commonStr += strs[0][i];
  }
  return commonStr
};
console.log(longestCommonPrefix(str1));
