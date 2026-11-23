class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix[0].length;
        let lo = 0;
        let hi = matrix.length * n;

        while(lo < hi){
            const mid = Math.floor(lo + (hi - lo) / 2);
            const mat = Math.floor(mid / n);
            const matPos = mid % n;
            const v = matrix[mat][matPos];

            if(v === target){
                return true;
            }else if(target < v){
                hi = mid;
            }else if(target > v){
                lo = mid + 1;
            }
        }

        return false;

    }
}
