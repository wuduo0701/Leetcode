let arr = [2,3,1,1,4],
    arr2 = [3,2,1,0,4],
    arr3 = [0],
    arr4 = [2,5,0,0];

// var canJump = function(nums) {
//   const len = nums.length;
//   // console.log(len)
//   let pace = 0;   //走过的步伐
//   if(len === 1 && nums[0] === 0){
//     return true;
//   }
//   while(pace <= len){
//     if(pace === len-1){
//       return true;
//     }else{
//       if(nums[pace] === 0){   //进入死循环了
//         return false;
//       }
//       if(pace <= len){
//         pace += nums[pace];
//         // console.log(pace)
//       }else{
//         return false;
//       }   
//     }
//   }
//   return true;
// };
var canJump = function(nums) {
  var canJumpMax = 0;
  var len = nums.length;
  for(var i = 0;i<len;i++){
      if(i > canJumpMax){
       return false;
      }
      canJumpMax = Math.max(canJumpMax,i+nums[i]);
      if(canJumpMax >= len-1){
          return true;
      }
  }
};
console.log(canJump(arr));
console.log(canJump(arr2));
console.log(canJump(arr3));
console.log(canJump(arr4));
// console.log(jump(arr))