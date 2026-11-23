class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        //iterate throgh height
        //for each bar move forward and backwards
        //the bar has to be taller or equal to the current bar
        //height of rectangle will be height of current bar
        //keep adding to the width 
        //get area and update largest
        //time = O(n2) space = O(1)

        // let largest = 0;
        // for(let i = 0; i < heights.length; i++){
        //     const height = heights[i];
        //     let width = 0;
   
        //     //backwards
        //     let j = i;
        //     while(
        //         j >= 0 &&
        //         heights[j] >= height
        //     ){
        //         width++;
        //         j--;
        //     }

        //     //forwards
        //     let k = i + 1;
        //     while(
        //         k < heights.length &&
        //         heights[k] >= height
        //     ){
        //         width++;
        //         k++;
        //     }

        //     const area = width * height;
        //     largest = Math.max(area, largest);
            
        // }
        // return largest;

        let maxArea = 0;
        const stack = []; // [[index, height], [...]]

        for(let i = 0; i < heights.length; i++){
            let start = i;

            while(
                stack.length > 0 &&
                stack[stack.length - 1][1] > heights[i]
            ){
                const [index, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                start = index;
            }
            stack.push([start, heights[i]]);
        }

        for(const [index, height] of stack){
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        return maxArea;



    }
}
