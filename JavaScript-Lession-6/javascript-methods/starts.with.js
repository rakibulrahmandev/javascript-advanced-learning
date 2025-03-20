// ? today we learn JavaScript 'startsWith()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'startsWith()' -------------------------------------------->

const myPassion = "Programming";
const startsWithMyPassion = myPassion.startsWith('Program');

const myDream = "Software Engineering";
const startWithMyDream = myDream.startsWith('software');

console.log(startsWithMyPassion); // output: true;
console.log(startWithMyDream); // output: false; because case sensitive;

// ! note:
// ? startsWith(searchValue, startIndex) – Checks if a string starts with a specified value.