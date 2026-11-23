class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);

        let fleets = 1;
        let prevTime = (target - pair[0][0]) / pair[0][1];
        for(let i = 0; i < pair.length; i++){
            let currentTime = (target - pair[i][0]) / pair[i][1];
            if(currentTime > prevTime){
                fleets++;
                prevTime = currentTime;
            }
        }

        return fleets;

    }
}
