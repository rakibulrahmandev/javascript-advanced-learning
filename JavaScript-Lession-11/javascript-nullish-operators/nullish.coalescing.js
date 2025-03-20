// ? javascript have some logical and nullish operators today we learn logical and nullish operators -------------------------------------->

// ? let's try logical "??" (Nullish Coalescing) operators ------------------------->

const myName = "Rakibul Rahman";
const checkNullishOp = myName ?? "Default Name";

const myPassion = null;
const checkNullishOp2 = myPassion ?? "Default Passion";

const myDream = undefined;
const checkNullishOp3 = myDream ?? "Default Dream";

const luckyNum = 10;
const checkNullishOp4 = luckyNum ?? "Default Luck";

const badNum = null;
const checkNullishOp5 = badNum ?? "Default Bad Number";

console.log(checkNullishOp); // output: "Rakibul Rahman";
console.log(checkNullishOp2); // output: Default Passion;
console.log(checkNullishOp3); // output: "Default Dream";
console.log(checkNullishOp4); // output: 10;
console.log(checkNullishOp5); // output: "Default Bad Number";

// ! note:
// ? Nullish Coalescing (??) – Returns the right operand if the left is null or undefined, otherwise, it returns the left operand.