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
        const n = temperatures.length;
        const indicesArr = new Array(n).fill(0);

        for(let i = 0; i < n; i++){
            for(let j = i + 1; j < n; j++){
                if(temperatures[j] > temperatures[i]){
                    indicesArr[i] = j - i;
                    break;
                }
            }
        }

        return indicesArr;

        //OPTIMIZED
        //Use a stack to store indices in a 
        //monotionically decreasing order
        //



    }
}
