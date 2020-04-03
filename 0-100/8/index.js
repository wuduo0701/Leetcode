var string1 = " 4193 with words", string2 = ' -42'

var myAtoi = function(str) {
  // let change = /[0-9]+/,change1 = /^\-[0-9]+/,
  let change = /^[\+\-]?\d+/, ans;
  str = str.trim();   //去除头尾的空格
  // if(!/^[+|-]?\d+/.test(str)) return 0;
  if(Number(str.match(change)) != undefined){
    ans = Number(str.match(change))
  }
  if(ans > 0){
    ans = Math.min(ans,2147483647)
  }
  if(ans < 0){
    ans = Math.max(ans,-2147483648)
  }
  // console.log(Number(str.match(change2)))
  return ans
};

console.log(myAtoi(string1));
console.log(myAtoi(string2));