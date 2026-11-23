class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //create the boards first
        //store them in an array that holds arrays of 9 spaces
        //

        for(let i = 0; i < 9; i++){
            let seen = new Map();

            for(let j = 0; j < 9; j++){
                if(board[j][i] !== "."){
                    if(seen.has(board[j][i])) return false;
                    seen.set(board[j][i], i);
                }
            }
        }
        const subBoxes = new Array(9).fill(null).map(() => []);

        let currentSubBox = 0;
        let start = currentSubBox;
        let curRow = 0;

        for(let i = 0; i < board.length; i++){
            let seen = new Map();
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] !== "."){
                    if(seen.has(board[i][j])) return false;
                    seen.set(board[i][j], i);
                }
                subBoxes[currentSubBox].push(board[i][j]);
                if((j + 1) % 3 === 0) currentSubBox++;
            }
            curRow++;
            if(curRow % 3 === 0) {
                start = currentSubBox;
            }else{
                currentSubBox = start;
            }
        }

        for(let i = 0; i < subBoxes.length; i++){
            let seen = new Map();
            for(let j = 0; j < subBoxes[i].length; j++){
                if(subBoxes[i][j] !== "."){
                    if(seen.has(subBoxes[i][j])) return false;
                    seen.set(subBoxes[i][j], i);
                } 
            }
        }

        return true;
        
    }
}
