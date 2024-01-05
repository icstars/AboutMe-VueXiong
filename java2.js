// function log(a) {
//     console.log(a)
// }

// log("Collin")

// function log(a,b) {
//     console.log(a + b)
// }

// log("collin","thao")

// function log3(a,b) {
//     return a + b 
// }
// let name = log3("collin","thao")
// console.log(name)

// function addStrings(str1, str2) {
//     return str1 + str2
// }

// let combination = addStrings("Hi", "Bye")
// console.log(combination)

// function addNums(num, num2, num3) {
//     return num + num2 + num3
// }

// let combo = addNums(5, "Collin", 10)
// console.log(combo)

// let name = function (a,b) { //function expression 

// }

// name(1,5)

// function name2() { //regular function

// }

// let name3 = () => {} //arrow function

// let name4 = (a,b) => {return a + b}  //example

// //var is globe scope 

// let x = 0
// for (var i = 0; i <10; i++) {

// }
// console.log(i)

// function loopArray(arr) {
//     for (char of arr) {
//         console.log(char)
//     }
// } //this to top of fuction doesn't do anything until you name the function
// let nums = [1,2,3,4]

// let names = ["You", "I", "Me"]

// loopArray(nums)
// loopArray(names)

function vendingMachine(money, item) {
let snacks = ["Pepsi", "Hersheys", "Snickers", "Reeses", "Cheetos", "Coke", "Water"]

if (money === "$2.00") {
    for (snack of snacks) {
        if (item === snack) {
            return snack
        }   
        }
        return "Doesn't exist"
    }
}

console.log(vendingMachine("$2.00","Pepsi"))
