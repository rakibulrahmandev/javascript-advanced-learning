// ? javascript have some comparison operators for compare values to other values ------------------------->

// ? let's try to the "!=" not equal to (loose comparison) --------------------------->

const userAge1 = 20;
const userAge2 = 25;
const compareNotEqualTo1 = userAge1 != userAge2;

const userAge3 = 25;
const userAge4 = 25;
const compareNotEqualTo2 = userAge3 != userAge4;

const userAge5 = 18;
const userAge6 = "20";
const compareNotEqualTo3 = userAge5 != userAge6;

const userAge7 = "18";
const userAge8 = "18";
const compareNotEqualTo4 = userAge7 != userAge8;

console.log(compareNotEqualTo1); // output: true;
console.log(compareNotEqualTo2); // output: false;
console.log(compareNotEqualTo3); // output: true;
console.log(compareNotEqualTo4); // output: false;

// ! note:
// ? this "!=" not equal to (loose comparison). this compare operator cannot check data types;