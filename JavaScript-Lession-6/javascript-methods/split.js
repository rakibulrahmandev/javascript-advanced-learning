// ? today we learn JavaScript 'split()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'split()' -------------------------------------------->

const myName = "Rakibul Rahman";
const splitName = myName.split(" ");

const myDream = "Software Engineering";
const splitDream = myDream.split(" ");

const myBirthday = "Nov, 15, 2025";
const splitBirthday = myBirthday.split(",");

console.log(splitName); // output: ["Rakibul", "Rahman"]; return array;
console.log(splitDream); // output: ["Software", "Engineering"]; return array;
console.log(splitBirthday); // output: ["Nov", "15", "2025"]; return array;

// ! note:
// ? split(separator, limit) – Splits a string into an array based on a separator.