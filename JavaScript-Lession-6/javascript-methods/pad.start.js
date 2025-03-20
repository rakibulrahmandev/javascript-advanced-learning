// ? today we learn JavaScript 'padStart()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'padStart()' -------------------------------------------->

const myNumber = '55585554';
const padStartWithStarSymbol = myNumber.padStart(18, '*');

const accountNumber = '02661978';
const padStartWithZeroSymbol = accountNumber.padStart(13, '0');

console.log(padStartWithStarSymbol); // output: '**********55585554';
console.log(padStartWithZeroSymbol); // output: '0000002661978';

// ! note:
// ? padStart(targetLength, padString) – Pads the beginning of a string with a specified character.