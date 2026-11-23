class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    //iterate through array
    //concatenate strings
    encode(strs) {
        this.posMarkers = [];
        let encodedString = "";
        
        for(let i = 0; i < strs.length; i++){
            this.posMarkers.push(strs[i].length);
            encodedString += strs[i];
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //create array to store the strings
    //iterate through characters
    //have a position marker for each string
    //iterate through the string 
    
    decode(str) {
        const arr = [];
        let originalString = "";
        let posCounter = 0;

        for(let i = 0; i <= str.length; i++){  
            if(this.posMarkers[posCounter] === 0){
                arr.push(originalString);
                originalString = "";
                posCounter++;
            }
            this.posMarkers[posCounter]--;
            originalString += str[i];
            
        }

        return arr;
    }
}
