// ? today we learn JavaScript 'trim()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'trim()' -------------------------------------------->

const myName = "        Rakibul Rahman";
const trimNameSpace = myName.trim();

const myDream = "Software Engineering         ";
const trimDreamSpace = myDream.trim();

const myPassion = "        Programming        ";
const trimPassionSpace = myPassion.trim();

console.log(trimNameSpace); // output: "Rakibul Rahman"; remove the whitespace from starting;
console.log(trimDreamSpace); // output: "Software Engineering"; remove the whitespace from ending;
console.log(trimPassionSpace); // output: "Programming"; remove the whitespace from starting and ending;

// ! note:
// ? trim() – Removes whitespace from both ends of a string.