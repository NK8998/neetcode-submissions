class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //map to store seen values
        //one pass to check if exists in map otherwise return false

        const seen = {};

        for(const num of nums){
            if(seen.hasOwnProperty(num)){
                return true;
            }
            seen[num] = 1;
        }

        return false;

    }
}
