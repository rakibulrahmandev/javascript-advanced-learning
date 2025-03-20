// ? javascript have some logical and nullish operators today we learn logical and nullish operators -------------------------------------->

// ? let's try logical "!" (NOT) operators ------------------------->

const truth = true;
const trueToFalse = !truth;

const falsy = false;
const falseToTrue = !falsy;

const age1 = 18;
const age2 = 22;
const fillipResult = !(age1 > age2);

console.log(trueToFalse); // output: false;
console.log(falseToTrue); // output: true;
console.log(fillipResult); // output: false -> true; fillip the boolean value;

// ! note:
// ? NOT (!) – Returns the opposite of a boolean value.