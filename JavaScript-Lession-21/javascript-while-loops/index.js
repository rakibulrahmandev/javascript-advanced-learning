//? javascript while loops ----------------------------------------------------------------------------------------------------------------------------->

//! what is a while loops? ------------------------------------------------------------------------------------------->
// A while loop is used to repeat a block of code as long as a condition is true.

//**
// while loops syntax ---------------------------------------------------------->
// while (condition) {logic}
//  */

//? let's go to the practice ----------------------------------------------------------------------------------------->

//* ex-1. Print 1 to 10 -------------------------->
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
};

//* ex-2. Even numbers from 2 to 20 -------------->
let num = 2;

while (num <= 20) {
    console.log(num);
    num += 2;
};

//* ex-3. Countdown from 10 to 1 ----------------->
let countdown = 10;

while (countdown >= 1) {
    console.log(countdown);
    countdown--;
};

//* ex-4. Sum of numbers from 1 to 100 ----------->
let sum = 0;
let iter = 1;

while (iter <= 100) {
    sum += i;
    iter++
};

console.log(sum);

//* ex-5. Reverse a string ----------------------->
let str = "hello";
let reversed = "";
let iterStr = str.length - 1;

while (iterStr >= 0) {
    reversed += str[iterStr];
    iterStr--;
};

console.log(reversed);

let myName = 'Rakibul Rahman';
let myNameReversed = '';
let iterMyName = myName.length - 1;

while (iterMyName >= 0) {
    myNameReversed = myNameReversed + myName[iterMyName];
    iterMyName--;
};

console.log(myNameReversed);

let myDreamGirlName = 'Esma Rahman';
let myDreamGirlNameReversed = '';
let iterMyDreamGirlNameReversed = myDreamGirlName.length - 1;

while (iterMyDreamGirlNameReversed >= 0) {
    myDreamGirlNameReversed += myDreamGirlName[iterMyDreamGirlNameReversed];
    iterMyDreamGirlNameReversed--;
};

console.log(myDreamGirlNameReversed);

let myMomName = 'Roksana Rahman';
let myMomNameReversed = '';
let iterMyMom = myMomName.length - 1;

while (iterMyMom >= 0) {
    myMomNameReversed += myMomName[iterMyMom];
    iterMyMom--;
};

console.log(myMomNameReversed);

//* ex-6. Keep asking for a number until user enters 0 --------------------->
let input = 0;

while (input != 0) {
    console.log(input);
    input++;
};

//* ex-7. Factorial of a number (e.g., 5! = 120) --------------------------->
let number = 5;
let result = 1;

while (number > 0) {
    result *= number;
    number--;
};

console.log(result);

//? while loops with arrays ------------------------------------------------------------------------------------------>

//* ex-1. Print all items in an array -------------------------------------->
const fruits = ["apple", "banana", "cherry", "mango"];
let iterFruits = 0;

while (iterFruits < fruits.length) {
    console.log(fruits[iterFruits]);
    iterFruits++;
};

//* ex-2. Print only even numbers from an array ---------------------------->
const numbers = [3, 8, 5, 12, 7, 6, 10];
let iterEvenNum = 0;

while (iterEvenNum < numbers.length) {
    if (numbers[iterEvenNum] % 2 === 0) console.log(numbers[iterEvenNum]);
    iterEvenNum++
};

//* ex-3. Count how many items are greater than 50 ------------------------->
const scores = [45, 88, 32, 70, 95, 12];
let iterScores = 0;
let count = 0;

while (iterScores < scores.length) {
    if(scores[iterScores] > 50) {
        count++;
    };
    iterScores++
};

console.log(count);

//* ex-4. Add all items of an array (sum) ---------------------------------->
const marks = [10, 20, 30, 40, 50];
let iterMarks = 0;
let totalMarks = 0;

while (iterMarks < marks.length) {
    totalMarks += marks[iterMarks];
    iterMarks++;
};

console.log(totalMarks);

//* ex-5. Reverse array elements into a new array -------------------------->
const letters = ["a", "b", "c", "d"];
let reversedArr = [];
let iterLetters = letters.length - 1;

while (iterLetters >= 0) {
    reversedArr.push(letters[iterLetters]);
    iterLetters--;
};

console.log(reversedArr);