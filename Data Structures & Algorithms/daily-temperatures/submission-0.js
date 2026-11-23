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

        const indicesArr = [];

        for(let i = 0; i < temperatures.length; i++){
            let res = 0;
            for(let j = i + 1; j < temperatures.length; j++){
                if(temperatures[j] > temperatures[i]){
                    res = j - i;
                    break;
                }
            }
            indicesArr.push(res);
        }

        return indicesArr;

        //OPTIMIZED
        //Use a stack to store indices in a 
        //monotionically decreasing order
        //



    }
}
