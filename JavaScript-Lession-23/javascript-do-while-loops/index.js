//? javascript do-while loops ----------------------------------------------------------------------------------------------------------------------->

//! Let's see the do-while loops syntax ------------------------------------------------------------------------->

//**
// do {
//  logic;
// } while (condition)
//  */

//! Let's see some example using do-while loops ----------------------------------------------------------------->

//* ex-1: Print numbers from 1 to 5 ---------------------------------------------->

let iterateNumber = 1;

do {
    console.log(iterateNumber); // output: print the numbers from 1 to 5;
    iterateNumber++;
} while (iterateNumber <= 5);

//* ex-2: Sum of numbers from 1 to 10 -------------------------------------------->

let iterateNum = 1;
let sum = 0;

do {
    sum += iterateNum;
    iterateNum++;
} while (iterateNum <= 10);

console.log(sum); // output: 55;

//* ex-3: Even numbers between 2 and 10 ------------------------------------------>

let iterateNumbers1 = 2;

do {
    if (iterateNumbers1 % 2 === 0) console.log(`Even Numbers: ${iterateNumbers1}`);
    iterateNumbers1++;
} while (iterateNumbers1 <= 10);

// or

let iterateNumbers2 = 2;

do {
    console.log(`Even Numbers: ${iterateNumbers2}`);
    iterateNumbers2 += 2;
} while (iterateNumbers2 <= 10);

//* ex-4: Loop through an array using do...while --------------------------------->

const fruits = ["apple", "banana", "cherry"];
let index = 0;

do {
    console.log(fruits[index]);
    index++;
} while (index < fruits.length);

//* ex-5: Find the first number greater than 50 in an array ---------------------->

const numbers = [10, 22, 35, 65, 80];
let i = 0;
let found;

do {
    if (numbers[i] > 50) {
        found = numbers[i];
        break;
    };
    i++;
} while (i < numbers.length);

console.log(found);

//* ex-6: Add even numbers only from an array ------------------------------------>

const number = [4, 7, 10, 13, 16];
let x = 0;
let evenSum = 0;

do {
    if (number[x] % 2 === 0) {
        evenSum += number[x];
    };
    x++;
} while (x < number.length);

console.log(evenSum);