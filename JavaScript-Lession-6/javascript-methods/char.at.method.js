// ? today we learn JavaScript 'charAt()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'charAt()' -------------------------------------------->

const myName = "Rakibul Rahman";
const giveSpecificLetterIndexOf8 = myName.charAt(8);

const myPassion = "Programming";
const giveSpecificLetterIndexOf5 = myPassion.charAt(5);

const myDream = "Software engineering";
const giveSpecificLetterIndexOf9 = myDream.charAt(9);

const myProfession = "Full Stack Developer";
const giveSpecificLetterIndexOf25 = myProfession.charAt(25);

const myBirthday = "Nov 15, 2006";
const giveSpecificLetterIndexOfNeg20 = myBirthday.charAt(-20); 

console.log(giveSpecificLetterIndexOf8); // output: "R";
console.log(giveSpecificLetterIndexOf5); // output: "A";
console.log(giveSpecificLetterIndexOf9); // output: "E";
console.log(giveSpecificLetterIndexOf25); // output: empty;
console.log(giveSpecificLetterIndexOfNeg20); // output: empty;

// ! note:
// ? charAt(index) – Returns the character at a specified index.