class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
            const arr = this.keyStore.get(key);
            arr.push([value, timestamp]);
        }else{
            this.keyStore.set(key, [[value, timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";
        const arr = this.keyStore.get(key);

        if(!arr.length) return "";

        let lo = 0;
        let hi = arr.length;

        while(lo < hi){
            const mid = Math.floor(lo + (hi - lo) / 2);
            const v = arr[mid][1];

            if(v === timestamp){
                return arr[mid][0];
            }else if(v < timestamp){
                lo = mid + 1;
            }else{
                hi = mid;
            }
        }

        lo = lo - 1 < 0 ? 0 : lo - 1;

        if(arr[lo][1] > timestamp) return "";

        return arr[lo][0];
    }
}
