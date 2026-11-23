class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums){
        //sort in ascending
        //count number of elements whose difference is 1;
        //return count
        //O(n*logn)

        //create set of the numbers
        //check sequences - begining of sequence should have no left value
        //iterate through set and keep getting the sequences
        //return the lonngest sequence
        //O(n)

        const numSet = new Set(nums);
        let longest = 0;

        for(const num of numSet){
            if(!numSet.has(num - 1)){
                let length = 1;
                while(numSet.has(num + length)){
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }

        return longest;  
    }

}