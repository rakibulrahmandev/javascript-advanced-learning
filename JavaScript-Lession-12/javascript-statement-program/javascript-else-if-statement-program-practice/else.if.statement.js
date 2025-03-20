// ? javascript have "else if" statement. this statement is combine and working with "if" statement ------------------------------------->

// ? let's try and practice "if" and "else if" statement ---------------------------------------------------->


// ? 1. Task: Temperature Check -------------------------------->

const temperature = 10;

if (temperature >= 30) {
    console.log(`${temperature} It's hot outside.`);
} else if (temperature >= 20 && temperature <= 30) {
    console.log(`${temperature} It's pleasant day.`);
} else if (temperature < 20) {
    console.log(`${temperature} It's cold outside.`);
};

// ? improving task: ------------------------------------------->

if (temperature >= 30) {
    console.log(`${temperature}°C - It's hot outside.`);
} else if (temperature >= 20) {
    console.log(`${temperature}°C - It's a pleasant day.`);
} else if (temperature < 20) {
    console.log(`${temperature}°C - It's cold outside.`);
};

// ? 2. Task: Exam Result -------------------------------------->

const marks = 85;

if (marks >= 90) {
    console.log('Excellent');
} else if (marks >= 80 && marks <= 89) {
    console.log('Very Good');
} else if (marks >= 70 && marks <= 79) {
    console.log('Good');
} else if (marks >= 60 && marks <= 69) {
    console.log('Satisfactory');
};

// ? improving task: ------------------------------------------->

if (marks >= 90) {
    console.log('Excellent');
} else if (marks >= 80) {
    console.log('Very Good');
} else if (marks >= 70) {
    console.log('Good');
} else if (marks >= 60) {
    console.log('Satisfactory');
};

// ? 3. Task: Age Category ------------------------------------->

const age = 18;

if (age <= 12) {
    console.log('Child');
} else if (age <= 19) {
    console.log('Teenager');
} else if (age <= 59) {
    console.log('Adult');
};

// ? 4. Task: Traffic Signal ---------------------------------->

const traffic = 'green';

if (traffic === 'red') {
    console.log('Stop');
} else if (traffic === 'yellow') {
    console.log('Slow down');
} else if (traffic === 'green') {
    console.log('Go');
};

// ? 5. Task: Number Comparison ------------------------------>

const num1 = 50;
const num2 = 30;

if (num1 > num2) {
    console.log('First number is larger');
} else if (num2 > num1) {
    console.log('Second number is larger');
};

// ? improving task: ---------------------------------------->

if (num1 > num2) {
    console.log('First number is larger');
} else if (num2 > num1) {
    console.log('Second number is larger');
} else if (num1 === num2) {
    console.log('Both number are equal');
};