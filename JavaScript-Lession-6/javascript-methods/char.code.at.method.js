// ? today we learn JavaScript 'charCodeAt()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'charCodeAt()' -------------------------------------------->

const myName = "Rakibul Rahman";
const giveUnicodeOfValueR = myName.charCodeAt(8);

const myDream = "Software Engineering";
const giveUnicodeOfValueE = myDream.charCodeAt(10);

const myPassion = "Programming";
const giveUnicodeOfValueP = myPassion.charCodeAt(-10);

const myBirthday = "Nov 15, 2006";
const giveUnicodeOfValueV = myBirthday.charCodeAt(50);

console.log(giveUnicodeOfValueR); // output: unicode of "R" is 82;
console.log(giveUnicodeOfValueE); // output: unicode of "E" is 110;
console.log(giveUnicodeOfValueP); // output: unicode of "P" is NaN;
console.log(giveUnicodeOfValueV); // output: unicode of "V" is NaN;

// ! note:
// ? charCodeAt(index) – Returns the Unicode value of the character at a specified index.