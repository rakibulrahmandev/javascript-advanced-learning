// ? javascript have "else" statement. this statement is combine and working with "if" statement ------------------------------------->

// ? let's try and practice "if" and "else" statement ---------------------------------------------------->

// ? Task 1: Unlock the Door --------------------------------------->

const password = 'open123';

if (password === 'open123') {
    console.log('Door Unlocked!');
} else{
    console.log('Access Denied!');
};


// ? Task 2: Check Discount Eligibility ---------------------------->

const totalAmount = 150;

if (totalAmount >= 100) {
    console.log('Discount Applied!');
} else {
    console.log('No Discount!');
};


// ? Task 3: Water Temperature Check ------------------------------->

const temperature = 110;

if (temperature >= 100) {
    console.log('Water is Boiling!');
} else {
    console.log('Water is Not Boiling!');
};


// ? Task 4: Attendance Check -------------------------------------->

const attendancePercentage = 80;

if (attendancePercentage >= 75) {
    console.log('Allowed for Exam!');
} else {
    console.log('Not Allowed for Exam!');
};


// ? Task 5: Bank Balance Warning ---------------------------------->

const bankBalance = 50;

if (bankBalance <= 50) {
    console.log('Warning: Low Balance!');
} else {
    console.log('Your balance is sufficient.');
};


// ? Task 6: Check Driving Eligibility ----------------------------->

const age = 20;

if (age >= 18) {
    console.log('You can drive!');
} else {
    console.log('You are not allowed to drive!');
};


// ? Task 7: Check Free Shipping ----------------------------------->

const totalPrice = 50;

if (totalPrice >= 50) {
    console.log('Free Shipping Applied!');
} else {
    console.log('Shipping Charges Applied!');
};


// ? Task 8: Grade Pass or Fail ------------------------------------>

const marks = 45;

if (marks >= 40) {
    console.log('You passed!');
} else {
    console.log('You Failed');
};