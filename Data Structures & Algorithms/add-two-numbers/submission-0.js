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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let carry = 0;
        let dummy = { val: 0, next: null };
        let cur = dummy;

        while(l1 || l2 || carry){
            const val1 = l1?.val ?? 0;
            const val2 = l2?.val ?? 0;
            const sum = val1 + val2 + carry;
            const val = sum % 10;
            carry = (sum - val) / 10;
            cur.next = { val, next: null };
            l1 = l1?.next;
            l2 = l2?.next;
            cur = cur.next;
        }

        return dummy.next;
    }
}
