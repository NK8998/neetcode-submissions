class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        //BRUTE
        //Init idices array
        //iterate through temperatures
        //for each check the first temp that's greater
        //store this index in indices array
        //time = O(n2) space = O(n)
        // const n = temperatures.length;
        // const indicesArr = new Array(n).fill(0);

        // for(let i = 0; i < n; i++){
        //     for(let j = i + 1; j < n; j++){
        //         if(temperatures[j] > temperatures[i]){
        //             indicesArr[i] = j - i;
        //             break;
        //         }
        //     }
        // }

        // return indicesArr;

        //OPTIMIZED
        //Use a stack to store indices in a 
        //monotionically decreasing order
        //we pop indices where the curent value is smaller than the value in the stack

        const n = temperatures.length;
        const res = new Array(n).fill(0);
        const stack = []; //[temp, index]

        for(let i = 0; i < n; i++){
            const t = temperatures[i];

            while(
                stack.length > 0 && 
                t > stack[stack.length - 1][0])
            {
                const [_, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([t, i]);
        }

        return res;

    }
}
