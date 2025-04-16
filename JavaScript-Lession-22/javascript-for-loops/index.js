//? javascript for loops practice -------------------------------------------------------------------------------------------------------------->

//! let's see the for loops syntax --------------------------------------------------------------------------------->
//**
// for (iterator; condition; iteration) {
//  logic;
// }
//  */

//! Let's see the for loops examples ------------------------------------------------------------------------------->

//* ex-1. Print numbers from 1 to 5 ----------------------------------------------->
for (let i = 1; i <= 5; i++) {
    console.log(`Print Numbers From 1 to 5: ${i}`); // output: print the numbers from 1 to 5;
};

//* ex-2. Print even numbers from 2 to 10 ----------------------------------------->
for (let index = 2; index <= 10; index++) {
    if (index % 2 !== 0) {
        console.log(`Even Numbers From 2 to 10: ${index}`); // output: print even numbers from 2 to 10;
    };
};

//* ex-3. Loop through an array --------------------------------------------------->
const fruits = ['Apple', 'Orange', 'Mango', 'Papaya'];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Print The Each Fruits: ${fruits[i]}`); // output: print the each fruits;
};

//* ex-4. Sum of numbers from 1 to 10 --------------------------------------------->
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
};

console.log(`Sum Of Numbers From 1 To 10: ${sum}`); // output: print sum of numbers from 1 to 10;

//* ex-5. Reverse loop (counting down) -------------------------------------------->
for (let count = 10; count >= 0; count--) {
    console.log(`Counting Down: ${count}`); // output: count down number;
};

//* ex-6. Loop through characters of a string ------------------------------------->
const myName = 'Rakibul';

for (let i = 0; i < myName.length; i++) {
    console.log(`Print The Characters Of A String: ${myName[i]}`); // output: print the each characters of the string;
};

const herName = 'Esma';

for (let i = 0; i < herName.length; i++) {
    console.log(`Print The Characters Of A String: ${herName[i]}`); // output: print the each characters of the string;
};

//* ex-7. Print numbers 1–10 ------------------------------------------------------>
for (let index = 1; index <= 10; index++) {
    console.log(`Print Numbers: ${index}`); // output: print the numbers from 1-10;
};

//* ex-8. Print "I love coding" 5 times ------------------------------------------->
for (let i = 1; i <= 5; i++) {
    console.log(`Print "I Love Coding" ${i} Times: I Love Coding.`);
};

//* ex-9. Print square of numbers from 1–5 ---------------------------------------->
for (let i = 1; i <= 5; i++) {
    console.log(`Print Square Of Numbers From 1 To 5: ${i * i}`); // output: print square of numbers from 1 to 5;
}

//* ex-10. Loop through an array of colors ---------------------------------------->
const colors = ['red', 'green', 'blue', 'yellow'];

for (let i = 0; i < colors.length; i++) {
    console.log(`Print Colors Name From The Array: ${colors[i]}`); // output: print colors name from the array;
};

//* ex-11. Countdown from 10 to 1 ------------------------------------------------->
for (let i = 10; i >= 1; i--) {
    console.log(`Countdown From 10 To 1: ${i}`); // output: countdown from 10 to 1;
};

//* ex-12. Print only odd numbers from 1 to 10 ------------------------------------>
for (let i = 1; i <= 10; i += 2) {
    console.log(`Print Only Odd Numbers From 1 To 10: ${i}`); // output: print only odd numbers from 1 to 10;
};

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(`Print Only Odd Numbers From 1 To 10: ${i}`); // output: print only odd numbers from 1 to 10;
    };
};

//* ex-13. Loop through a name and print each letter ------------------------------>
const herNames = 'Aleena';

for (let i = 0; i < herNames.length; i++) {
    console.log(`Print Each Letter from name: ${herNames[i]}`);
};

//* ex-14. Loop with Conditional Logic -------------------------------------------->
// Print numbers from 1 to 20 and show if they are even or odd.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Even Number: ${i}`); // output: print even number;
    } else {
        console.log(`Odd Number: ${i}`); // output: print odd number;
    };
};

//* ex-15. Loop Through an Array and Capitalize Each Word ------------------------->
const animals = ['cat', 'dog', 'elephant', 'lion'];

for (let i = 0; i < animals.length; i++) {
    const capitalize = animals[i].toUpperCase();
    console.log(capitalize); // output: print capitalize each word;
};

//* ex-16. Nested For Loop (Loop inside a loop) ----------------------------------->
// Print a multiplication table (1 to 3)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    };
    console.log(`---------`);
};

//* ex-17. Loop Through a String and Count Vowels --------------------------------->
const text = 'Javascript Is Awesome';
let vowelsCount = 0;

for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        vowelsCount++;
    };
};

console.log(`Total Vowels Count: ${vowelsCount}`); // output: print the vowels count;

for (let i = 0; i < text.length; i++) {
    if ('aeiou'.includes(text[i].toLowerCase())) {
        vowelsCount++;
    };
};

console.log(`Total Vowels Count: ${vowelsCount}`); // output: print the vowels count;

//* ex-18. Skip and Stop with continue and break ---------------------------------->
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // skip 5;
    };
    if (i === 8) {
        break; // stop at 8;
    };
    console.log(i);
};

//* ex-19. Reverse a String Using a For Loop -------------------------------------->
const str = 'Rakibul Rahman';
let reverse = '';

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
};

console.log(`Is Reversed String: ${reverse}`); // output: print revering string;

//* ex-20. Find the Maximum Number in an Array ------------------------------------>
const numbers = [10, 45, 32, 99, 7, 21];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    };
};

console.log(`Max Numbers: ${max}`); // output: print the maximum numbers;

const minimumNumber = [10, 5, 7, 8, 50];
let min = minimumNumber[0];

for (let i = 0; i < minimumNumber.length; i++) {
    if (minimumNumber[i] < min) {
        min = minimumNumber[i];
    };
};

console.log(`Min Numbers: ${min}`); // output: print the minimum numbers;

//* ex-21. Create a New Array with Doubled Values --------------------------------->
const original = [20, 10, 45, 55];
const doubled = [];

for (let i = 0; i < original.length; i++) {
    doubled.push(original[i] * 2);
};

console.log(doubled); // output: print the new array from the old array;

const arrOfNum = [20, 5, 4, 7, 1, 100];
const minimumNum = arrOfNum[0];
const newArrOfMinToMaxNumbers = [];

for (let i = 0; i < arrOfNum.length; i++) {
    if (arrOfNum[i] < minimumNum) {
        newArrOfMinToMaxNumbers.unshift(arrOfNum[i]);
    };
};

console.log(newArrOfMinToMaxNumbers);

//* ex-22. Filter Numbers Greater Than 50 ----------------------------------------->
const scores = [45, 87, 32, 99, 62, 18];
const highScores = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 50) {
        highScores.push(scores[i]);
    };
};

console.log(highScores); // output: print high scores;