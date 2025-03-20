// ? javascript have some comparison operators for compare values to other values ------------------------->

// ? let's try to the "==" equal to (loose comparison) --------------------------->

const userAge1 = 14;
const userAge2 = "14";
const compareEqualTo1 = userAge1 == userAge2;

const userAge3 = 24;
const userAge4 = 24;
const compareEqualTo2 = userAge3 == userAge4;

const userAge5 = 18;
const userAge6 = 20;
const compareEqualTo3 = userAge5 == userAge6;

const userAge7 = "20";
const userAge8 = "20";
const compareEqualTo4 = userAge7 == userAge8;

console.log(compareEqualTo1); // output: true;
console.log(compareEqualTo2); // output: true;
console.log(compareEqualTo3); // output: false;
console.log(compareEqualTo4); // output: true;

// ! note:
// ? this "==" equal to (loose comparison). this compare operator cannot check data types;