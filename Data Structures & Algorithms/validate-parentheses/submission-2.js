class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //bracket map { "{" -> "}"}
        //if it's opening we push into stack
        //if it's closing we pop from stack and check
        //if they match return true else return false

        const map = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        };

        const stack = [];

        for(let i = 0; i < s.length; i++){
            if(map.hasOwnProperty(s[i])){
                stack.push(s[i]);
            }else if(map[stack.pop()] !== s[i]){
                return false;
            }
        }

        return stack.length === 0;
    }
}
