//? javascript shallow copy ------------------------------------------------------------------------------------------------------->

//! Shallow copy ----------------------------------------------------------------------------->

// In JavaScript, shallow copy and deep copy are two ways of copying objects, but they behave differently when dealing with nested objects.
// A shallow copy creates a new object, but the nested objects inside it are still referenced from the original object. This means that changes to nested objects affect both the original and copied objects.

//* shallow copy with spread operators ------------------------------------------------------->

//! ex-1
let obj1 = {
    name: 'Rahman',
    passion: 'Programming'
};

// copy with spreed operators (...);
let obj2 = {...obj1};

console.log(obj1); // output: { name: 'Rahman', passion: 'Programming' };
console.log(obj2); // output: { name: 'Rahman', passion: 'Programming' };

//* shallow copy with Object.assign({}, obj) ------------------------------------------------->

//! ex-1
let obj3 = {
    name: 'Esma',
    passion: 'Programming'
};

// copy with Object.assign({}, obj);
let obj4 = Object.assign({}, obj3);

console.log(obj3); // output: { name: 'Esma', passion: 'Programming' };
console.log(obj4); // output: { name: 'Esma', passion: 'Programming' };


//? -------------------------------------------------------------------------------------------------------------------------------> 


//! modify or update the coping objects ------------------------------------------------------>

//* modify or update with spread operators (...) --------------------------------------------->

//! ex-1
let obj5 = {
    name: 'Rakibul',
    passion: 'Programming'
};

let obj6 = {...obj5};

obj6.name = 'Rahman';
obj6.passion = 'Hacking';

// without modify or update;
console.log(obj5); // output: { name: 'Rakibul', passion: 'Programming' };

// with modify or update;
console.log(obj6); // output: { name: 'Rahman', passion: 'Programming' }; update the name property;
console.log(obj6); // output: { name: 'Rahman', passion: 'Hacking' }; update the passion property;

//* modify or update with Object.assign({}, obj) ---------------------------------------------->

//! ex-1
let obj7 = {
    name: 'Esma',
    passion: 'Programming'
};

let obj8 = Object.assign({}, obj7);

obj8.name = 'Esma Rahman';
obj8.passion = 'Hacking';

// without modify or update;
console.log(obj8); // output: { name: 'Esma', passion: 'Programming' };

// with modify or update;
console.log(obj8); // output: { name: 'Esma Rahman', passion: 'Hacking' };


//! note:
// when we use spreed (...) or object.assign({}, obj) it is copy the object with references of original object, so we update and modify the coping object it will be change the original object. Because this is shallow copy.