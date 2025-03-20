// ? today we learn JavaScript 'trimEnd()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'trimEnd()' -------------------------------------------->

const myName = "Rakibul Rahman       ";
const trimNameEndSpace = myName.trimEnd();

const myDream = "       Software Engineering";
const trimDreamEndSpace = myDream.trimEnd();

const myPassion = "Programming         ";
const trimPassionEndSpace = myPassion.trimEnd();

console.log(trimNameEndSpace); // output: "Rakibul Rahman"; remove the whitespace from the end of a string;
console.log(trimDreamEndSpace); // output: "          Software Engineering"; cannot remove the whitespace from the start of a string;
console.log(trimPassionEndSpace); // output: "Programming"; remove the whitespace from the end of a string;

// ! note:
// ? Removes whitespace from the end of a string;