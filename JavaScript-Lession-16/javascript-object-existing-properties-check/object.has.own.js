// ? Javascript object "Object.hasOwn()" property use for check existing property ------------------------------------------------>

// ? let's try and use this 'Object.hasOwn()' property -------------------------------------------->

const person = {
    name: 'Rakibul Rahman',
    age: 18,
    passion: 'Programming'
};

console.log(person);

// ? check 'passion' and 'dream' property exist in this person object ------------------------------>

console.log(Object.hasOwn(person, 'passion')); // output: true; because this 'passion' property exist in this person object.
console.log(Object.hasOwn(person, 'dream')); // output: false; because this 'dream' property not exist in this person object.