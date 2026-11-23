class MinStack {
    constructor() {
        //initialize static array
        //store minimum
        //store a pointer into this array
        //this.sorted = new Array(100);
        this.stack = new Array(100);
        this.min = null;
        this.pointer = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        //use the pointer to insert new element
        //check if the current element smaller than min
        //if it is update min
        if(this.min === null){
            this.min = val;
        }else{
            this.min = Math.min(this.min, val);
        }
        this.stack[this.pointer] = val;
        this.pointer++;
    }

    /**
     * @return {void}
     */
    pop() {
        //use pop operation to return the current value
        //iterate through stack to find smallest
        //value if the popped was smallest
        const curTop = this.top();
        this.stack[this.pointer - 1] = null;
        this.pointer = Math.max(this.pointer - 1, 0);

        //to be addressed
        if(this.min === curTop){
            let smallest = this.stack[0];
            for(let i = 0; i < this.pointer; i++){
                smallest = Math.min(smallest, this.stack[i]);
            }
            this.min = smallest;
        }
        
    }

    /**
     * @return {number}
     */
    top() {
        //creates a copy of the top value and returns it
        return this.stack[this.pointer - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        //returns this.min
        return this.min;
    }
}
