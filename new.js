// let x = 0
// let arr =[[1,2,3],["String","Collin","Kaiju"],[true, false, true]];
// console.log(arr[0][1])//to get arr [1,2,3] and Number 2
//typeof to check which of data

// for (let i = 0; i <arr.length; i++) {
//     for (element of arr[i]) {
//     console.log(element); //to print out every element 
//     }
// }

// for (let i = 0; i <arr.length; i++) {
//     for (element of arr[i]) {
//         if (typeof element =="string"){ //to print what is a string only
//             console.log(element); 
//         }
//     }
// }

// for (let i = 0; i <arr.length; i++) {
//     for (element of arr[i]) {
//         if (typeof element == "string") {
//             for(char of element){  //to print each each element in string
//                 console.log(char); 
//             }
//         }
//     }
// }

// for (let i = 0; i <arr.length; i++) { //for each array in the main array
//     for (let j = 0; j <arr[i].length; j++) { //for each element in the array in the main array
//         if (typeof arr[i][j] == "string" && j == 0) { //if that element is a steing AND is at the first position
//             for(char of arr[i][j]){  //log each character in that element to the console
//                 console.log(char); 
//             }
//         }
//     }
// }

// let arr = [34,1,0,7,3,65,26,23,3,7829]; //whiteboard interview question

// for (let i = 0; i <arr.length; i++) { // iterating through the array (iterates 10 times)
//     for (let j = 0; j < arr.length; j++) { // iterating through the array each time the above the loop iterates (iterates 100 times)
//         if (arr[j] > arr[j + 1]) { // if the element at position j is more then the next element 
//             let temp = arr[j]; // temp equals arr[j]
//             arr[j] = arr [j + 1]; // arr[j] now equals the element ahead of 
//             arr[j + 1] = temp; // and the next element  equals temp (which was the first arr[j] before it was changed)

//         }
//     }
// }
// console.log(arr)

//make a function that takes in an array and a target number that returns two numbers from the array that equal
//the target, else, return "No number equals the target"
// function twoSum (a,b)

// let arr = [a,b,c,d]

// for (let i = 0; i <arr.length; i++) { 
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) { 
//             let temp = arr[j]; 
//             arr[j] = arr [j + 1]; 
//             arr[j + 1] = temp;
//     }
// }
// }

// console.log(twoSum([1,2,3,4],5))

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }

    
    return 'No number equals the target'
}

console.log(twoSum([3,6,7,10,9,11,23,52,74 ,34,-1,109], 108));