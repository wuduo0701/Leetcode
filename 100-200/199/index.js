function ListNode(val) {
  this.val = val;
  this.left = null;   //指向左节点
  this.right = null;  //指向右节点
}
// 输入: [1,2,3,null,5,null,4]
// 输出: [1, 3, 4]
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(5);
const n5 = new ListNode(4);
n1.left = n2;
n1.right = n3;
n2.right = n4;
n3.right = n5;
// console.log(n1)
var rightSideView = function(root) {
  let arr = [];
  if(!root)   //链表为空
    return [];
  while(root){
    arr.push(root.val)
    if(!root.right){
      root = root.left
    }else{
      root = root.right;
    }
  }
  return arr;
};

var rightSideView = function(root) {
  if(!root) return []
  let arr = []
  dfs(root, 0, arr)
  return arr
};
function dfs (root, step, res) {
  if(root){
    if(res.length === step){
      res.push(root.val)           // 当数组长度等于当前 深度 时, 把当前的值加入数组
    }
    // console.log(step, '-------', res)
    dfs(root.right, step + 1, res) // 先从右边开始, 当右边没了, 再轮到左边
    dfs(root.left, step + 1, res)
  }
}
console.log(rightSideView(n1))
