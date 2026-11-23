class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //use two pointers
        //to get area, take difference of the indices * smallest height
        //update max area
        let l = 0;
        let r =  heights.length - 1;

        let maxArea = 0;

        while(l < r){
            const area = (r - l) * Math.min(heights[l], heights[r]);
            maxArea = Math.max(area, maxArea);

            if(heights[r] > heights[l]){
                l++;
            }else if(heights[l] > heights[r]){
                r--;
            }else{
                l++;
                r--;
            }
        }

        return maxArea;
    }
}
