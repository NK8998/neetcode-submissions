class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //use a hashset if character exists remove from hashset
        
        const seen = new Set();
        let l = 0;
        let res = 0;

        for(let i = 0; i < s.length; i++){
            while(seen.has(s[i])){
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[i]);
            res = Math.max(res, i - l + 1);
        }
        return res;
    }
}
