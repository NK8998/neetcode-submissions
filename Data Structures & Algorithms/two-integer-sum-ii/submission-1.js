class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        //use two pointers: start at begining of array, end at end of array - 1
        //get current sum from the two values at either end
        //if it's greater than target, reduce the end
        //if it's less increase the start
        //otherwise return these indices + 1

        let start = 0;
        let end  = numbers.length - 1;

        while(start < end){
                const sum = numbers[start] + numbers[end];

                if(sum > target){
                    end--;
                }else if(sum < target){
                    start++;
                }else{
                    return [start + 1, end + 1];
                }
        }

        return [];

    }
}
