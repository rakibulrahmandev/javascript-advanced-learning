// ? let's practice and solve some ternary operators problems ----------------------------------------------->

// ? basic level problems ------------------------------------------------------------------------->

// ? 1. Task: Even or Odd. -------------------------------------------------------->

const num = 5;
const evenOrOdd = num % 2 === 0 ? 'Even' : 'Odd';

console.log(evenOrOdd);

// ? 2. Task: Positive Or Negative. ---------------------------------------------->

const num1 = -1;
const positiveOrNegative = num1 >= 0 ? 'Positive' : 'Negative';

console.log(positiveOrNegative);

// ? 3. Task: Check Voting Eligibility. ------------------------------------------->

const age = 60;
const votingEligibility = age >= 18 ? 'You can vote' : 'You cannot vote';

console.log(votingEligibility);

// ? 4. Task: Find the Maximum of Two Numbers. ------------------------------------>

const number1 = 10;
const number2 = 20;

const findMaxOrMin = number1 > number2 ? number1 : number2;

console.log(`Maximum Number: ${findMaxOrMin}`);

// ? 5. Task: Check if a number divisible by 5. ----------------------------------->

const randomNumber = 12;
const divisibleBy = randomNumber % 5 === 0 ? 'Divisible' : 'Not Divisible';

console.log(divisibleBy);

// ? intermediate level problems ----------------------------------------------------------------->

// ? 6. Tasks: Assign Grade based on marks. --------------------------------------->

const marks = 100;
const assignGrade = (marks >= 90) ? 'A' : (marks >= 80) ? 'B' : (marks >= 70) ? 'C' : (marks >= 60) ? 'D' : 'Fail';

console.log(assignGrade);

// ? 7. Tasks: Check Leap Year. --------------------------------------------------->

const year = 3052;
const checkLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? year : 'Not Leap Year';

console.log(`Leap year: ${checkLeapYear}`);

// ? 8. Tasks: Login Authentication. ---------------------------------------------->

const username = 'admin';
const password = 'admin123';

const authenticateUser = username === 'admin' && password === 'admin123' ? 'Login Successful!' : 'Login Failed!'

console.log(authenticateUser);

// ? 9. Tasks: Check Number Type. ------------------------------------------------->

const number3 = 0;
const numberType = number3 > 0 ? 'Positive' : number3 < 0 ? 'Negative' : 'Zero';

console.log(numberType);

// ? 10. Tasks: Assign Default Value. --------------------------------------------->

const userInput = '';
const assignDefaultValue = userInput === '' ? 'Guest' : userInput;

console.log(assignDefaultValue);

// ? advanced level problems -------------------------------------------------------------------->

// ? 11. Tasks: Find the largest of three numbers. -------------------------------->

const number4 = 10;
const number5 = 12;
const number6 = 5;

const findLargestNum = (number4 > number5) ? (number4 > number6 ? number4 : number6) : (number5 > number6 ? number5 : number6);

console.log(findLargestNum);

// ? 12. Tasks: Check if a string is empty. --------------------------------------->

const str = 'Rahman';
const checkStrEmpty = str === '' ? 'Empty String' : 'Non-Empty-String';

console.log(checkStrEmpty);

// ? 13. Tasks: Discount Calculation. --------------------------------------------->

const amount = 50;
const discount = amount > 100 ? amount - ((amount * 10) / 100) : amount - ((amount * 5) / 100); 

console.log(`Discounted Price: $${discount}`);

// ? 14. Tasks: Check Triangle Type. ---------------------------------------------->

const triangleSide1 = 4;
const triangleSide2 = 2;
const triangleSide3 = 5;

const triangleType = (triangleSide1 === triangleSide2 && triangleSide2 === triangleSide3) ? 'Equilateral' : (triangleSide1 === triangleSide2 || triangleSide2 === triangleSide3 || triangleSide1 === triangleSide3) ? 'Isosceles' : 'Scalene';
console.log(triangleType);

// ? 15. Tasks: Determine Day/Night Based on Time. -------------------------------->

const hour = 15;
const timeOfDay = (hour >= 6 && hour < 18) ? 'Day' : 'Night';

console.log(timeOfDay);