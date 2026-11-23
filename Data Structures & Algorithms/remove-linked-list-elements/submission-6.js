/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {

        if(!head) return head;

        let dummy = new ListNode(0);
        dummy.next = head;
        let current = dummy;

        while(current){
            while(current.next && current.next.val === val){
                current.next = current.next.next;
            }
            current = current.next;
        }


        return dummy.next;
    }
}
