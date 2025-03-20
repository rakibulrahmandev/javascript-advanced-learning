// ? today we learn JavaScript 'substring()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'substring()' -------------------------------------------->

const myName = "Rakibul Rahman";
const printRakibul = myName.substring(0, 7);

const myDream = "Software Engineering";
const printEngineering = myDream.substring(9, 20);

console.log(printRakibul); // output: "Rakibul Rahman";
console.log(printEngineering); // output: "Engineering";

// ! note:
// ? substring(start, end) – Similar to slice(), but does not accept negative values.