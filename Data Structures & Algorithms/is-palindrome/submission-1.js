class Solution {
    /**
     * @param {char} c
     * @return {boolean}
     */
    isAlpha(c){
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        )
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        while(start < end){
            if(!this.isAlpha(s[start])){
                start++;
                continue;
            };
            if(!this.isAlpha(s[end])){
                end--;
                continue;
            }

            if(s[start].toLowerCase() === s[end].toLowerCase()){
                start++;
                end--;
            }else{
                return false;
            }
        }

        return true;
    }
}
