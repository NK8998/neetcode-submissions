class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        //time = (O(n+m)log(m+n)) space = (O(n + m))
        const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
        const n = sorted.length;

        if(n % 2 === 0){
            const mid1 = n / 2;
            const mid2 = mid1 + 1;

            return (sorted[mid1 - 1] + sorted[mid2 - 1]) / 2;

        }else{
            const mid = Math.ceil(sorted.length / 2);
            
            return sorted[mid - 1];
        }

        //binary search on both from 0....m + n
        //we determine 


    }
}
