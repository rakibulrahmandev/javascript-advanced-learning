//? javascript shallow and deep copy practice problem ---------------------------------------------------------------------------------------->

//* Task 1: Shallow Copy with Object Spread -------------------------------------------------------->
let original = {
    name: 'Rakibul Rahman',
    address: {
        city: 'Seoul, Korea',
        zip: 1250
    }
};

// copy original object with spread operators (...);
let copyOri = {...original};

// change the nested object;
copyOri.address.city = 'East See';

console.log(original.address.city); // output: 'East See'

//! note:
// when we copy any object or array with shallow copy like spread operators or Object.assign({}, obj) it is reference of original content that's why when try to change the coping content it will be change the original object.

//* Task 2: Shallow Copy with Array ---------------------------------------------------------------->
let numbers = [1, 2, 3, [4, 5]];

// copy original array with spread operators (...);
let copyNum = [...numbers];

// change the nested object;
copyNum[3][0] = 999;

console.log(numbers[3][0]); // output: 999

//! note:
// when we use shallow copy for copy the original nested array, shallow copy just change top-level properties, so when the nested array is the reference of the copy array. so when we change the copy array it will be change the original array.

//* Task 3: Deep Copy with JSON -------------------------------------------------------------------->
let person = {
    name: 'Rahman', 
    skills: {
        html: 'Good',
        js: 'Intermediate'
    }
};

// copy the person object with JSON;
let deepCopyPerson = JSON.parse(JSON.stringify(person));

// change nested object;
deepCopyPerson.skills.js = 'Expert';

console.log(person.skills.js); // output: 'Intermediate'

//! note:
// when we use JSON for coping the nested object it will be fully true copy doesn't keep the reference of nested objects. that's why we change the coping object it will not effect the original object.

//* Task 4: Manual Check - Shallow vs Deep --------------------------------------------------------->
let user = {
    name: 'Esma Rahman',
    info: {
        age: 15,
        city: 'Seoul, Korea'
    }
};

// copy with shallow copy;
let shallow = {...user};

// copy with deep copy;
let deep = JSON.parse(JSON.stringify(user));

// modify and change some properties;
shallow.info.age = 18;
deep.info.city = 'Dhaka, Bangladesh';

// let's check;
console.log(user.info.age); // output: 18
console.log(user.info.city); // output: 'Seoul, Korea'

//! note:
// when we use shallow copy for nested array or object it's keep the reference. that's why when we modify the shallow info it will be change 15 to 18, and when we use deep copy for nested array or object it's doesn't keep the reference of nested objects, so it's fully true copy. that's why when we modify the deep info it will not change the original nested object.