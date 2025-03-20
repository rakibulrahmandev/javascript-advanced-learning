// ? javascript have "Object.seal()" methods ------------------------------------------------->

// ? let's try and see how to work "Object.seal()" methods ----------------------------------->

// * 1. Example ------------------------------->

const car = {
    brand: 'Toyota',
    model: 'Corolla'
};

Object.seal(car);

car.brand = 'Camry'; // allow;
car.year = 2023; // not allow;

console.log(car);

// * 2. Example ------------------------------->

const person = {
    name: "Rakibul Rahman",
    age: 18,
    passion: "Programming",
};

Object.seal(person);

person.name = "Rahman"; // allow;
person.age = 16; // allow;
person.passion = "Coding"; // allow;

console.log(person);

// ! note:
// ? Prevents adding or deleting properties but allows modifying existing properties.