//? javascript function return value ------------------------------------------------------------------------------------------------------------------------>

//! syntax of function return value ------------------------------------------------------------------------------------>
//**
// function syntax() {
// 
//      return 5 + 5; 
//
// };
// 
//  syntax();
//
// */

//! let's go to see how to work return value of function --------------------------------------------------------------->

//* ex-1.
function additional(a, b) {
    return a + b;
};

const addResult = additional(5, 5);

// check the output:
console.log(addResult); // output: 10;

//* ex-2.
function subtract(x, y) {
    return x - y;
};

const subResult = subtract(5, 5);

// check the output: 
console.log(subResult); // output: 0;

//* ex-3.
function divide(a, b) {
    return a / b;
};

const divideResult = divide(5, 8);

// check the output:
console.log(divideResult); // output: 0.625;

//* ex-4.
function multiple(a, b) {
    return a * b;
};

const multipleResult = multiple(3, 3);

// check the output:
console.log(multipleResult); // output: 9;

//! note:
// the return keyword give us the result of function and end of the function work. when we not use return keyword function don't return the result and gives undefined;