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
     * @return {boolean}
     */
    hasCycle(head) {
        //use a hashmap {next.val -> index}
        //check if we see a next in this map
        let current = head;
        while(current && current.next){
            if(current.isVisited){
                return true
            }
            current.isVisited = true
            current = current.next;
        }

        return false;

    }
}
