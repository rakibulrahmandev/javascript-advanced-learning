//? javascript deep copy ------------------------------------------------------------------------------------------------------->

//! Deep copy ----------------------------------------------------------------------------->

// In JavaScript, shallow copy and deep copy are two ways of copying objects, but they behave differently when dealing with nested objects.
// A deep copy creates a completely independent copy, including all nested objects, so changes in one object don’t affect the other.

//* deep copy with JSON methods (Limited to simple objects) ------------------------------->

//! ex-1
let obj1 = {
    name: 'Rakibul Rahman',
    passion: 'Programming'
};

// copy with JSON;
let obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj2); // output: { name: 'Rakibul Rahman', passion: 'Programming' };

//! note:
// Doesn't work for functions, undefined, Date, RegExp, or special objects.

//* deep copy with Lodash's cloneDeep (_.cloneDeep) --------------------------------------->

//! ex-2
let obj3 = {
    name: 'Esma Rahman',
    passion: 'Programming'
};

// copy with cloneDeep (_.cloneDeep);
// let obj4 = _.cloneDeep(obj3);

console.log(obj3); // output: {name: 'Esma Rahman', passion: 'Programming'};
// console.log(obj4); // output: {name: 'Esma Rahman', passion: 'Programming'};

//! note:
// Requires Lodash library

//* deep copy with structureClone(obj) ---------------------------------------------------->

//! ex-3
let obj4 = {
    name: 'Rakibul Rahman',
    passion: 'Programming'
};

// copy with structureClone(obj);
let obj5 = structuredClone(obj4);

console.log(obj4); // output: { name: 'Rakibul Rahman', passion: 'Programming' };
console.log(obj5); // output: { name: 'Rakibul Rahman', passion: 'Programming' };

//! note:
// Not supported in older browsers.