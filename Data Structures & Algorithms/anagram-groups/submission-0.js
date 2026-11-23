class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs){
        //for each string check every other combination if it is anagram;
        //make sure to not check twice using a map
        const res = {};

        for(let s of strs){
            const sortedS = s.split("").sort().join('');
            if(!res[sortedS]){
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }

        return Object.values(res); 
    }
}
