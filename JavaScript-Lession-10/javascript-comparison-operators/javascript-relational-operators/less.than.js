// ? javascript have some comparison operators for compare values to other values ------------------------->

// ? let's try to the "<" less than --------------------------->

const num1 = 10;
const num2 = 12;
const lessThanNum2ToNum1 = num1 < num2;

const num3 = 20;
const num4 = 15;
const lessThanNum3ToNum4 = num3 < num4;

const num5 = 25;
const num6 = "20";
const lessThanNum6ToNum5 = num6 < num5;

const num7 = "20";
const num8 = "25";
const lessThanNum8ToNum7 = num7 < num8;

console.log(lessThanNum2ToNum1); // output: true;
console.log(lessThanNum3ToNum4); // output: false;
console.log(lessThanNum6ToNum5); // output: true;
console.log(lessThanNum8ToNum7); // output: true;