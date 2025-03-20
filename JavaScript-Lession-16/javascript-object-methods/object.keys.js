// ? Javascript have 'Object.keys(obj)' method --------------------------------------------------->

// ? let's try and see how to work 'Object.keys(obj)' method ------------------------------------->

// * 1. Example ------------------------------->

const person1 = {
    fname: 'Rakibul',
    lname: 'Rahman',
    age: 18,
    passion: 'Programer and hacking',
    dream: 'Software Engineering'
};

console.log(person1);

// ? Object.keys() return an array of the keys -------------------------------------------->

console.log(Object.keys(person1)); // output: [ 'fname', 'lname', 'age', 'passion', 'dream' ];

// * 2. Example ------------------------------->

const person2 = {
    fname: 'Esma',
    lname: 'Rahman',
    age: 15,
    passion: 'Programming and Cooking',
    dream: 'Good Wife'
};

console.log(person2);

// ? Object.keys() return an array of the keys -------------------------------------------->

console.log(Object.keys(person2)); // output: [ 'fname', 'lname', 'age', 'passion', 'dream' ];

// ! note:
// ?  Returns an array of the object's own enumerable property names (keys).