// ? today we learn JavaScript 'indexof()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'indexof()' -------------------------------------------->

const myName = "Rakibul Rahman";
const indexofR = myName.indexOf('r');

const myPassion = "Programming";
const indexofG = myPassion.indexOf('g');

const myDream = "Software Engineering";
const indexofE = myDream.indexOf('E');

console.log(indexofR); // output: -1 because "r" is not found "Rakibul Rahman";
console.log(indexofG); // output: 3 because "g" is found "Programming";
console.log(indexofE); // output: 9 because "E" is found "Software Engineering";

// ! note:
// ? indexOf(searchValue, startIndex) – Returns the position of the first occurrence of a specified value.  