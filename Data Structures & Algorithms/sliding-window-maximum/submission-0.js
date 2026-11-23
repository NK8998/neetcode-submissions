class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        //iterate through nums 
        //keep window size using two pointers
        //advance pointers as we check the max element

        let s = 0;
        let e = k - 1;
        let maxEl = [];

        while(
            e < nums.length
        ){
            let greatest = nums[s];
            for(let j = s; j <= e; j++){
                greatest = Math.max(greatest, nums[j]);
            }
            maxEl.push(greatest);
            s++;
            e++;
        }

        return maxEl;
    }
}
