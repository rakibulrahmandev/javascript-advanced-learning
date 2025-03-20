// ? Today We learn javascript object.freeze() ---------------------------------------------------->

// ? let's try to javascript object.seal() -------------------------------------------------------->

const person = {
    name: 'Rakibul Rahman',
    age: 18,
};

Object.freeze(person);

person.name = 'Rahman'; // Not allowed (cannot modify);
person.passion = 'Hacking and Programming'; // Not allowed (cannot add new properties);

delete person.age; // Not allowed (cannot delete properties);

console.log(person);

// ! note
/**
 * 
 * object.freeze();
 * 
 * Prevents adding, deleting or modifying properties.
 * The object becomes completely immutable (read only);
 * 
*/

// ? Use Object.freeze() when you want to completely lock an object, making it read-only.