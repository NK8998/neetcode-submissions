class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        
        //Stack - LIFO
        //Nested brackets
        //

        //length of string should be even
        //creating empty stack
        //define mapping of closing and opening brackets
        //iterate over the string
        //if it is an opening bracket, push to stack
        //else if the chraracter is closing, pop element from stack
        //if the popped corresponding closing bracket doesn't match current character 
        //return false
        //if stack is empty return true

        //Stack ops
        //pop
        //push
        //peek/top
        //isEmpty / isFull

        //Queue - FIFO
        //enqeue 
        //dequeu 

        //Priority queue
        //Dequeu
        //circular queue
        //
        


        if(s.length % 2 !== 0) return false;
 
        const stack = []; //push add an element to the begining //pop remove the last element
        //push into begining //pop from begining
        const map = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        }

        for(let i = 0; i < s.length; i++){
            if(map.hasOwnProperty(s[i])){
                stack.push(s[i]);
            }else if(map[stack.pop()] != s[i]){
                return false;
            }
        }

        return stack.length === 0; 

        //Time complexity -> O(n) where n is length of the strin. Worst case
        //Space complexity -> O(n) 

















































 
    }
}
