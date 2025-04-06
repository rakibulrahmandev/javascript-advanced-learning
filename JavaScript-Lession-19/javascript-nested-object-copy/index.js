//? javascript nested object copy ---------------------------------------------------------------------------------------------------------------------------------->

//! nested object copy with shallow copy ------------------------------------------------------------------------------------------------------->

//? nested object copy with spread operators (...) and Object.assign({}, obj) ------------------------------------------>

//* ex-1
let obj1 = {
    name: 'Rakibul Rahman',
    passion: 'Programming',
    address: {
        country: 'Bangladesh',
        town: 'Dhaka'
    }
};

// copy with spread operators (...);
let obj2 = {...obj1};

console.log(obj1); // output: {name: 'Rakibul Rahman', passion: 'Programming', address: { country: 'Bangladesh', town: 'Dhaka' }};
console.log(obj2); // output: {name: 'Rakibul Rahman', passion: 'Programming', address: { country: 'Bangladesh', town: 'Dhaka' }};

//* ex-2
let obj3 = {
    name: 'Esma Rahman',
    passion: 'Programming',
    address: {
        country: 'Korea',
        town: 'Seoul'
    }
};

// copy with object.assign({}, obj);
let obj4 = Object.assign({}, obj3);

console.log(obj3); // output: {name: 'Esma Rahman', passion: 'Programming', address: { country: 'Korea', town: 'Seoul' }};
console.log(obj4); // output: {name: 'Esma Rahman', passion: 'Programming', address: { country: 'Korea', town: 'Seoul' }};

//! nested object copy with deep copy ----------------------------------------------------------------------------------------------------------->

//? nested object copy with JSON and structureClone(obj) ----------------------------------------------------------------->

//* ex-1
let obj5 = {
    name: 'Rakibul Rahman',
    passion: 'Programming',
    address: {
        country: 'Bangladesh',
        town: 'Dhaka'
    }
};

// copy with JSON;
let obj6 = JSON.parse(JSON.stringify(obj5));

console.log(obj5); // output: {name: 'Rakibul Rahman', passion: 'Programming', address: { country: 'Bangladesh', town: 'Dhaka' }};
console.log(obj6); // output: {name: 'Rakibul Rahman', passion: 'Programming', address: { country: 'Bangladesh', town: 'Dhaka' }};

//* ex-2
let obj7 = {
    name: 'Esma Rahman',
    passion: 'Programming',
    address: {
        country: 'Korea',
        town: 'Seoul'
    }
};

// copy with structureClone(obj);
let obj8 = structuredClone(obj7);

console.log(obj7); // output: {name: 'Esma Rahman', passion: 'Programming', address: { country: 'Korea', town: 'Seoul' }};
console.log(obj8); // output: {name: 'Esma Rahman', passion: 'Programming', address: { country: 'Korea', town: 'Seoul' }};