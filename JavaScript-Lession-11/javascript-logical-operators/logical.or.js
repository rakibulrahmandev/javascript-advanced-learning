// ? javascript have some logical and nullish operators today we learn logical and nullish operators -------------------------------------->

// ? let's try logical "||" (OR) operators ------------------------->

const truth = true;
const falsy = false;
const whatIsResult = truth || falsy;

const truth2 = true;
const truth3 = true;
const whatIsResult2 = truth2 || truth3;

const truth4 = true;
const falsy2 = false;
const whatIsResult3 = falsy2 || truth4;

const num0 = 0;
const num1 = 1;
const whatIsResult4 = num0 || num1;

const num2 = 0;
const num3 = 0;
const whatIsResult5 = num2 || num3;

const emptyString = '';
const fillString = 'hey';
const whatIsResult6 = emptyString || fillString;

const emptyString2 = '';
const emptyString3 = '';
const whatIsResult7 = emptyString2 || emptyString3;

const fillString2 = 'hello';
const fillString3 = 'hey';
const whatIsResult8 = fillString2 || fillString3;

const userAge = 18;
const checkAndPrintWithOrOp = (userAge >= 18) || (userAge <= 25);
const checkAndPrintWithOrOp2 = (userAge >= 18) || (userAge >= 25);

console.log(whatIsResult); // output: true;
console.log(whatIsResult2); // output: true;
console.log(whatIsResult3); // output: true;
console.log(whatIsResult4); // output: 1;
console.log(whatIsResult5); // output: 0;
console.log(whatIsResult6); // output: hey;
console.log(whatIsResult7); // output: '';
console.log(whatIsResult8); // output: hello;
console.log(checkAndPrintWithOrOp); // output: true;
console.log(checkAndPrintWithOrOp2); // output: true;

// ! note:
// ? OR (||) – Returns true if at least one operand is true.