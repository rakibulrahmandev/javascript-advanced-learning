// ? javascript have some comparison operators for compare values to other values ------------------------->

// ? let's try to the "<=" less than equal to --------------------------->

const num1 = 20;
const num2 = 20;
const greaterThanEqualToNum1ToNum2 = num1 <= num2;

const num3 = 30;
const num4 = 40;
const greaterThanEqualToNum4ToNum3 = num4 <= num3;

const num5 = 50;
const num6 = "65";
const greaterThanEqualToNum6ToNum5 = num6 <= num5;

const num7 = "100";
const num8 = "100";
const greaterThanEqualToNum7ToNum8 = num7 <= num8;

console.log(greaterThanEqualToNum1ToNum2); // output: true;
console.log(greaterThanEqualToNum4ToNum3); // output: false;
console.log(greaterThanEqualToNum6ToNum5); // output: false;
console.log(greaterThanEqualToNum7ToNum8); // output: true;