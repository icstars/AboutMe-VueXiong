let arr = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];




let playerX = 2;
let playerY = 2;

let playerX1 = Math.floor(Math.random() * arr.length);
let playerY1 = Math.floor(Math.random() * arr.length);

let score = 0;

function render() {
    console.clear();

    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[row].length; column++) {
            if (row == playerY && column == playerX) {
                arr[row][column] = 'X';
            } else if (row == playerY1 && column == playerX1) {
                arr[row][column] = 'Y';
            } else {
                arr[row][column] = 0;
            }
        }
    }

    console.table(arr);
    console.log('Score:', score);

    if (score == 5) {
        console.log('Congratulations! You win!');
    }
}

function checkScore() {
    if (playerY == playerY1 && playerX == playerX1) {
        score++;
        playerX1 = Math.floor(Math.random() * arr.length);
        playerY1 = Math.floor(Math.random() * arr.length);
        arr[playerY1][playerX1] = 'Y';
    }
}

render();

window.addEventListener("keydown", function (e) {
    if (e.key == 'w') {
        playerY--;
        render();
    } else if (e.key == 'd') {
        playerX++;
        render();
    } else if (e.key == 's') {
        playerY++;
        render();
    } else if (e.key == 'a') {
        playerX--;
        render();
    }

    checkScore();
    render();
});