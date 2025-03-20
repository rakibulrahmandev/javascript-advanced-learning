// ? Let's practice and solve some problem with switch-case statement ------------------------------->

// ? Basic Level ------------------------------------------------------------------------------------>

// ? 1. Tasks: Day of the Week ---------------------------------------------------------------------->

let inputNumber = 3;

switch (inputNumber) {
    case 1: 
        console.log('Sunday');
        break;

    case 2:
        console.log('Monday');
        break;

    case 3:
        console.log('Tuesday');
        break;

    case 4:
        console.log('Wednesday');
        break;

    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Please input valid number');
};

// ? 2. Tasks: Traffic Light System ----------------------------------------------------------------->

let trafficLight = 'Green'.toLocaleLowerCase();

switch (trafficLight) {
    case 'red':
        console.log('Stop');
        break;
    case 'yellow':
        console.log('Ready');
        break;
    case 'green':
        console.log('Go');
        break;
    default:
        console.log('Please input valid color name.');    
};

// ? 3. Tasks: Simple Calculator -------------------------------------------------------------------->

let num1 = 5;
let num2 = 2;

let operators = "+";

// ! wrong code:
switch (operators) {
    case operators === '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case operators === '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case operators === '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case operators === '/' && num2 === 0:
        console.log(`Error: Division by zero is not allowed.`);
        break;
    case operators === '/':
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log(`Invalid operator! Please use +, -, *, or /.`);
};

// ! right code:
switch (true) {
    case operators === '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case operators === '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case operators === '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case operators === '/' && num2 === 0:
        console.log(`Error: Division by zero is not allowed.`);
        break;
    case operators === '/':
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log(`Invalid operator! Please use +, -, *, or /.`);
};

// ! try to another way:
switch (operators) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        if(num2 === 0){
            console.log('Error: Division by zero is not allowed.');
        } else {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        };
        break;
    default:
        console.log(`Invalid operator! Please use +, -, *, or /.`);
};

// ? Intermediate Level --------------------------------------------------------------------------->

// ? 1. Tasks: Grade System ----------------------------------------------------------------------->

let grade = 'C';

switch (grade) {
    case 'A':
        console.log('Excellent!');
        break;
    case 'B':
        console.log('Good job!');
        break;
    case 'C':
        console.log('Decent attempt!');
        break;
    case 'D':
        console.log('Needs improvement!');
        break;
    case 'F':
        console.log('Incorrect approach!');
        break;
    default:
        console.log('Please input valid grade!');
};

// ? 2. Tasks: Season Finder ---------------------------------------------------------------------->

let month = 5;

switch (month) {
    case 1:
        console.log('Month name: January. Season name: Winter');
        break;
    case 2:
        console.log('Month name: February. Season name: Winter');
        break;
    case 3:
        console.log('Month name: March. Season name: Spring');
        break;
    case 4:
        console.log('Month name: April. Season name: Spring');
        break;
    case 5:
        console.log('Month name: May. Season name: Spring');
        break;
    case 6:
        console.log('Month name: June. Season name: Summer');
        break;
    case 7:
        console.log('Month name: July. Season name: Summer');
        break;
    case 8:
        console.log('Month name: August. Season name: Summer');
        break;
    case 9:
        console.log('Month name: September. Season name: Fall (Autumn)');
        break;
    case 10:
        console.log('Month name: October. Season name: Fall (Autumn)');
        break;
    case 11:
        console.log('Month name: November. Season name: Fall (Autumn)');
        break;
    case 12:
        console.log('Month name: December. Season name: Winter');
        break;
    default:
        console.log('Please input valid month number!');
};

// ? 3. Tasks: Currency Converter ----------------------------------------------------------------->

let amount = 1000;
let currency = 'KRW';

switch (currency) {
    case 'USD':
        console.log(`${amount} BDT is 8.23 USD.`);
        break;
    case 'EUR':
        console.log(`${amount} BDT is 7.86 EUR.`);
        break;
    case 'GBP':
        console.log(`${amount} BDT is 6.51 GBP.`);
        break;
    case 'KRW':
        console.log(`${amount} BDT is 11820.13 KRW.`);
        break;
    default:
        console.log('Please input valid currency and amount.');
};

// ? Advanced Level ------------------------------------------------------------------------------>

// ? 1. Tasks: Restaurant Menu ------------------------------------------------------------------->

let menu = 'Burger'.toLowerCase();

switch (menu) {
    case 'burger':
        console.log('The price of a burger is $5');
        break;
    case 'pizza':
        console.log('The price of a pizza is $10');
        break;
    case 'pasta':
        console.log('The price of a pasta is $15');
        break;
    case 'sushi':
        console.log('The price of sushi is $20');
        break;
    default:
        console.log('Please input a valid item name.');
};

// ? 2. Tasks: Movie Ticket Pricing -------------------------------------------------------------->

let age = 20;

switch (true) {
    case age > 0 && age <= 12:
        console.log('Children Ticket price is $5');
        break;
    case age >= 13 && age <= 19:
        console.log('Teenagers Ticket price is $8');
        break;
    case age >= 20 && age <= 59:
        console.log('Adults Ticket price is $12');
        break;
    case age >= 60:
        console.log('Seniors Ticket price is $7');
        break;
    default:
        console.log('Please input valid age!');
};

// ? 3. Tasks: Zodiac Sign Finder ---------------------------------------------------------------->

let birthMonth = 11;
let birthday = 15;

let zodiacSign;

switch (birthMonth) {
    case 1:
        if (birthday <= 19) {
            zodiacSign = 'Capricorn';
        } else {
            zodiacSign = 'Aquarius';
        };
        break;
    case 2:
        if (birthday <= 18) {
            zodiacSign = 'Aquarius';
        } else {
            zodiacSign = 'Pisces';
        };
        break;
    case 3:
        if (birthday <= 20) {
            zodiacSign = 'Pisces';
        } else {
            zodiacSign = 'Aries';
        };
        break;
    case 4:
        if (birthday <= 19) {
            zodiacSign = 'Aries';
        } else {
            zodiacSign = 'Taurus';
        };
        break;
    case 5: 
        if (birthday <= 20) {
            zodiacSign = 'Taurus';
        } else {
            zodiacSign = 'Gemini';
        };
        break;
    case 6:
        if (birthday <= 20) {
            zodiacSign = 'Gemini';
        } else {
            zodiacSign = 'Cancer';
        };
        break;
    case 7:
        if (birthday <= 22) {
            zodiacSign = 'Cancer';
        } else {
            zodiacSign = 'Leo';
        };
        break;
    case 8:
        if (birthday <= 22) {
            zodiacSign = 'Leo';
        } else {
            zodiacSign = 'Virgo';
        };
        break;
    case 9:
        if (birthday <= 22) {
            zodiacSign = 'Virgo';
        } else {
            zodiacSign = 'Libra';
        };
        break;
    case 10:
        if (birthday <= 22) {
            zodiacSign = 'Libra';
        } else {
            zodiacSign = 'Scorpio';
        };
        break;
    case 11:
        if (birthday <= 21) {
            zodiacSign = 'Scorpio';
        } else {
            zodiacSign = 'Sagittarius';
        };
        break;
    case 12:
        if (birthday <= 21) {
            zodiacSign = 'Sagittarius';
        } else {
            zodiacSign = 'Capricorn';
        };
        break;
    default:
        zodiacSign = 'Invalid month/day';
};

console.log(zodiacSign);