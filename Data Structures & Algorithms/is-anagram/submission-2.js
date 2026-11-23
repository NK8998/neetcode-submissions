class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //store characters of first string in map {char: freq}
        //loop again removing characters from map
        //last loop will check if any character has freq > 0
        if(s.length != t.length) return false;
        
        const map = new Map();
        for(const char of s){
            map.set(char, (map.get(char) || 0) + 1)
        }

        for(const char of t){
            if(map.has(char)){
                const v = map.get(char);
                map.set(char, (v - 1));
            }
        }

        for(const [_, freq] of map){
            if(freq > 0){
                return false
            }
        }
        
        return true;
    }
}
