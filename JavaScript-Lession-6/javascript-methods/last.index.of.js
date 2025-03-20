// ? today we learn JavaScript 'lastIndexOf()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'lastIndexOf()' -------------------------------------------->

const myName = "Rakibul Rahman";
const lastIndexOfMyName = myName.lastIndexOf('m');

const myPassion = "Programming";
const lastIndexOfMyPassion = myPassion.lastIndexOf('g');

const myDream = "Software engineering";
const lastIndexOfMyDream = myDream.lastIndexOf('z');

console.log(lastIndexOfMyName); // output: 11;
console.log(lastIndexOfMyPassion); // output: 10;
console.log(lastIndexOfMyDream); // output: -1;

// ! note:
// ? lastIndexOf(searchValue, startIndex) – Returns the last occurrence of a specified value.