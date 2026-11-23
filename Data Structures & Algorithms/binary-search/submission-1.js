class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lo = 0;
        let hi = nums.length;

        while(lo < hi){
            let mid = Math.floor(lo + (hi - lo) / 2);
            let  v = nums[mid];

            if(v === target){
                return mid;
            }else if(target < v){
                hi = mid;
            }else if(target > v){
                lo = mid + 1;
            }
        }

        return -1;

    }
}
