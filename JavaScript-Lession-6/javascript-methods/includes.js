// ? today we learn JavaScript 'includes()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'includes()' -------------------------------------------->

const myName = "Rakibul Rahman";
const includesNameRahman = myName.includes('Rahman'); // true;

const myPassion = "Programming";
const includesPassionSoftware = myPassion.includes('software'); // false;

const myDream = "Software engineering";
const includesDreamEngineering = myDream.includes('engineering'); // false;

const myPractice = "JavaScript Practice";
const includesPractice = myPractice.includes('Practice'); // true;

console.log(includesNameRahman); // output: true;
console.log(includesPassionSoftware); // output: false;
console.log(includesDreamEngineering); // output: false;
console.log(includesPractice); // output: true;

// ! note:
// ? includes(searchValue, startIndex) – Checks if a string contains a specified value.