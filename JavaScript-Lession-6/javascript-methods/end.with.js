// ? today we learn JavaScript 'includes()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'includes()' -------------------------------------------->

const myName = "Rakibul Rahman";
const endWithMyName = myName.endsWith("Rakibul");

const myPassion = "Software Engineering";
const endWithMyPassion = myPassion.endsWith("engineering");

const myDream = "Software Engineering";
const endWithMyDream = myDream.endsWith('Engineering');

console.log(endWithMyName); // output: false; because "Rakibul" start in the first;
console.log(endWithMyPassion); // output: false; because endsWith case sensitive;
console.log(endWithMyDream); // output: true;

// ! note:
// ? endsWith(searchValue, length) – Checks if a string ends with a specified value.