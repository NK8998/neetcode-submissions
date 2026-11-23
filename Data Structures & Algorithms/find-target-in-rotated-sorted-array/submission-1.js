class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //we consider the two sorted segments
        //at any given time

        let lo = 0;
        let hi = nums.length - 1;

        while(lo <= hi){
            const mid = Math.floor(lo + (hi - lo)/2);
            const v = nums[mid];

            if(v === target){
                return mid;
            }

            if(nums[lo] <= v ){
                if(target > v || target < nums[lo]){
                    lo = mid + 1;
                }else {
                    hi = mid - 1;
                }
            }else {
                if(target < v || target > nums[hi]){
                    hi = mid - 1;
                }else{
                    lo = mid + 1;
                }
            }
        }

        return -1;
    }
}
