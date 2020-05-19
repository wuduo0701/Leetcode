/**
 * 680. 验证回文字符串 Ⅱ
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 输入: "aba"
 * 输出: True
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 */
var str1 = "aba", str2 = "abca";
// 判断字符是否相等
var Pail = function(left, right, s) {
  while(left < right){
    if(s[left] !== s[right]){ //不相等的时候
      return false;
    }
    //相等的情况,左右都移动,继续判断
    left++;
    right--;
  }
  return true;
}
var validPalindrome = function(s) {
  var right = s.length - 1, left = 0; //左右指针
  // if(right == 3 || right == 2){ //3个或4个字符肯定为回文字符串
  //   return true
  // }
  while(left < right){
    if(s[left] !== s[right]){
      return Pail(left+1, right, s) ||Pail(left, right-1, s);
    }
    //相等的情况,左右都移动,继续判断
    left++;
    right--;
  }
  return true;
};

console.log(validPalindrome(str1))







