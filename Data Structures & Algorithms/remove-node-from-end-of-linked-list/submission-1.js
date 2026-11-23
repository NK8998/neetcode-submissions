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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //get length
        //idx = length - n
        //update pointer
        let dummy = new ListNode(1213, head);
        let length = 0;
        let curr = dummy;

        while(curr){
            curr = curr.next;
            length++;
        }

        let idx = length - n;

        curr = dummy;
        let count = 0;
        while(curr && count !== idx - 1){
            curr = curr.next;
            count++;
        }

        curr.next = curr.next?.next ?? null;

        return dummy.next;
    }
}
