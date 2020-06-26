/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(3);
const n5 = new ListNode(2);
const n6 = new ListNode(1); 
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;


const m1 = new ListNode(1);
const m2 = new ListNode(1);
const m3 = new ListNode(1);
const m4 = new ListNode(1);
const m5 = new ListNode(2);
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;


// var removeDuplicateNodes = function(head) {
//   let arr = [];
//   if(!head) return [];
//   while(head) {
//     if(arr.indexOf(head.val) === -1) {
//       arr.push(head.val);
//     }
//     head = head.next;
//   }
//   return arr;
// };

var removeDuplicateNodes = function(head) {
  if(!head) return head;
  // 利用Set结构去除重复的值
  const res = head, arr = new Set().add(head.val);
  while(head.next) {
    if(arr.has(head.next.val)) {
      head.next = head.next.next;
    } else {
      arr.add(head.next.val);
      head = head.next;
    }
  }
  return res;
};

console.log(removeDuplicateNodes(n1));
console.log(removeDuplicateNodes(m1));
