// //Object

// //  Uqique charateristics and behaviors
// // Object are data strutures with specific data pertaining to an individual or item

// let name = ["Collin", "Vince"];

// // object take properties (each property has a set of keys and values)

// let personObj = {
//     name: "Collin", // property (key: value)
//     age: 22,
//     getName: function () { //methods
//         console.log(this.name)
//     }
// }

// let northWind = {
//     categoryNames: ["Beverage", "poultry"],
//     db1: [],
// }

// let arrayofObjects = [{}, {}, {}]


// let playerData = {
//     username: "cothao",
//     lever: 24,
//     skills: [],
// }

// console.log(personObj);

// personObj.favoriteColor = 'red'; // to add another key to the person

// console.log(personObj);

// // dot notation
// personObj.age = 25 // to change it 

// console.log(personObj)

// console.log(personObj.age) // to grab the object

// // square bracket notation

// console.log(personObj["name"]) // to grab the object


// // defining object
// let obj1 = {
//     color: "red",
//     food: "chicken", // inside
// }


// // assigning new values
// obj1.color = "blue" // outside 

// //method
// personObj.getName()

// let arr = [{name: "Vince", getNamr : function () {console.log (this.name)}}]

// // this key word refernece the object that it is in

// console.log(arr[0]) //object
// console.log(arr[0].name) // to get Vince
// // arr[0].getName()

// arr.push (1)
// let str = "Collin"

// // console.dir(String) //dir is look at what is attach to what's being console.log

// //console.log() //console is a object and log is a method

// let will = {
//     name: "Will",
//     age: 27,
//     hobbies: ["basketball", "bowling", "pickleball"],
// }

// will.age = 25;

// will.name = "William"

// will.hobbies.push("Soccer");

// will.hobbies.pop()

// console.log(will)

// // for in loop
// for (key in will) {
//     // console.log(key) //key of object
//     console.log(will[key])
// }

// //12-18

// // object is a data structure with unique properties and behaviours
 
// let people = ["Vince", "Mkao", "Bella"]

// let vince = { // only use the colon when defining properties within an object 
//     age: 21, // property (key: value)
//     hobbies: ["basketball", "tennis"],
//     print: function() {
//         console.log("Hi");
//     }
// }

// //notation

// //dit notation (objectName.key)

// vince.age // -> 21

// vince.age = 32; // outside of an object, if you want to change something

// vince.favoriteColor = "blue";

// vince.print();

// console.log(vince.age)

// //square bracket notation (objectName["key"])

// vince["hobbies"] // = ["basketball", "tennis"]

// console.log(vince["hobbies"])

//

let list = [];

let addingToList = true;

let taskName;
let dueDate;

function toDoList (task, date) {
    return {
        taskName: task,
        dueDate: date,
    }
}

while (addingToList) {

    taskName = prompt("Enter your task");
    dueDate = prompt("When is the task due?");
    list.push(toDoList(taskName,dueDate)); // this is what we're pushing let obj = toDoList("Clean", "02/03/2001")
    // addingToList = false;
    console.table(list);
    if (confirm("Do you want to add another chore?")) {
        continue;
    } else {
        addingToList = false;
    }
    
}
//console.log(toDoList(taskName, dueDate));

console.table(list);