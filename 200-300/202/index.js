// 202. 快乐数

var isHappy = function(n) {
  let set = new Set(), sum;
  n += '';
  while (sum !== 1) { //判断是否到最后一位
    sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += n[i]*n[i];
    }
    n = sum + '';
    if (set.has(sum)) return false;
    set.add(sum);
  }
  return true;
};
console.log(isHappy(19));
