class Solution {
public:
    int maxArea(vector<int>& heights) {


        // 
        //Sort array 
        //Highest element
        //second highest element 
        //index of heighest in original array
        //index of second highest in original array
        //area = index of highest - index of second highest * (min(highest, second heighest))
        //(Onlogn)
        //O(n)

        //Height
        //Indices
        //look for two greatest and farthest distance from each other
        //

        //OPTIMIZED//
        //have two pointers
        //one at last index and another at begining
        //have a max area variable
        //calculate the current area
        //update max area variable with the largest area
        //advance pointers - 

        //BRUTE FORCE//
        //Max Area initialize to 0
        //For each bar, we calculate the area of every subsequent bar
        //O(n^2)
        //O(1)

        int l = 0;
        int r = heights.size() - 1;

        int maxArea = 0;

        while(l < r){
            int area = (r - l) * min(heights[l], heights[r]);
            maxArea = max(area, maxArea);

            if(heights[l] < heights[r]){
                l++;
            }else if(heights[r] < heights[l]){
                r--;
            }else{
                l++;
                r--;
            }
        }

        return maxArea;
    }
};
