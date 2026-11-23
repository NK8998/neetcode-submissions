class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //use binary search
        //array has two sorted parts
        //lo, hi and mid
        //at any time, lo ad mid might be in the left or mid and hi
        //might be in the right sorted segment

        let lo = 0;
        let hi = nums.length - 1;

        while(lo < hi){
            let m = Math.floor(lo + (hi - lo) / 2);
            if(nums[m] < nums[hi]){
                hi = m;
            }else {
                lo = m + 1;
            }
        }

        return nums[lo];




    }
}
