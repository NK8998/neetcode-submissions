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
     * @return {ListNode}
     */
    reverseList(head) {

        // Linked List
        // linear 
        // each node related to previous using pointers
        
        // use case of linked Lists
        // 
        // 1. stacks ->
        // 2. operating systems -> tasks scheduling
        // 3. math
        // 4. HashMaps -> {Key : value},


        //john, jon -> hash 
        // {
        // }
        // 
        // hash -> key
        // same hash
        // linked list

        // [0...16]
        //hash
        //index 0, 16
        // [0] -> {john, 1, hash} -> {jon, 1, hash}
        // 

        // previous and current
        // 0(n)
        // loop through list
        // store values 
        // create the new linked list
        // return the new head 

        // extra space -> O(n)
        // time complexity -> O(n) 

        // let array = []; // store nodes, start from end

        // let current = head
        // while(current){
        //     console.log(current.val);
        //     current = current.next;
        // }

        // prev = null, current = head
        // store next
        // reverse pointers
        // move forward
        // ret prev

        // [0,1,2,3]
        // 0 -> 1    null
        // 1 -> 2    0
        // 2 -> 3    1
        // 3 -> null 2
        

        let prev = null;    // null 0 1 2 3
        let current = head; // 0 1 2 3 null
                                     
        while(current){
            let next = current.next; // 1 2 3 null
            current.next = prev;     // null 0 1 2
            prev = current;          // 0 1 2 3
            current = next;          // 1 2 3 null
        }

        return prev; 
    }
}
