class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let cSet = new Set();
        let l = 0;
        let res = 0;

        for(let r = 0; r < s.length; r++){
            while(cSet.has(s[r])){
                cSet.delete(s[l]);
                l++;
            }
            cSet.add(s[r]);
            res = Math.max(r - l + 1, res);
        }

        return res;
    }
}
