// ? today we learn JavaScript 'match()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'match()' -------------------------------------------->

const myName = "Rakibul Rahman";
const matchRakibul = myName.match(/Rakibul/);

const text = "abc abc abc";
const matchText = text.match(/abc/g); // When the g flag is used, .match() returns an array of all matches.

const hey = "Hello, HELLO, hello";
const result = hey.match(/hello/gi); // It finds all case-insensitive matches.

const myDream = "Software Engineering";
const matchDream = myDream.match(/java/); // Since "java" is not in the string, it returns null.

console.log(matchRakibul); // output: [ 'Rakibul', index: 0, input: 'Rakibul Rahman', groups: undefined ];
console.log(matchText); // output: [ 'abc', 'abc', 'abc' ]; It returns an array with all occurrences of "abc".
console.log(result); // output: [ 'Hello', 'HELLO', 'hello' ];
console.log(matchDream); // output: null;