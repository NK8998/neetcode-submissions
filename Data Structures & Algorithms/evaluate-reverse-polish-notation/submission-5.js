class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        //let's have an array implementation of a stack
        //2. we check if the value is between -100 and 100
        //if it is push this value into stack 
        //else we perform the operation needed
        //if else statements to handle these operations
        //we store the result back into the stack
        //repeat from step 2
        const stack = [];

        for(let i = 0; i < tokens.length; i++){
            const tokenValue = Number(tokens[i]);
            if(!isNaN(tokenValue)){
                stack.push(tokenValue);
            }else{
                const val2 = stack.pop() ?? 0;
                const val1 = stack.pop() ?? 0;
                const operation = tokens[i];

                if(operation === "+"){
                    stack.push(val1 + val2);
                }else if(operation === "-"){
                    stack.push(val1 - val2);
                }else if(operation === "*"){
                    stack.push(val1 * val2);
                }else if(operation === "/"){
                    const res = val1 / val2;
                    if(!isNaN(res)) stack.push(Math.trunc(res));
                }else{
                    console.log("Invalid operation");
                }
            }
        }

        return stack.pop();
    }
}
