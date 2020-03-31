const nums1 = [5, 2, 3, 1],
      nums2 = [5, 1, 1, 2, 0, 0],
      nums3 = [-2, -5, 3],
      nums4 = [-1,2,-8,-10];

//冒泡排序
var bubblesort = (nums) => {
  const len = nums.length;  //数组长度
  let temp;
  for(let i = len; i > 1; i--){
    for(let j = 0; j < i; j++){
      if(nums[j] > nums[j+1]){  //前面比后面大进行互换
        temp = nums[j]; 
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
    }
  }
  //时间消耗更久
  // for(let i = 0; i < len; i++){
  //   for(let j = 0; j < len; j++){
  //     if(nums[j] > nums[j+1]){  //前面比后面大进行互换
  //       temp = nums[j]; 
  //       nums[j] = nums[j+1];
  //       nums[j+1] = temp;
  //     }
  //   }
  // }
  return nums;
}   

//选择排序
var SellectArray = (nums) => {
  const len = nums.length;    //定义数组的长度
  let min ,temp;  //定义最小值和互换值
  for(let i = 0; i < len-1; ++i){
    min = i;  //假设当前为最小值
    for(let j = i+1; j < len; ++j){
      if(nums[j] < nums[min]){  //现在值比最小值还小，进行互换
        min = j;   //每次查找找出最小的数，放在数组前面
      }
    }
    temp = nums[i];   //进行互换
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
}
//快速排序
var quickSort = (nums) =>{
  const len = nums.length;
  if(len == 0){ //数组为空
    return [];
  }
  let left = [], right = [], key = nums[0]; //比key小的数放在左边，大的放在右边
  for(let i = 1; i<len; i++){
    if(nums[i] < key){  //比key小的数
      left.push(nums[i]);
    }else{  //比key大的数
      right.push(nums[i]);
    }
  }
  return quickSort(left).concat(key, quickSort(right))
}

//sort里面接受一个函数作为参数
//sort不支持负数排序，负数排序会出错需要自己定义方法
function sortnums(a, b){
  return a-b;
}

var sortArray = function(nums) {
    //  return nums.sort(sortnums);
    return quickSort(nums);
};      



console.log(sortArray(nums4))