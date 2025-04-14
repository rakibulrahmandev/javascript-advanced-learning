//? javascript while loops practice problem-solving -------------------------------------------------------------------------------------------->

//! Basic Level Problem --------------------------------------------------------------------------------------------->

//* Task-1. Print numbers from 1 to 10 ---------------------------------------------->
let iterNum = 1;

while (iterNum <= 10) {
    console.log(iterNum); // output: 55
    iterNum++;
};

//* Task-2. Sum of first 10 natural numbers ----------------------------------------->
let iterSumNum = 0;
let sum = 0;

while (iterSumNum <= 10) {
    sum += iterSumNum;
    iterSumNum++
};

console.log(`Sum Of First 10 Natural Numbers: ${sum}`); // output: 55;

//* Task-3. Print even numbers from 1 to 20 ----------------------------------------->
let iterEvenNum = 1;

while (iterEvenNum <= 20) {
    if (iterEvenNum % 2 === 0) {
        console.log(`Even Number From 1 To 20: ${iterEvenNum}`); // output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    };
    iterEvenNum++;
};

//* Task-4. Print first 10 odd numbers ---------------------------------------------->
let iterOddNum = 1;

while (iterOddNum <= 10) {
    if (iterOddNum % 2 !== 0) {
        console.log(`First 10 Odd Numbers: ${iterOddNum}`); // output: 1, 3, 5, 7, 9
    };
    iterOddNum++;
};

//* Task-5. Sum numbers from 1 to 100 ----------------------------------------------->
let iterSumOfNum = 1;
let sumOfNum1To100 = 0;

while (iterSumOfNum <= 100) {
    sumOfNum1To100 += iterSumOfNum;
    iterSumOfNum++;
};

console.log(`Sum Numbers From 1 To 100: ${sumOfNum1To100}`); // output: 5050;

//* Task-6. Multiplication table of 7 ----------------------------------------------->
let iterMultiplicationTableNum = 1;

while (iterMultiplicationTableNum <= 10) {
    let multipleNum = 7;
    let multiplicationTableOfSeven = multipleNum * iterMultiplicationTableNum;
    console.log(`Multiplication Table Of 7: 7 X ${iterMultiplicationTableNum} = ${multiplicationTableOfSeven}`); // output: Multiplication Table Of 7;
    iterMultiplicationTableNum++;
};

//* Task-7. Count digits in a number ------------------------------------------------>
let num = 123456;
let count = 0;

while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
};

console.log(`Count Digits in a number: ${count}`); // output: 6;

//* Task-8. Reverse a number -------------------------------------------------------->
let number = 1234;
let reverse = 0;

while (number !== 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}

console.log(`Reverse A Number: ${reverse}`); // output: 4321

//* Task-9. Check if number is palindrome ------------------------------------------->
let numbers = 121;
let original = numbers;
let reverseNum = 0;

while (numbers !== 0) {
    let digit = numbers % 10;
    reverseNum = reverseNum * 10 + digit;
    numbers = Math.floor(numbers / 10);
};

console.log(`Check If Number Is Palindrome: ${original === reverseNum}`); // output: true

//* Task-10. Factorial of a number -------------------------------------------------->
let iterFactorial = 5;
let fact = 1;

while (iterFactorial > 1) {
    fact *= iterFactorial;
    iterFactorial--;
};

console.log(`Factorial Of A Number: ${fact}`); // output: 120;

//! Advanced Level Problem ------------------------------------------------------------------------------------>

//* Task-11. Fibonacci Series up to N terms ----------------------------------------->
let n = 10;
let i = 0;
let a = 0;
let b = 1;

while (i < n) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    i++;
}

//* Task-12. Check if a number is prime --------------------------------------------->
let primeNum = 23;
let iterPrimeNum = 2;
let isPrime = true;

while (iterPrimeNum < primeNum) {
    if (primeNum % i === 0) {
        isPrime = false;
        break;
    };
    i++;
};

console.log(`Is Prime: ${isPrime}`); // output: true;

//* Task-13. Sum of digits in a number ---------------------------------------------->
let digitsNum = 1234;
let sumOfDigit = 0;

while (digitsNum !== 0) {
    sumOfDigit += digitsNum % 10;
    digitsNum = Math.floor(digitsNum / 10);
};

console.log(`Sum Of Digit In A Number: ${sumOfDigit}`); // output: 10

//* Task-14. Count vowels in a string ----------------------------------------------->
let str = 'Hello';
let iterStr = 0;
let vowelCount = 0;

while (iterStr < str.length) {
    let checkStr = str[iterStr].toLowerCase();
    if ('aeiou'.includes(checkStr)) vowelCount ++;
    iterStr++;
};

console.log(`Count Vowel In A String: ${vowelCount}`); // output: 2

//* Task-15. Check if a string is palindrome ---------------------------------------->
let paliStr = 'Rakibul Rahman';
let reversed = '';
let iterPaliStr = paliStr.length - 1;

while (iterPaliStr >= 0) {
    reversed += paliStr[iterPaliStr];
    iterPaliStr--;
};

console.log(`Is Palindrome: ${paliStr === iterPaliStr}`); // output: false

//* Task-16. Armstrong Number (3-digit) --------------------------------------------->
let armNum = 153;
let armSum = 0;
let armOrg = armNum;

while (armOrg !== 0) {
    let digit = armOrg % 10;
    armSum += digit ** 3;
    armOrg = Math.floor(armOrg / 10);
};

console.log(`Is Armstrong Number: ${armNum === armSum}`); // output: true

//* Task-17. GCD of two numbers ----------------------------------------------------->
let numA = 18;
let numB = 12;

while (numB !== 0) {
    let temp = numB;
    numB = numA % numB;
    numA = temp;
};

console.log(`GCD: ${numA}`); // output: 6