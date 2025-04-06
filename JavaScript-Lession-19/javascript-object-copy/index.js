//? javascript object copy with shallow vs deep copy ---------------------------------------------------------------------------------------------->

//! object copy with shallow copy ----------------------------------------------------------------------------------->

//? shallow copy with spreed Operators (...) and Object.assign({}, obj) ---------------------------------->

//* ex-1
let obj1 = {
    name: 'Rakibul Rahman',
    passion: 'Programming'
};

// copy with spread operators (...);
let obj2 = {...obj1};

console.log(obj1); // output: { name: 'Rakibul Rahman', passion: 'Programming' };
console.log(obj2); // output: { name: 'Rakibul Rahman', passion: 'Programming' };

//* ex-2
let obj3 = {
    name: 'Esma Rahman',
    passion: 'Heart Hacking and Programming',
};

// copy with Object.assign({}, obj);
let obj4 = Object.assign({}, obj3);

console.log(obj3); // output: { name: 'Esma Rahman', passion: 'Heart Hacking and Programming' };
console.log(obj4); // output: { name: 'Esma Rahman', passion: 'Heart Hacking and Programming' };

//! object copy with deep copy --------------------------------------------------------------------------------------->

//? deep copy with JSON and structureClone(obj) ---------------------------------------------------------->

//* ex-1
let obj5 = {
    name: 'Rakibul Rahman',
    passion: 'Hacking and Programming'
};

// copy with JSON
let obj6 = JSON.parse(JSON.stringify(obj5));

console.log(obj5); // output: { name: 'Rakibul Rahman', passion: 'Hacking and Programming' };
console.log(obj6); // output: { name: 'Rakibul Rahman', passion: 'Hacking and Programming' };

//* ex-2
let obj7 = {
    name: 'Esma Rahman',
    passion: 'Programming and Hacking'
};

// copy with structureClone(obj);
let obj8 = structuredClone(obj7);

console.log(obj7); // output: { name: 'Esma Rahman', passion: 'Programming and Hacking' };
console.log(obj8); // output: { name: 'Esma Rahman', passion: 'Programming and Hacking' };