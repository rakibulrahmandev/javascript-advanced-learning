// ? javascript have some comparison operators for compare values to other values ------------------------->

// ? let's try to the "!==" strictly not equal to(Strictly not equal to) --------------------------->

const userAge1 = 20;
const userAge2 = 20;
const compareStrictNotEqualTo1 = userAge1 !== userAge2;

const userAge3 = 20;
const userAge4 = 25;
const compareStrictNotEqualTo2 = userAge3 !== userAge4;

const userAge5 = 18;
const userAge6 = "20";
const compareStrictNotEqualTo3 = userAge5 !== userAge6;

const userAge7 = "25";
const userAge8 = "25";
const compareStrictNotEqualTo4 = userAge7 !== userAge8;

console.log(compareStrictNotEqualTo1); // output: false;
console.log(compareStrictNotEqualTo2); // output: true;
console.log(compareStrictNotEqualTo3); // output: true;
console.log(compareStrictNotEqualTo4); // output: false;

// ! note:
// ? this "!==" strictly not equal to(Strictly not equal to). this compare operator check data types and value;