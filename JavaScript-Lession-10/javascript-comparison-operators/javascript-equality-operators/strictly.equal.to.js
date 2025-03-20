// ? javascript have some comparison operators for compare values to other values ------------------------->

// ? let's try to the "===" strict equal to (checks value & type) --------------------------->

const userAge1 = 18;
const userAge2 = 18;
const compareStrictEqualTo1 = userAge1 === userAge2;

const userAge3 = 20;
const userAge4 = 25;
const compareStrictEqualTo2 = userAge3 === userAge4;

const userAge5 = 20;
const userAge6 = "20";
const compareStrictEqualTo3 = userAge5 === userAge6;

const userAge7 = "22";
const userAge8 = "22";
const compareStrictEqualTo4 = userAge7 === userAge8;

console.log(compareStrictEqualTo1); // output: true;
console.log(compareStrictEqualTo2); // output: false;
console.log(compareStrictEqualTo3); // output: false;
console.log(compareStrictEqualTo4); // output: true;

// ! note:
// ? this "===" strict equal to (checks value & type). this compare operator check data types and value;