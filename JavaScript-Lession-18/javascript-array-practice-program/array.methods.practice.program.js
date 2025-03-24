//? javascript array methods practice program ------------------------------------------------------------------------------------------------->

//! #problem-1 --------------------------------------------------------------------------------->

//* push & pop
// problem: You have an array of students' names: let students = ["Alice", "Bob", "Charlie"]; Add "David" at the end of the array. Remove the last student from the array and store it in a variable.

let students = ["Alice", "Bob", "Charlie"];
students.push('David');

let removeLastStudentNameFromArray = students.pop();

console.log(students); // output: ["Alice", "Bob", "Charlie"];

//! #problem-2 --------------------------------------------------------------------------------->

//* unshift & shift
// problem: You have an array of fruits: let fruits = ["Mango", "Banana", "Apple"]; Add "Orange" at the beginning of the array. Remove the first fruit from the array and store it in a variable.

let fruits = ["Mango", "Banana", "Apple"];
fruits.unshift('Orange');

let removeFirstFruitsFromArray = fruits.shift();

console.log(fruits); // output: [ 'Mango', 'Banana', 'Apple' ];

//! #problem-3 --------------------------------------------------------------------------------->

//* splice (add, Remove, Replace)
// problem: You have an array of numbers: let numbers = [10, 20, 30, 40, 50]; Insert 25 between 20 and 30. Remove 40 from the array. Replace 50 with 60.

let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 0, 25);
numbers.splice(4, 1);
numbers.splice(4, 1, 60);

console.log(numbers); // output: [10, 20, 25, 30, 60];

//! #problem-4 --------------------------------------------------------------------------------->

//* slice
// problem: You have an array of colors: let colors = ["Red", "Green", "Blue", "Yellow", "Purple"]; Create a new array containing only "Green" and "Blue". Create another array containing the last three colors.

let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let greenAndBlue = colors.slice(1, 3);
let lastThreeColors = colors.slice(-3);

console.log(greenAndBlue); // output: ['Green', 'Blue'];
console.log(lastThreeColors); // output: ['Blue', 'Yellow', 'Purple'];

//! #problem-5 --------------------------------------------------------------------------------->

//* concat
// problem: You have two arrays: let boys = ["Liam", "Noah", "James"]; let girls = ["Emma", "Olivia", "Ava"]; Merge both arrays into a new array called children.

let boys = ["Liam", "Noah", "James"];
let girls = ["Emma", "Olivia", "Ava"];

let children = boys.concat(girls);
console.log(children); // output: [ 'Liam', 'Noah', 'James', 'Emma', 'Olivia', 'Ava' ];

//! #problem-6 --------------------------------------------------------------------------------->

//* join
// problem: You have an array of words: let words = ["I", "love", "JavaScript"]; Convert this array into a single string separated by spaces.

let words = ["I", "love", "JavaScript"];
console.log(words.join(' ')); // output: 'I love JavaScript';

//! #problem-7 --------------------------------------------------------------------------------->

//* includes
// problem: You have an array of programming languages: let languages = ["JavaScript", "Python", "C++", "Ruby"]; Check if "Python" is in the array. Check if "Java" is in the array.

let languages = ["JavaScript", "Python", "C++", "Ruby"];
console.log(languages.includes('Python')); // output: true;
console.log(languages.includes('Java')); // output: false;

//! #problem-8 --------------------------------------------------------------------------------->

//* indexOf & lastIndexOf
// problem: You have an array of grades: let grades = [90, 85, 80, 85, 70, 85]; Find the first index of 85. Find the last index of 85.

let grades = [90, 85, 80, 85, 70, 85];
console.log(grades.indexOf(85)); // output: 1;
console.log(grades.lastIndexOf(85)); // output: 5;