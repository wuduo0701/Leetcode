// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

const arr = [1,2,3,4,4,3,2,1],
      arr1 = [1,1,1,2,2,2,3,3],
      arr2 = [1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3]

//求最大公约数
const getResult = (a, b) => {
  if( b === 0){
    return a;
  }else{
    return getResult(b, a % b);
  }
}

var hasGroupsSizeX = function(deck) {
  const hash = deck.reduce((pre, num) =>{   //统计每种数字的数目
    if(!pre[num]){
      pre[num] = 1;
    }else{
      pre[num]++;
    }
    return pre;
  },{});
  const numList = Object.values(hash).sort((a, b) => a - b);  //将hash存入数组并排序
  const min = numList[0];  //取得最小值
  if (min.length < 2) { //最小值小于二，直接返回false
      return false;
  }
  while (numList.length > 1) {
      const first = numList.shift();
      const second = numList.shift();
      const gdc = getResult(first, second);
      numList.unshift(gdc);
  }
  return numList[0] > 1;
};

console.log(hasGroupsSizeX(arr2));
