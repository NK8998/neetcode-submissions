class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let lo = 1;
        let hi = Math.max(...piles);
        let res = hi;

        while(lo <= hi){
            const k = Math.floor((lo + hi) / 2);
            
            let totalTime = 0;
            for(const p of piles){
                totalTime += Math.ceil(p / k);
            }

            if(totalTime <= h){
                res = k;
                hi = k - 1;
            }else{
                lo = k + 1;
            }
        }

        return res;
    }
}
