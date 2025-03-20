// ? javascript have "Object.freeze()" method ----------------------------------------------->

// ? let's try and see how to work "Object.freeze()" method --------------------------------->

// * 1. Example --------------------------------------->

const person = {
    name: "Rakibul Rahman",
    age: 18
};

Object.freeze(person);

person.name = "Rahman";
person.age = 16;

console.log(person);

// * 2. Example --------------------------------------->

const product = {
    product_name: "iPhone",
    price: 1200
};

Object.freeze(product);

product.product_name = "Samsung";
product.price = 1000;

console.log(product);

// ! note:
// ? Prevents modifications (adding, deleting, or changing properties).