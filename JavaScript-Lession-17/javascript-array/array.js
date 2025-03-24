//? javascript array ------------------------------------------------------------------------------------>

//! What is the array ? -------------------------------------------->

//* An array in JavaScript is a special variable that can hold multiple values in a single variable. It is an ordered collection of values, also called elements, and the elements can be of any data type, including numbers, strings, objects, or even other arrays.

//! Why Use an Array ? --------------------------------------------->

//* Arrays are used when you want to work with a collection of data in a structured way. Instead of having to create individual variables for each value, you can group them in an array.

//! How is an Array Created and Managed ? -------------------------->

//* Arrays in JavaScript can be created in several ways, and they provide various methods to manipulate and access the data.

//? lets go and see how to declare array and storing data ----------------------------------------------->

// array of string ------------------------------>
const arrOfString = ['Rakibul', 'Rahman', 'Esma'];
console.log(arrOfString); // output: ['Rakibul', 'Rahman', 'Esma'];

// array of number ------------------------------>
const arrOfNumber = [10, 20, 30, 40, 50];
console.log(arrOfNumber); // output: [10, 20, 30, 40, 50];

// array of boolean ----------------------------->
const arrOfBoolean = [true, false, true, false];
console.log(arrOfBoolean); // output: [true, false, true, false];

// mixed array ---------------------------------->
const mixArr = ['Rakibul', 18, true];
console.log(mixArr); // output: ['Rakibul', 18, true];

//? lets access array elements with array index --------------------------------------------------------->

// access the string array elements ------------->
const arrOfStr = ['Rakibul', 'Esma'];

const accFirstName = arrOfStr[0];
const accSecondName = arrOfStr[1];

console.log(accFirstName); // output: 'Rakibul';
console.log(accSecondName); // output: 'Esma';

// access the number array elements ------------->
const arrOfNum = [10, 20, 30, 40, 50];

const accThirtyNumber = arrOfNum[2];
const accTenNumber = arrOfNum[0];

console.log(accThirtyNumber); // output: 30;
console.log(accTenNumber); // output: 10;

// access the boolean array elements ------------>
const arrOfBoo = [true, false, true, false];

const accFirstBoo = arrOfBoo[0];
const accSecondBoo = arrOfBoo[1];

console.log(accFirstBoo); // output: true;
console.log(accSecondBoo); // output: false;

//? lets update array elements --------------------------------------------------------------------------->

// update the string of array ------------------->
const arrOfUpStr = ['Rakibul', 'Rahman'];
arrOfUpStr[1] = 'Esma';

console.log(arrOfUpStr); // output; ['Rakibul', 'Esma'];

// update the number of array ------------------->
const arrOfUpNum = [10, 20, 30];
arrOfUpNum[2] = 40;

console.log(arrOfUpNum); // output: [10, 20, 40];

// update the boolean of array ------------------>
const arrOfUpBoo = [true, false, true];
arrOfUpBoo[2] = false;

console.log(arrOfUpBoo); // output: [true, false, false];

//? lets practice different way to access and update array elements -------------------------------------->

// access the element which are not exist in the array ----------------------->
const arrOfDiffEle = ['Rakibul', 'Rahman'];
console.log(arrOfDiffEle[3]); // output: undefined;

// update the element which are not exist in the array ----------------------->
const arrOfDiffUpEle = ['Rakibul', 'Rahman', 'Esma'];
arrOfDiffUpEle[5] = 'Alex';

console.log(arrOfDiffUpEle); // output: [ 'Rakibul', 'Rahman', 'Esma', <2 empty items>, 'Alex' ];

// access the index 5 existing element --------------------------------------->
const accExistEle = arrOfDiffUpEle[5];
console.log(accExistEle); // output: 'Alex';