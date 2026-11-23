class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //check if current bar is greater than previous
        //if it is, that is the begining of our trough
        //Keep adding to this trough til we get a bar that is greater that 
        //begining of trough
        //calculate water it can hold by:
         //taking difference of (indices - 1) * height of begining of trough
         //then subtract height of every bar in between 
         //O(n2) at worst

        //get the maxLeft of each position
        //get the maxRightof each position
        //get the minimum and subtract from height[i] to get voume
        //add this up 

        let n = height.length;
        if(n === 0) return 0;

        let leftMax = new Array(n).fill(0);
        let rightMax = new Array(n).fill(0);

        leftMax[0] = height[0];
        for(let i = 1; i < n; i++){
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }

        rightMax[n - 1] = height[n - 1];
        for(let i = n - 2; i >= 0; i--){
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }

        let res = 0;
        for(let i = 0; i < n; i++){
            res += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return res;

    }
}
