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
        let map = new Map();
        let current = head;
        let index = 0;
        while(current && current.next){
            if(map.has(current.next.val)){
                return true;
            }
            map.set(current.next.val, index);
            current = current.next;
            index++;
        }

        return false;

    }
}
