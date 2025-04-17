//? javascript problem-solving -------------------------------------------------------------------------------------------------------------------->

//! beginner level ------------------------------------------------------------------------------------------------>

//* Task-1: Print Numbers from 1 to 10 -------------------------------------->
for (let i = 1; i <= 10; i++) {
    console.log(`Print Numbers From 1 To 10: ${i}`); // output: print the numbers from 1 to 10;
};

//* Task-2: Print Even Numbers from 1 to 20 --------------------------------->
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Print Even Numbers From 1 To 20: ${i}`); // output: print the even numbers from 1 to 20;
    };
};

//* Task-3: Calculate the Sum of Numbers from 1 to 100 ---------------------->
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
};

console.log(`Sum Of Numbers From 1 To 100: ${sum}`); // output: print the sum of numbers from 1 to 100;

//* Task-4: Print the Multiplication Table of 5 (from 1 to 10) -------------->
let multiplicationNumOf = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${multiplicationNumOf} X ${i} = ${multiplicationNumOf * i}`);
};

// or

for (let i = 1; i <= 10; i++) {
    let multiplicationNumOf = 7;
    console.log(`${multiplicationNumOf} X ${i} = ${multiplicationNumOf * i}`);
};

//* Task-5: Find the Factorial of a Number (e.g., 5) ------------------------>
let result = 1;
let n = 5;

for (let i = 1; i <= n; i++) {
    result *= i;
};

console.log(result); // output: 120;

// or
let result2 = 1; 

for (let i = 1; i <= 5; i++) {
    result2 *= i;
};

console.log(result2); // output: 120;

//! intermediate level -------------------------------------------------------------------------------------------->

//* Task-6: Reverse the Elements of an Array -------------------------------->
const arrOfNum = [1, 2, 3, 4, 5];
let reverseArrOfNum = [];

for (let i = 0; i < arrOfNum.length; i++) {
    reverseArrOfNum.unshift(arrOfNum[i]);
};

console.log(reverseArrOfNum); // output: [ 5, 4, 3, 2, 1 ];

//* Task-7: Count the Number of Even and Odd Numbers in an Array ------------>
const num = [10, 21, 4, 7, 8];
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) evenCount++;
    if (num[i] % 2 !== 0) oddCount++;
};

console.log(`Even: ${evenCount} Odd: ${oddCount}`); // output: 

//* Task-8: Find the Largest Number in an Array ----------------------------->
const arrOfNumbers = [5, 12, 8, 20, 3];
let largestNumber = arrOfNumbers[0];

for (let i = 1; i < arrOfNumbers.length; i++) {
    if (largestNumber < arrOfNumbers[i]) largestNumber = arrOfNumbers[i];
};

console.log(largestNumber); // output: 20

//* Task-9: Print All Prime Numbers from 1 to 50 ---------------------------->
for (let num = 2; num <= 50; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        };
    };

    if (isPrime) {
        console.log(num); // output: is prime number;
    };
};

// or
for (let num = 2; num <= 50; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        };
    };

    if (isPrime) {
        console.log(num); // output: is prime number;
    };
};

//* Task-10: Print a Triangle Pattern Using Stars --------------------------->
for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i)); // output: print the stars;
};