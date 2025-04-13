var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//     return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers); // [6, 112, 4, 96, 10]

//Filter - Create a new array by keeping the items that return true.

// const newNumbers2 = numbers.filter(function (num) {
//     return num > 10;
// });

// console.log(newNumbers); // [56, 48]

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber3 = 0;
// numbers.forEach(function (currentNumber) {
//     newNumber3 += currentNumber;
// })

// console.log(newNumber3); // 114

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

// console.log(newNumber); // 114

//Find - find the first item that matches from an array.

// const newNumbers4 = numbers.find(function(num) {
//     return num > 10;
// })

// console.log(newNumbers4); // 56

//FindIndex - find the index of the first item that matches.

// const newNumbers5 = numbers.findIndex(function (num) {
//     return num > 10;
// })

// console.log(newNumbers5); // 1

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import emojipedia from "./emojipedia.js";

var newArray = emojipedia.map(function (description) {
  return description.meaning.substring(0, 100);
});

console.log(newArray);
