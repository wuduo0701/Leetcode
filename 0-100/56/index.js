let arr1 = [[1,3],[2,6],[8,10],[15,18]];
let arr2 = [[1,4],[4,5]];


var merge = function(intervals) {
  if(intervals.length === 0)    //数组未空
    return [];
  var res = [];
  intervals.sort(function(a, b){   //以数组的每项中的第一个进行排序，即左边界数
    return a[0] - b[0];
  })
  res.push(intervals[0])
  for(var i = 1; i < intervals.length; i++){
    if(intervals[i][0] > res[res.length-1][1])
      res.push(intervals[i]);
    else
      if(intervals[i][1] > res[res.length-1][1])
        res[res.length-1][1] = intervals[i][1];
  }
  return res;
};
// console.log(arr1.sort(function(a,b){
//   return a[0]-b[0];
// }))
// console.log(merge(arr2))