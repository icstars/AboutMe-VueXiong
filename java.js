//let arr = [1,2,3,4,5]
 
//let lastItem = arr.slice(-1)
 
//let num = lastItem.slice(0)
 
//num = 9
 
//arr[arr.length - 1]
 
// console.log(arr)
 
//const arr1 = [5,6,2,9]
 
//arr1[1]
 
//console.log(arr1)
//arr1.push(arr1)
 
//arr.pop()
//console.log(arr1)
 
//Math.random()
 
//console.log(Math.random() * arr.length)
 
//console.log(arr1[Math.floor(Math.random() * arr1.length)])
 
//let arr = [2,4,5,6,2,4]
//let len = Math.random() * arr.length
//console.log(arr[Math.floor(len)])
 
 
//let arr = [3,6,9,12,15,18,21]
 
//let randomNumber = Math.floor(Math.random() * arr.length)
//console.log(randomNumber)
 
 
 
// FOR LOOPS
// It repeats a task or code a certain number of times
// based on a condition.
 
// split() - splits a string by the specified character
// useful to split some data from a string
 
// join() - joins array elements between a specified character
// useful to join data together
 
//let arr = [1, 2, 3]
 
//console.log(arr.join(''))
 
 
//let str = 'coallain'
//console.log(str.split('a'))
 
 
// Traditional //
// 1. initializer 2. condition 3. iterator
 
 
//for (let i = 0; i < arr.length; i++) {
//    console.log(i)
//}
 
 
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//}
 
 
 
// for of loop
 
//for (char of arr) {
//    console.log(char)
//}
 
//let string = 'Phanyia'
//for (char of string) {
//    console.log(char)
//}
 


// while loop

// let name = "BOB"
// let arr =[]
// let letter = 0
// while (letter < name.length) {
//   arr.push(name[letter])
// letter++
// console.log()
// }
 
// let name = "DUDE";
// let arr = [];
// let letter = 0;

// while (letter < name.length) {
//   arr.push(name[letter]);
//   letter++;
// }

// console.log(arr);

// let a = []
// let name = "me"
// let x = name.length-1
// while(x>0){
//    a.push(name[x])
//    x--
// }

// console.log(a)
//let word = 'bye'
//let attempts = 0
//let arr = []
//let characters = 'abcdefghijklmnopqrstuvwxyz'
//let charArray = characters.split('')
 
 
//while (arr.join(``) != word) {
//    arr = []
//    for (char of word) {
//        arr.push()
//    }
//}
 
//console.log(charArray)
 
//let arr = []
//let characters = ('collin', 2, 3, 4, 5)
 
//while (arr.join(``) != word) {
//    arr=['collin', 2, 3, 4, 5]
//    for (char of word) {
//    }
//}
 
//console.log(characters)
 
 
//while (arr.join(``) != word) {
//    arr = []
//    for (char of word) {
//    arr.push(charArray[Math.floor(Math.random() * charArray.length)])
//    }
//    console.log(arr.join(``))
//    attempts++
//}
 
 //console.log(`Number of attempts: ${attempts}`)
 
 
//let numbers = [4,1,10,100,32,5]
 
//for (let i = 0; i < numbers.length; i++) {
//    console.log(i)
//}
 
//const arr = ['collin',2,3,4,5]
// for (let i = 0; i <arr.length; i++) {
//    console.log(arr[i])
// }
 
 
//let p = 0
//while (p < 5) {
//    p++
//    console.log(p)
//}
 
 
//const arr = ['collin', 2, 3, 4, 5];
 
//let i = 0;
//let text = "";
//while (arr[i]) {
//    text += arr[i] + "<br>";
//    i++;
//}
 
//console.log(arr[i])
 
//let array = [1,2,3]
//while()
 
 
 
////conditionals
///allows you to specify different actions based on whether a
 
//let y = "Hello World";
//console.log(y);
 
//y = "Hello i.c. stars";
//console.log(y);
 
//console.log(y === "Hello i.c. stars");
 
 
//let x;
//console.log(x);
 
//const array = ['Lucycan', 'Collin'];
//for(element of array){
//console.log(element)
//}
 
//if (y) {
//    console.log("this code block will execute");
//}
 
//sometimes we want to just check if a variable has a value
// 'x' doesn't have a value, so the code "this code block will execute" won't run
//if (x) {
//    console.log("this code block will execute")
//}
 
// else{} runs if the variable isn't true.
 
//if (x) {
//    console.log("this code block will execute")
//} else {
//    console.log("this is a flase block");
//}
 
// let x=10
// if(x<5) {
//    console.log('less')
// } else if (x>5) {
//    console.log('more')
// }
 
/// this is to compare
// if y is truthy, then the 'if' statement will execute first block
// if y is falsy, then the 'else' state will execute the second block
//if(y === "Hello i.c stars"){
//    console.log("this is true");
//} else {
//    console.log("This is false");
//}
 
 
/// to evaluate more than just two options
// this will console log 0, 1, 2
//let ranNum = Math.floor(Math.random() * 3);
//console.log(ranNum);
 
//if(ranNum === 0) {
    /// something happens here
//    console.log("zero is your random Number")
//}else if (ranNum === 1) {
    /// something happens here
//    console.log("One is your random Number")
//}else if (ranNum === 2) {
    /// something happens here
//    console.log("two is your random Number")
//}
 
 
/// logical and operator
 
//if(ranNum === 0 && y) {
//    console.log("Both these expression have to be truthy for this code block to run")
//} else {
//    console.log("one or both expressions are false")
//}
 
 
/// logical or operator
 
//if (ranNum ===0 || ranNum === 1) {
//    console.log("only one of these needs to be truth")
//}    else {
//        console.log("everything else here needs to be false")
//    }
 
 
 
 
 
// this will be falsy because ranNum === 0 and 0 = falsy
//if (ranNum === 0 && ranNum) {
//    console.log("this is true")
//} else if {
//    console.log("this is partially true")
//} else {
//    console.log("this is wrong")
//}
 
 
//if (ranNum === 0) {
//    console.log(y);
//    console.log(x);
//    let staff0 = "lucycan";
//    console.log(staff0);
//}
//else if (ranNum === 1) {
//    let staff1 = "collin";
//    console.log(staff1);
//} else if (ranNum === 2) {
//    let staff2 = "mark";
//}
 
//console.log(staff0) /// expected outcome
 
 
// debugger;
// // let i = "Hello"
// // console.log(i);
 
// let dudes = ["lucycan", "collin", "mark", "cortez", "will"]
// //console.log(dudes);
// //console.log(dudes[1]);
 
 
// for (let j = 0; j < dudes.length; j++) {
//    console.log(dudes[j]);
//     if(dudes[j] === "will") {
//          console.log(`hello, ${dudes[j]}. How are you?`)
//     }else {
//         console.log(`${dudes[j]}`);
//     }
// }

// let player = ["rock", "paper", "scissor"]
// let computer = math.floor(math.random () * playerChoice.length)

// let playerChoice = prompt("rock, paper, scissors");
// if (player === computer) {
//     console.log("Tie");
// } else if (
//     (playerChoice === "rock" && computer === "scissors") ||
//     (playerChoice === "paper" && computer === "rock") ||
//     (playerChoice === "scissors" && computer === "paper")
// ) {
//     console.log("You Win");
// } else (
//     (computer === "rock" && playerChoice === "scissors") ||
//     (computer === "paper" && playerChoice === "rock") ||
//     (computer === "scissors" && playerChoice === "paper")
// ) 
//     console.log("You lose");{

// if (player === computer) 
// console.log("Tie");{

// }else if (playerChoice === "rock" && computer === "scissors")
//     (playerChoice === "paper" && computer === "rock") ||
//     (playerChoice === "scissors" && computer === "paper"); 
//     console.log("You Win"); {
// } else (computer === "rock" && playerChoice === "scissors")
//     (computer === "paper" && playerChoice === "rock") ||
//     (computer === "scissors" && playerChoice === "paper") 
//     console.log("You lose"); {
//     }
    
// console.log("computer choice: rock");
// console.log("player choice: paper ");
// console.log("Decision: Computer wins");

// //array of choices
// let choices = ["rock", "paper", "scissors"];

// // Generate a random index for computerChoice
// let computerChoiceIndex = Math.floor(Math.random() * choices.length);
// let computerChoice = choices[computerChoiceIndex];

// // Get player choice


// if (playerChoice === computerChoice) {
//     alert("It's a tie!");
// } else if (
//     (playerChoice === "rock" && computerChoice === "scissors") ||
//     (playerChoice === "paper" && computerChoice === "rock") ||
//     (playerChoice === "scissors" && computerChoice === "paper")
// ) {
//     alert("You win!");
//     console.log(`Computer Choose ${computerChoice} and lost to your choice: ${playerChoice}`)
// } else {
//     alert("Computer wins!");
//     console.log(` ComputerChoice ${computerChoice}`)

// let choice = ["rock", "paper", "scissor"];
// let player = prompt("rock, paper, scissor");
// let computerIndex = Math.floor(Math.random() * choice.length);
// let computerChoice = choice[computerIndex];

// if (player === computerChoice) {
//    alert("Tie");
//    console.log("Tie");
// } else if (
//    (player === "rock" && computerChoice === "scissor") ||
//    (player === "paper" && computerChoice === "rock") ||
//    (player === "scissor" && computerChoice === "paper")
// ) {
//    alert("You Win");
//    console.log("You Win");
// } else {
//    alert("You Lose");
//    console.log("You Lose");
// }


// function twoSum(a, b) {
//     let arr = [];

//     // Bubble sort the array in ascending order
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] + arr[i]) {
//                 let temp = arr[j] + arr[i];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 return
//             }
//         }
//     }
//     console.log('Does not Exist')
// }

// // Example usage:
// console.log(twoSum(1, 2, 3, 4),5);

function twoSum(arr, target) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    if (result.length === 0) {
        console.log('No pairs found');
    }

    return result;
}

console.log(twoSum([1, 2, 3, 4, 2], 5));