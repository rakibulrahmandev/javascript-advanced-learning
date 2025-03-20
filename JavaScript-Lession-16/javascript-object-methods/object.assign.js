// ? // ? Javascript have 'Object.assign(arr)' method --------------------------------------------------->

// ? let's try and see how to work 'Object.assign(arr)' method ------------------------------------------>

// * 1. Example -------------------------------------->

const person1 = {
    name: 'Rakibul Rahman',
    age: 23,
    passion: 'Programming and Hacking',
};

const person2 = {
    name: 'Esma Rahman',
    age: 20,
    passion: 'Programming and Cooking'
};

const merged = Object.assign({}, person1, person2);

console.log(merged); // output: { name: 'Esma Rahman', age: 20, passion: 'Programming and Cooking' }

// ! note:
// ? they are not merged because, they have same properties that's why they're overwriting.

// * 2. Example -------------------------------------->

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3};

const merged2 = Object.assign({}, obj1, obj2);

console.log(merged2); // output: {a: 1, b: 2, c: 3};

// ! note:
// ? Copies all properties from one or more source objects to a target object.