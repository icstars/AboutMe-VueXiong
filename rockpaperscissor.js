// variable - container for data to be used later 
// let name = 'Vue'

// debugger
// const name = "Vue"
// name = 'Collin' //Collin is String
// console.log(name)

// let num = '10' //concatation
// let num2 = '12'
// console.log(num + num2)

// let name = 'vue'
// let age = 23
// let sentence = "hi my name is" + ' ' + name + ' ' + " and i am" + ' ' + age
// console.log(sentence)

// let sentence2 = "Hello World"

// let sentence3 = `Hi my name is vue. ${sentence2}` //template literal
// console.log(sentence3)

//array? a list of data. element goes inside the []

// let array = [1,2,3,4]
// array[2] = 5
// console.log(array[2])

//Grabbing the last element when you dont know what it is
// let names = ["Collin", "Lucy", "Me", "Me2"]
// let len = names.length-1
// names[len] 
// console.log(2)
// console.log(len)
// console.log(names[len]) //same as the bottom
//console.log(names[names.length-1])

// for (let i = 0; i < names.length; i++) { //for loop
//     console.log(names[i])
// }
//  for (char of names) { //for of loop same as one of top
//     console.log(char)
 //}
 
// let j = 0
//  while (j < names.length) {
//     console.log(name[j])
//     j++
//  }


// let name ='bob' //vue output = hi vue | dude output hi dude | random name output who are you

// if (name === 'vue') {
//    console.log('Hi vue')
// } else if (name === 'Dude') {
//    console.log('Hi Dude')
// } else {
//    console.log('who are you')
// }

// function addNumbers(a,b) {
//    return a + b
// 

// let result = addNumbers(5,5)
// let result2 = addNumbers(1,1)
// let result3 = addNumbers(4,7)
// console.log(result, result2, result3)

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
//    alert(`You beat ${computerChoice} with ${player}`);
//    console.log("You Win");
// } else {
//    alert(`You got beat with ${computerChoice} because you chose ${player}`);
//    console.log("You Lose");
// }


function play() {
   let choices = ["rock", "paper", "scissor"];
   let player = prompt("rock, paper, scissor").toLocaleLowerCase()
   let computerIndex = Math.floor(Math.random() * choices.length);
   let computerChoice = choices[computerIndex];
   if (player === computerChoice) {
       return "Tie!";
   } else if (
       (player === "rock" && computerChoice === "scissor") ||
       (player === "paper" && computerChoice === "rock") ||
       (player === "scissor" && computerChoice === "paper")
   ) {
      return `You chose ${player} and won against ${computerChoice}`;
   } else {
       return `You chose ${player} and lost against ${computerChoice}`;
   }
}
console.log(play())