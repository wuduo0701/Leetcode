// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

function ListNode(val){
  this.val = val;
  this.next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(4);
const m1 = new ListNode(1);
const m2 = new ListNode(3);
const m3 = new ListNode(4);
n1.next = n2;
n2.next = n3;
m1.next = m2;
m2.next = m3;
var mergeTwoLists = function(l1, l2) {
  var small = new ListNode(-1);   //定义一个新链表
  let prev = small;
  while(l1 != null && l2 != null){
    if(l1.val <= l2.val){
      prev.next = l1;
      l1 = l1.next;
    }else{
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 === null ? l2 : l1;
  return small.next;
};

console.log(mergeTwoLists(n1, m1));