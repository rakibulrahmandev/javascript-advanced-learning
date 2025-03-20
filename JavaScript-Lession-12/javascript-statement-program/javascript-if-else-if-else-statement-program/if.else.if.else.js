// ? let's solve some statement problems -------------------------------------------------->

// ? Task 1: Age Group Classification ------------------------------------>

const age = 60;

if (age < 13) {
    console.log('Child');
} else if (age <= 19) {
    console.log('Teenagers');
} else if (age <= 59) {
    console.log('Adult');
} else {
    console.log('Senior');
};


// ? Task 2: Check Number Range ------------------------------------------>

const number = 50;

if (number < 0) {
    console.log('Negative');
} else if (number <= 100) {
    console.log('Between 0 and 100');
} else {
    console.log('Greater than 100');
};


// ? Task 3: Student Grade Evaluation ------------------------------------>

const marks = 80;

if (marks >= 90) {
    console.log('A+');
} else if (marks >= 80) {
    console.log('A');
} else if (marks >= 70) {
    console.log('B');
} else if (marks >= 60) {
    console.log('C');
} else {
    console.log('Fail');
};


// ? Task 4: Login Status Check ------------------------------------------>

const username = 'admin';
const password = 'admin123';

if (username === 'admin' && password === 'admin123') {
    console.log('Login Successful!');
} else if (username === 'admin' && password !== 'admin123') {
    console.log('Incorrect Password!');
} else {
    console.log('Invalid Username!');
};


// ? Task 5: Weather Temperature ----------------------------------------->

const temperature = 36;

if (temperature < 0) {
    console.log('Freezing cold!');
} else if (temperature <= 20) {
    console.log('Cold');
} else if (temperature <= 35) {
    console.log('Moderate');
} else {
    console.log('Hot');
};


// ? Task 6: Check Leap Year --------------------------------------------->

const year = 2025;

if (year % 4 === 0 && year % 100 !== 0) {
    console.log('Leap Year');
} else if (year % 400 === 0) {
    console.log('Leap Year');
} else {
    console.log('Not a Leap Year');
};

// ? improvement code ---------------------------------------------------->

if (year % 400 === 0) {
    console.log('Leap Year');
} else if (year % 4 === 0 && year % 100 !== 0) {
    console.log('Leap Year');
} else {
    console.log('Not a leap year');
};

// ? Task 7: Salary Tax Calculation -------------------------------------->

const salary = 5000;

if (salary >= 5000) {
    console.log('Tax 20%');
} else if (salary >= 3000) {
    console.log('Tax 15%');
} else if (salary >= 1000) {
    console.log('Tax 10%')
} else {
    console.log('No Tax');
};


// ? Task 8: Check Even or Odd Number ------------------------------------>

const evenOrOdd = 3;

if (evenOrOdd % 2 === 0) {
    console.log('Even Number');
} else {
    console.log('Odd Number');
};