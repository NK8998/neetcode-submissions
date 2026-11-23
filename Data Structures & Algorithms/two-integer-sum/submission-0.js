class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //iterate throgh numbers
        //use a hashmap to store previous values {value: index}
        //check if compliment exists in map if it does we return their indices
        const map = {};

        for(let i = 0; i < nums.length; i++){
            const comp = target - nums[i];
            if(map.hasOwnProperty(comp)){
                return [map[comp], i];
            }
            map[nums[i]] = i;
        }

        return [];

    }
}
