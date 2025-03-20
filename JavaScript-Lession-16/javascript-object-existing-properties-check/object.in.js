// ? Javascript object "in" property use for check existing property ---------------------------------------------------->

// ? let's try and use this "in" property ---------------------------------------------------->

const person = {
    name: 'Rakibul Rahman',
    age: 18,
};

console.log(person);

// ? check 'age' and 'passion' property exist in this person object ---------------------------------------->

console.log('name' in person); // output: true; because this 'name' property exist in this person object.
console.log('passion' in person); // output: false; because this 'passion' property not exist in this person object.