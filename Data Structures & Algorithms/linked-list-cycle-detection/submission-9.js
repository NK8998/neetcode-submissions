/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 * 
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        //If the end of the list points to a node that is behind then we have cycle
        //If we exceed the length of the list then we have a cycle

        //Let's cheat
        //Use a set - O(n) space

        //Empty list
        //get a new item, you append
        //then you pop from it and check with the next
        //if they are same then we have a cycle
        //O(n)

        //Two pointers
        //one walks two steps anotehr one step
        //continuously check if both are the same


        //Cheat

        let current = head;

        while(current){
            if(current.isVisited) return true;
            current.isVisited = true;
            current = current.next;
        }

        return false;



































        //Let's cheat

        // let current = head;

        // while(current){
        //     if(current.isVisited) return true;
        //     current.isVisited = true;
        //     current = current.next;
        // }

        // return false;

        //Actual method using two pointers
        // let fast = head;
        // let slow = head;

        // while(fast && fast.next){
        //     slow = slow.next;
        //     fast = fast.next.next;
        //     if(slow === fast) return true; //We can use this because the object's reference is the same if there's a cycle
        // }

        // return false;
        


       
    }
}
