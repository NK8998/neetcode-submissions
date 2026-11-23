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

        //Let's cheat
        // let current = head;

        // while(current){
        //     if(current.isVisited) return true;
        //     current.isVisited = true;
        //     current = current.next;
        // }

        // return false;

        //Actual method using index
        let fast = head;
        let slow = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true; //We can use this because the object's reference is the same if there's a cycle
        }

        return false;
        


       
    }
}
