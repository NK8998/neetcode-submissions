class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const slower = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        let start = 0;
        let end = slower.length - 1;
        while(start < end){
            if(slower[start] === slower[end]){
                start++;
                end--;
            }else{
                return false;
            }
        }

        return true;
    }
}
