// ? Javascript have 'Object.entries(obj)' method --------------------------------------------------->

// ? let's try and see how to work 'Object.entires(obj)' method ------------------------------------->

// * 1. Example ---------------------------->

const person1 = {
    name: 'Rakibul Rahman',
    age: 23,
    passion: 'Engineering and Programming',
    dream: 'Software Engineering'
};

console.log(person1);

// ? Object.entries() return an array of keys and value paris ------------------------------------>

console.log(Object.entries(person1)); // output: [['name', 'Rakibul Rahman'], ['age', 23], ['passion', 'Engineering and Programming'], ['dream', 'Software Engineering']];

// * 2. Example ---------------------------->

const person2 = {
    name: 'Esma Rahman',
    age: 20,
    passion: 'Programming and Cooking',
    dream: 'Good Wife'
};

console.log(person2);

// ? Object.entries() return an array of keys and value paris ------------------------------------>

console.log(Object.entries(person2)); // output: [['name', 'Esma Rahman'], ['age', 20], ['passion', 'Programming and Cooking'], ['dream', 'Good Wife']];

// ! note:
// ? Returns an array of key-value pairs as nested arrays.