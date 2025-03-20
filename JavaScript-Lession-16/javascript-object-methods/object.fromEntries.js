// ? // ? Javascript have 'Object.fromEntries(arr)' method --------------------------------------------------->

// ? let's try and see how to work 'Object.fromEntries(arr)' method ------------------------------------------>

// * 1. Example ----------------------------------->

const person1 = [['name', 'Rakibul Rahman'], ['age', 23], ['passion', 'Programming and Hacking'], ['dream', 'Software Engineering']];
const personToObj1 = Object.fromEntries(person1);

console.log(personToObj1); // output: {name: 'Rakibul Rahman', age: 23, passion: 'Programming and Hacking', dream: 'Software Engineering'};

// * 2. Example ----------------------------------->

const person2 = [['name', 'Esma Rahman'], ['age', 20], ['passion', 'Programming and Cooking'], ['dream', 'Good Wife']];
const personToObj2 = Object.fromEntries(person2);

console.log(personToObj2); // output: {name: 'Esma Rahman', age: 20, passion: 'Programming and Cooking', dream: 'Good Wife'};

// ? Object.fromEntries(arr) return an Object from array keys and value paris -------------------------------->

// ! note:
// ? Converts an array of key-value pairs into an object.