// ? let's solve some problem with conditional statement and logical operators ------------------------------>

// ? Task 1: Weather Clothing Suggestion ---------------------------------->

const temperature = 25;

if (temperature < 10) {
    console.log('Wear a heavy jacket and gloves.');
} else if (temperature >= 10 && temperature <= 20) {
    console.log('Wear a sweater or light jacket.');
} else if (temperature >= 20 && temperature <= 30) {
    console.log('Wear a t-shirt and jeans.');
} else {
    console.log(`It's very hot! Wear light clothes and stay hydrated.`);
};


// ? Task 2: Train Ticket Pricing ----------------------------------------->

const age = 65;

if (age < 5) {
    console.log('Ride Free.');
} else if (age >= 5 && age <= 12) {
    console.log('50% Discount.');
} else if (age >= 60) {
    console.log('30% Discount');
} else {
    console.log('Full Price.');
};


// ? Task 3: Mobile Data Plan Suggestion ---------------------------------->

const dataUsage = 12;

if (dataUsage < 2) {
    console.log('Basic Plan.');
} else if (dataUsage <= 5) {
    console.log('Standard Plan.');
} else if (dataUsage <= 10) {
    console.log('Premium Plan');
} else {
    console.log('Unlimited Plan');
};


// ? Task 4: Office Access System ----------------------------------------->

const officeAccessSystem = 'Admin';

if (officeAccessSystem === 'Manager' || officeAccessSystem === 'Admin') {
    console.log('Access granted.');
} else if (officeAccessSystem === 'Employee') {
    console.log('Limited Access.');
} else {
    console.log('Access denied');
};


// ? Task 5: Restaurant Menu Pricing -------------------------------------->

const restaurantMenu = 'Vegan Meal';

if (restaurantMenu === 'Vegetarian Meal') {
    console.log('Vegetarian Meal Price $8');
} else if (restaurantMenu === 'Non-Vegetarian Meal') {
    console.log('Non-Vegetarian Meal Price $12');
} else if (restaurantMenu === 'Vegan Meal') {
    console.log('Vegan Meal Price $7');
} else if (restaurantMenu === 'Combo Meal') {
    console.log('Combo Meal Price $15');
} else {
    console.log('Please order something!');
};


// ? Task 6: Student Attendance Check ------------------------------------->

const studentAttendance = 80;

if (studentAttendance >= 75) {
    console.log('You are allowed to take the exam.');
} else if (studentAttendance >= 50 && studentAttendance <= 74) {
    console.log('You need special permission to take the exam.');
} else {
    console.log('You are not allowed to take the exam.');
};