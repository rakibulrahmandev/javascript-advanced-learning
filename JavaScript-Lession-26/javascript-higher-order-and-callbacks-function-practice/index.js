//? javascript higher order function and callback function practice -------------------------------------------------------------------->

// basic to intermediate level ---------------------------------------------------------------->

//* 1. Simple Callback Execution ---------------------------->

// this is callback function ----------->
function sayHello() {
    console.log('Hello from Rahman');
}

// this is higher order function ------->
function greet(callback) {
    callback();
};

// higher order function call ---------->
greet(sayHello);

//* 2. Pass a Value to the Callback ------------------------->

// this is higher order function ------->
function processValue(num, callback) {
    callback(num * 2);
};

// this is callback function ----------->
processValue(5, function(result) {
    console.log(`result is: ${result}`);
});

//* 3. Calculator with Callback ----------------------------->

// this is callback function ----------->
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

// this is higher order function ------->
function calculator(a, b, operation) {
    return operation(a, b);
};

// console.log ------------------------->
console.log(calculator(10, 5, add)); // output: 15;
console.log(calculator(10, 5, subtract)); // output: 5;

//* 4. Repeat a Function N Times --------------------------->

// this is higher order function ------->
function repeat(n, callback) {
    for (let i = 0; i < n; i++) {
        callback();
    };
};

// this is callback function ----------->
repeat(3, function() {
    console.log('Repeating...');
});

//* 5. Custom Loop With Condition -------------------------->

// this is higher order function ------->
function customLoop(start, end, step, callback) {
    for(let i = start; i <= end; i += step) {
        callback(i);
    };
};

// this is callback function ----------->
customLoop(1, 5, 1, function(result) {
    console.log(result);
});

//* 6. Check if a Number is Even Using Callback ------------>

// this is callback function ----------->
function isEven(n) {
    return n % 2 === 0;
};

// this is higher order function ------->
function checkNumber(n, callback) {
    console.log(callback(n));
};

// call the function ------------------->
checkNumber(10, isEven); // output: true;
checkNumber(5, isEven); // output: false;