class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let zeroCount = 0;
        let product = nums[0];
        for(let i = 1; i < nums.length; i++){
            if(nums[i] === 0){
                zeroCount++;
            }else{
                product *= nums[i];
            }
        }

        let result = [];
        for(let i = 0; i < nums.length; i++){
            if(
                nums[i] !== 0 && zeroCount === 1 ||
                zeroCount > 1
                )
            {
                result.push(0);
            }else if(nums[i] === 0){
                result.push(product);
            }else{
                result.push(product / nums[i]);
            }
        }

        return result;
    }
}
