// ? today we learn JavaScript 'padEnd()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'padEnd()' -------------------------------------------->

const myNumber = '55585554';
const padStartWithStarSymbol = myNumber.padEnd(18, '*');

const accountNumber = '02661978';
const padStartWithZeroSymbol = accountNumber.padEnd(13, '0');

console.log(padStartWithStarSymbol); // output: '55585554**********';
console.log(padStartWithZeroSymbol); // output: '0266197800000';