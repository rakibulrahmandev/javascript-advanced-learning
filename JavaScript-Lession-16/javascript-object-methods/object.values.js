// ? Javascript have 'Object.values(obj)' method --------------------------------------------------->

// ? let's try and see how to work 'Object.values(obj)' method ------------------------------------->

// * 1. Example ------------------------------->

const person1 = {
    fname: 'Rakibul',
    lname: 'Rahman',
    age: 18,
    passion: 'Programming and Hacking',
    dream: 'Software Engineering'
};

console.log(person1);

// ? Object.keys() return an array of the keys ------------------------------------------------->

console.log(Object.values(person1)); // output: ['Rakibul', 'Rahman', 18, 'Programming and hacking', 'Software Engineering'];

// * 2. Example ------------------------------->

const person2 = {
    fname: 'Esma',
    lname: 'Rahman',
    age: 15,
    passion: 'Programming and Hacking',
    dream: 'Software Engineering'
};

console.log(person2);

// ? Object.keys() return an array of the keys ------------------------------------------------->

console.log(Object.values(person2)); // output: ['Esma', 'Rahman', 15, 'Programming and Hacking', 'Software Engineering'];

// ! note:
// ? Returns an array of the object's own enumerable property values.