// ? lets practice javascript objects and solve some object tasks problem ------------------------------------------------------->

// ? Task 1: Create an Object ------------------------------------------------------------------->

const student = {
    name: 'Rakibul Rahman',
    age: 18,
    grade: 'A',
    subject: 'Math, Physics, Chemistry',
};

console.log(student);

// ? Task 2: Access Object Properties ----------------------------------------------------------->

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'White'
};

console.log(`Car Brand: ${car.brand}, Car Year: ${car.year}, Car Color: ${car.color}`);

// ? Task 3: Modify Object Properties ----------------------------------------------------------->

car.color = 'Black';
car.year = 2024;

console.log(`Updated Color: ${car.color}, Updated Year: ${car.year}`);

// ? Task 4: Add New Properties to an Object ---------------------------------------------------->

car.fuelType = 'Petrol';
car.owner = 'Rahman';

console.log(`Fuel Type: ${car.fuelType}, Owner: ${car.owner}`);

// ? Task 5: Delete a Property from an Object --------------------------------------------------->

delete student.grade;

console.log(student);

// ? Task 6: Nested Objects --------------------------------------------------------------------->

const library = {
    name: 'City Library',
    location: 'Seoul',
    books: {
        fiction: 150,
        nonFiction: 120,
        science: 90
    }
};

console.log(`Number of fiction books: ${library.books.fiction}`);

library.books.science = 100;
library.books.history = 80;

console.log(library);
console.log(`Updated Science Books: ${library.books.science}`);
console.log(`Added New Category: ${library.books.history}`);