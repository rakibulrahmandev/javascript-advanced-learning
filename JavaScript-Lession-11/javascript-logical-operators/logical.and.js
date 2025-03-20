// ? javascript have some logical and nullish operators today we learn logical and nullish operators -------------------------------------->

// ? let's try logical "&&" (AND) operators ------------------------->

const truth = true;
const falsy = false;
const whatIsResult = truth && falsy;

const truth2 = true;
const truth3 = true;
const whatIsResult2 = truth2 && truth3;

const truth4 = true;
const falsy2 = false;
const whatIsResult3 = falsy2 && truth4;

const emptyString = '';
const fillString = 'Hello';
const whatIsResult4 = emptyString && fillString;

const emptyString2 = '';
const fillString2 = 'hey!';
const whatIsResult5 = fillString2 && emptyString2;

const emptyString3 = '';
const fillString4 = '';
const whatIsResult6 = fillString && emptyString;

const num0 = 0;
const num1 = 1;
const whatIsResult7 = num0 && num1;

const num2 = 2;
const num3 = 3;
const whatIsResult8 = num2 && num3;

const userAge = 18;
const checkAndPrintWithAndOp = (userAge >= 18) && (userAge >= 25);
const checkAndPrintWithAndOp2 = (userAge >= 18) && (userAge <= 25);

console.log(whatIsResult); // output: false;
console.log(whatIsResult2); // output: true;
console.log(whatIsResult3); // output: false;
console.log(whatIsResult4); // output: '';
console.log(whatIsResult5); // output: '';
console.log(whatIsResult6); // output: '';
console.log(whatIsResult7); // output: 0;
console.log(whatIsResult8); // output: 3;
console.log(checkAndPrintWithAndOp); // output: false;
console.log(checkAndPrintWithAndOp2); // output: true;

// ! note:
// ? AND (&&) – Returns true if both operands are true.