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
    findNode(head, pos){
        if(current.evaluatedPos === pos){
            return head;
        }

        let current = head;
        while(current && current.evaluatedPos !== pos){
            current = current.next;
        }

        return current;
    }
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //array of n
        //store nodes in correct order
        //return head from this

        if(!head) return;

        const nodes = [];
        let cur = head;
        while(cur){
            nodes.push(cur);
            cur = cur.next;
        }

        let i = 0;
        let j = nodes.length - 1;

        while(i < j){
            nodes[i].next = nodes[j];
            i++;
            if(i >= j) break;
            nodes[j].next = nodes[i];
            j--;
        }

        nodes[i].next = null;
    }
}
