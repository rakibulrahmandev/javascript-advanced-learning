// ? today we learn JavaScript 'trimStart()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'trimStart()' -------------------------------------------->

const myName = "        Rakibul Rahman";
const trimNameStartSpace = myName.trimStart();

const myDream = "Software Engineering         ";
const trimDreamEndSpace = myDream.trimStart()

const myPassion = "       Programming";
const trimPassionStartSpace = myPassion.trimStart();

console.log(trimNameStartSpace); // output: "Rakibul Rahman"; remove the whitespace from the starting;
console.log(trimDreamEndSpace); // output: "Software Engineering         "; cannot remove the end whitespace from this string;
console.log(trimPassionStartSpace); // output: "Programming"; remove the whitespace from the starting;

// ! note:
// ? Removes whitespace from the start of a string.