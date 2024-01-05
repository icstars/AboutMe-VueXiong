let arr = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]

// console.table(arr) // Displays array as a table

// EVENT LISTERNERS

// The component listening for a certain event

/* Types of events, has to be in a string

click
keydown
keyup
mouseover
mouseleave
resize
submit

*/

// window.addEventListener("click", function() {
//     console.log("Hello world")
// })

// window.addEventListener("keydown", function() {
//     console.log("Hello")
// }) // keydown to make something move

let playerX = 2;
let playerY = 3; //should be first 

// console.log(arr[playerY][playerX]) // same as [2][2] since playerX and Y are = 2

// arr[playerY][playerX] = 1;

// playerY += 1;

// arr[playerY][playerX] = 1;

// console.table(arr);

function render() {
    console.clear()
    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[row].length; column ++) {
                if (row == playerY && column == playerX) {
                arr[row][column] = 'X';
            } else {
                arr[row][column] = 0;
            }
        }
    }

console.table(arr);

}

render();

window.addEventListener("keydown", function(e) {
    // render();
    // console.log(e.key);
    if (e.key == 'w') { // if the key we presses is w
        playerY --; //lower the players y
        render(); // we render the map again to show the changes we madw
    } else if (e.key == 'd') {
        playerX ++;
        render();
    } else if (e.key == 's') {
        playerY ++;
        render();
    } else if (e.key == 'a') {
        playerX --;
        render();
    }
})