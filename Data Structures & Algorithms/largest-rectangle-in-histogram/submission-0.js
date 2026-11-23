class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // 
        //
        //
        //

        let largest = 0;
        for(let i = 0; i < heights.length; i++){
            const height = heights[i];
            let width = 0;
   
            //backwards
            let j = i;
            while(
                j >= 0 &&
                heights[j] >= height
            ){
                width++;
                j--;
            }

            //forwards
            let k = i + 1;
            while(
                k < heights.length &&
                heights[k] >= height
            ){
                width++;
                k++;
            }

            const area = width * height;
            largest = Math.max(area, largest);
            
        }

        return largest;
    }
}
