let board = [
    [0,0,1],
    [0,1,0],
    [1,0,0]
];

function threeInARow(a,b,c) {
    if (a != 0 && a == c && a == b && b == c) {
        return true;
    } else {
        return false;
    }
}

function checkWinner(board) {

    //RIGHT
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            if (threeInARow(board[row][column], board[row][column + 1], board[row][column +2] )) {
                return "Three in a row!";
            }
        }
    }

    // UP AND DOWN
    for (let row = 0; row < 1; row++) {
        for (let column = 0; column < 3; column++) {
            if (threeInARow(board[row][column], board[row + 1][column], board[row + 2][column] )) {
                return "Three in a row!";
            }
        }
    }

    //DIAGONAL RIGHT
    for (let row = 0; row < 1; row++) {
        for (let column = 0; column < 3; column++) {
            if (threeInARow(board[row][column], board[row + 1][column + 2], board[row + 2][column +3] )) {
                return "Three in a row!";
            }
        }
    }

    //DIAGONAL LEFT
    for (let row = 0; row < 1; row++) {
        for (let column = 0; column < 3; column++) {
            if (threeInARow(board[row][column], board[row + 1][column - 1], board[row + 2][column - 2] )) {
                return "Three in a row!";
            }
        }
    }
}
console.log(checkWinner(board))