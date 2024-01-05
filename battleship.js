// let board1 = [
//     [1, 1, 1],
//     [0, 0, 0],
//     [0, 0, 0],
// ];

// let board2 = [
//     [1, 0, 0],
//     [1, 0, 0],
//     [1, 0, 0],
// ];

// function target(a, b, c) {
//     if (a !== 0 && a === c && a === b && b === c) {
//         return "hit";
//     } else {
//         return "miss";
//     }
// }

// function checkWinner() {
//     // Check for Player 1
//     let player1 = prompt ("Player 1 Pick")
//     for (let row = 0; row < 3; row++) {
//         for (let column = 0; column < 1; column++) {
//             if (target(board1[row][column], board1[row][column + 1], board1[row][column + 2]) === "hit") {
//                 alert("Player 1 hit!");
//             }
//         }
//     }

//     // Check for Player 2
//     let player2 = prompt (" Player 2 Pick")
//     for (let row = 0; row < 1; row++) {
//         for (let column = 0; column < 3; column++) {
//             if (target(board2[row][column], board2[row + 1][column], board2[row + 2][column]) === "hit") {
//                 alert("Player 2 hit!");
//             }
//         }
//     }
// }

// console.log(checkWinner())

// working one
const b1 = [
    [0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0],
];

const b2 = [
    [0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0],
];

let u1Row;
let u1Column;
let u1Score = 0;

while (u1Score < 2) {

let u1Row = prompt ("Please pick row")
let u1Column = prompt ("Please pick column")

    if (b2[u1Row][u1Column] = 1) {
        alert ("Hit");
        b2[u1Row][u1Column] = 0
        u1Score++;
    } else {
        alert ("Miss")
    }

    alert (`Current Score: User1: ${u1Score}`);

    if (u1Score >= 2) {
        alert("User 1 win");
        break;
    }

}