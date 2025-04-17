//? javascript do-while loops problem-solving ------------------------------------------------------------------------------------------------------->

//! do-while loop problem-solving ----------------------------------------------------------------------------------->

//* pr-1: Problem 1: Print 1 to 10 ----------------------------------------------->
let iterateTheNum = 1;

do{
    console.log(iterateTheNum); // output: print 1 to 10;
    iterateTheNum++;
} while (iterateTheNum <= 10);

//* pr-2: Sum of First 50 Numbers ------------------------------------------------>
let iterateTheNumbers = 1;
let sum = 0;

do {
    sum += iterateTheNumbers;
    iterateTheNumbers++;
} while (iterateTheNumbers <= 50);

console.log(sum); // output: 1275;

//* pr-3: Reverse a Number ------------------------------------------------------->
let num = 1234;
let reversedNum = 0;

do {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
} while (num !== 0);

console.log(reversedNum); // output: 4321;

//* pr-4: Count the Digits of a Number ------------------------------------------->
let digits = 1234;
let count = 0;

do {
    digits = Math.floor(digits / 10);
    count++;
} while (digits !== 0);

console.log(count); // output: 4;

//* pr-5: Print Even Numbers from 2 to 20 ---------------------------------------->
let numbers = 2;

do {
    if (numbers % 2 === 0) console.log(numbers); // output: print even numbers:
    numbers++;
} while (numbers <= 20);

//* pr-6: Factorial of a Number -------------------------------------------------->
let iterateFactNum = 5;
let fact = 1;

do {
    fact *= iterateFactNum;
    iterateFactNum--;
} while (iterateFactNum > 1);

console.log(fact); // output: 120;

//* pr-7: Fibonacci Series (first 10 terms) -------------------------------------->
let n = 10;
let i = 0;
let a = 0;
let b = 1;

do {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    i++;

} while (i < n);

//* pr-8: Check if a Number is a Palindrome -------------------------------------->
let number = 121;
let orgNum = number;
let reverse = 0;

do {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
} while (number !== 0);

console.log(`Is Palindrome: ${reverse === orgNum}`); // output: true;