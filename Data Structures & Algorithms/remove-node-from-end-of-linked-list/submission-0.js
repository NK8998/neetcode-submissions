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
        let length = 0;

        let current = head;
        while(current){
            length++;
            current = current.next;
        }

        const pos = length - n;

        if(pos === 0){
            head = head.next
            return head;
        }

        let index = 0;
        current = head;
        while(current && index + 1 !== pos){
            current = current.next;
            index++;
        }

        if(current.next){
            current.next = current.next.next;
        }

        return head;
    }
}
