// ? today we learn JavaScript 'slice()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'slice()' -------------------------------------------->

const myName = "Rakibul Rahman";
const sliceRakibul = myName.slice(0, 7);

const myBirthday = "Nov 15, 2025";
const slice2025 = myBirthday.slice(8, 12);

console.log(sliceRakibul); // output: "Rakibul";
console.log(slice2025); // output: 2025;

// ! note:
// ? slice(start, end) – Extracts part of a string and returns it as a new string.